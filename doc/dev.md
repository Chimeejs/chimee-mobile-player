# chimee 移动端插件开发

chimee 对外正式开源后，就有小伙伴开始咨询，chimee 什么时候可以支持移动端，在 pc 端较为稳定之后，我们开始着手做移动端的相关开发。

开发之前首先要考虑的一个事情，chimee 是否能在移动端正常播放：

目前 chimee 主要支持三种格式的视频播放: mp4、hls、flv，pc 上并不支持 hls 和 flv 的播放（sarifi 支持 hls）。通过 [Media Source Extensions](https://developer.mozilla.org/zh-CN/docs/Web/API/Media_Source_Extensions_API)  实现对这两种格式视频的编解码，达到播放的目的。

但是 MSE 的兼容性， 看下图

![](http://p5.qhimg.com/t01e93391d5cd30e84c.jpg)

MSE 在移动端的兼容性太差了，移动端主流浏览器基本都不支持这个 api，好在移动端支持 hls 比较好， flv 不论 pc 还是移动端都不支持

![](http://p2.qhimg.com/t01993f45fdfefd99a1.jpg)

那么在移动端，chimee 支持 mp4， hls的播放，不需要任何编解码器，直接使用原生的就好了，参考如下配置：

```javascript
new Chimee({
  // ...
  box: 'native'
})
```



可以正常播放之后，就开始我们今天主要论述的移动端插件开发：有一些问题、概念还有遇到的坑在下面罗列。

## 思考： 需要哪些插件，是否可以直接使用已经开发完成的插件

目前开发的插件分为两种：

* 展示类插件
* 操作类插件

展示类插件只要略微修改样式即可在移动端直接使用。



操作类插件都是基于 mouse 事件来实现，如果直接在移动端使用，会出现以下问题：

1. click 300ms 延迟问题

   * 问题来源是，当用户第一次触发后，浏览器会等 300ms 来确定用户是否是双击事件，以此来触发手势
   * 解决问题：简单点处理的话是， 判断 touchstart ，touchend 这个事件，如果在这俩事件中， 位移足够小，时间也短的时候，认为是一次 tap （下面会在详细介绍这些判断规则）

2. mousemove 只会在手指移开屏幕的时候触发，而不是在滑动中触发

   * 问题来源可以看下官方文档的解释

     ![](http://p6.qhimg.com/t0195c4b5158d7c15ca.png)

   * 解决方案的话，考虑替换为 touchmove 事件

3. 没能触发 mouseenter、 mouseleave 等事件，目前也没有 touchenter、touchleave 事件可以用，解决方案的话讲这些事件回调逻辑得换一种事件处理，或者移除

替换为 touch 事件后，会暴露的一些问题

1. 透传
  * 问题来源： 比如有一个对话框，点击提交按钮的隐藏对话框，当用户点击提交后，对话框隐藏了，然后 300 ms 后 click 还会触发， 此时 click 事件对象的 target 将不是那个提交按钮， 可能会触发当前点所在元素的 click 操作， 或者 input 的 focus 事件
  * 解决方案： 
    * 遮挡， 在隐藏对话框后，设置一个 300 ms 的透明遮罩，阻止事件透传下去
    * pointer-events，隐藏对话框时，给对话框底部元素设置 pointer-events: none ，300ms 后再设置为 auto
2. 播放器手势很可能会触发浏览器的一些默认手势， 可以 e.preventDefault() 来阻止事件冒泡，达到阻止默认事件触发的目的



思考这么多，终于开始写插件了，在移动端往往要判断用户的什么行为操作，而这些操作得通过 touchstart, touchmove, touchend, touchcancel 这四个事件的来一起判断。

可以看下从 hammer.js 学习来的一些手势规则

```javascript
// tap
TapRecognizer.prototype.defaults = {
  event: 'tap',
  pointers: 1, // 触点
  interval: 300, // 双击操作的最小间隔时间
  time: 250, // 手指在屏幕上的最长时间
  threshold: 9 // 最大移动距离
};
```

总结： tap 操作规则： 

* 单个触电
* 手指在屏幕的最长时间为 250 ms
* 两次点击屏幕的最小间隔为 300 ms 
* 最大距离为 9

```javascript
// press
PressRecognizer.prototype.defaults = {
  event: 'press',   
  pointers: 1,
  time: 251, // 手指在屏幕上的最短时间
  threshold: 9 // 最大移动距离
};
```

总结： press 操作规则：

* 单个触点


* 手指在屏幕的最短时间为 251 ms
* 最大距离为 9

```javascript
// pan
PanRecognizer.prototype.defaults = {
  event: 'pan',
  pointers: 1,
  threshold: 10// 最短移动距离
};
```

总结： pan 操作规则：

- 单个触点


- 最短距离为 10

```javascript

// swipe
SwipeRecognizer.prototype.defaults = {
  event: 'swipe',
  pointers: 1
  threshold: 10, // 最大移动距离
  velocity: 0.3 // 最小速度
};
```

总结： swipe 操作规则：

- 单个触点


- 最短距离为 10
- 最小速度是 0.3

对于插件，我们可以引用 hammer.js 或者 AlloyFinger 手势库，在 create 方法里对 video，container， warper，以及插件自身 dom 进行事件代理。这样书写的话， 会把 create 方法写的比较乱，我们有更好的方式，可以对 chimee 的 events 对象进行一层处扩展，将事件全部放在 events 中。



（说了这么多， 最想说这一句）为了更好的服务开发者，决定提供一个中间插件来暴露这些手势操作出来，duang～～～ （chimee-plugin-gesture 横空出世了～～， 这个插件只是将播放器需要的手势就进行了封装，体积也会比其他手势库小很多

具体使用方式，查看 [readme.md](https://github.com/Chimeejs/chimee-plugin-gesture/blob/master/README.md)

目前提供的手势操作有 tap、press、panstart、panmove、panend、swipe

手势操作问题处理好了，就可以开发上层逻辑了

pc 端的控制条迁移
1. click 替换为 tap 事件
2. pan 替换进度条滑动操作
3. 删除使用率不高的 volume 组件



## 概念：内联播放和同层播放

内联播放：通过设置 playsline，webkit-playsline 这俩个属性达到内联播放的目的，这样在点击播放的时候不会自动去全屏播放

同层播放是微信提出的概念， 主要解决安卓端微信视频播放器的高层级和全屏问题，可以先看下概念，再谈谈我的理解及可以做哪些事情😂

1.  x5-video-player-type="h5" 启用 h5 同层播放器

   * 值是 h5，其他值没有效果
   * 需要在播放前就设置好

2.  x5-video-player-fullscreen="true" 启用全屏

   * 主要作用： （文档描述）如果不申明此属性，页面得到视口区域为原始视口大小(视频未播放前)，比如在微信里，会有一个常驻的标题栏，如果不声明此属性，这个标题栏高度不会给页面，播放时会平均分为两块（上下黑块）


   * 值是 Boolean 选择是否进入全屏
   * 同样需要在播放前设置好

3. x5-video-orientation 控制横竖屏

   * 值： landscape 横屏, portraint竖屏，landscape | portraint根据屏幕自动横竖屏

4. 事件

   * x5videoenterfullscreen 进入全屏回调
   * x5videoexitfullscreen 退出全屏回调

以上是微信的一些概念，我在 魅族 pro 6s 微信中进行了一些测试

我的结论是，确实解决了高层级的问题，video 层上可以放一些组件了。但在播放的时候还是默认全屏的，不论我是否设置 x5-video-player-fullscreen="true"，按照微信这个解决方案，其实还是没有全部解决所有问题，不过对于全屏带来的问题，也有几种不同的解决方案：

1. 不使用自己的播放器 ui ，使用系统默认的 UI， 就是将微信的 h5 同层播放去掉， 这样可以在页面内正常播放，但是这样就不可以在 video 元素上放置组件

2. 特定布局下， 比如： 

   * ![](http://p1.qhimg.com/t0104e7c2a00f8bad9d.jpg)

   * 实现方式：

     * 点击播放就会触发全屏事件，监听 x5videoenterfullscreen 事件进行下面一系列操作

     * 进入全屏后，需要将视频铺满全屏

       ```javascript
        window.onresize = function(){
          video.style.width = window.innerWidth + "px";
          video.style.height = window.innerHeight + "px";
        }
       ```

     * 更新部分样式：

       ```css
       #wrap{
         z-index: -1; // 这样覆盖文档流后的东西显示出来
       }
       container, video {
         background: #fff;
       }
       video{
         objcet-position: 0 0; // 将视频放在顶部
       }
       ```

     * 退出全屏时，关闭窗口

       ```javascript
       video.addEventListener("x5videoexitfullscreen", function(){
         WeixinJSBridge.invoke('closeWindow')
       })
       ```

   * 只要将 video css 稍微变化就可以实现另一种布局方式

     ```css
     video{
       objcet-fit: fill; // 铺满全屏
     }
     ```

     ![](http://p8.qhimg.com/t0107fe27be5b8aa2f9.jpg)

## 此次开发中遇到的坑

移动端的坑还是比较多的

1. 坑一： autoplay 属性

   * 问题描述：设置 autoplay： true 视频依然无法自动播放，在 ios 的更早的版本之前，Meta 信息也不可以预加载，这是为了避免给用户造成高额流量费用而作出的妥协，顺便还能节省用户手机电量。默认触发 play 没有效果，只有在用户有手势操作才可以触发播放

   * 当前解决方案：

     - 没有音轨的视频

     - <video muted>

     - 可视区域内

       满足这三个条件的视频可以在 ios 10+ safari 中自动播放，注意一旦获得音轨之后或者不在可视区域内均会暂停播放

     - 注意： 这些只针对与 safari， 针对第三方 app

       wkwebview： mediaTypesRequiringUserActionForPlayback， allowsInlineMediaPlayback 
       uiwebview：mediaPlaybackRequiresUserAction, allowsInlineMediaPlayback

       可以设置这俩属性来定义用户的 autoplay | playsinline 是否生效

2. 坑二： preload

   * 问题描述： ios 10+ 微信中， 没有加载视频 meta 信息，设置 preload 无效

   * 解决方案：

     ```javascript
     document.addEventListener("WeixinJSBridgeReady", function () {
       player.load();
       // 咦， 既然可以 load 那是不是可以 autoplay（不论有无音轨， 当然是可以的
       player.play();
     }, false);
     ```

   * 坑中有坑：（其实是我没有注意到的小细节...

     当我实例化播放器的过程是一个异步操作的话， 可能 ready 回调中，player 还为定义。而且，这个 play 或者 load 之能在 weixinJSBridge 的时间回调中执行，可以用下面代码达到目的

     ```javascript
     WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
       video.play();
     }, false);
     ```

3. 小问题：

   * iOS 下会有一个大的播放按钮

     ```css
     video::-webkit-media-controls-start-playback-button {
       display: none;
     }
     ```

   * ios 在点击某元素的时候点击的时候，会有一层灰色的遮罩

     ```css
     #wraper{
        -webkit-tap-highlight-color:rgba(255,255,255,0)
     }
     ```

   * ios 音量只可以通过物理按键来触发，直接设置 volume 无效

4. 还有一些已知问题，还没有答案的那种（有人知道答案可以分享下

   * uc / 360 / qq 浏览器还是会，还是会调用自身浏览器的播放器，播放完成之后，还会有一个小广告（惊喜不😂

## 如何调试移动端

如何调试，有几个比较好的工具推荐

1.  [vconsole](https://github.com/Tencent/vConsole)， 不用 usb 连接，引入一个 js 文件就可以获得控制微型控制台，可以看到 log / 网络请求 / html 结构等，就是输入代码的时候太麻烦了一些 
2.  [TBS Studio](https://x5.tencent.com/tbs/guide/debug/season1.html) 用来调试安卓下的微信
3.  使用 mac safari 调 ios safari。 [使用方式](http://www.jianshu.com/p/ed4b1bfb57dc)
4.  chrome 调 chrome 内核浏览器。 [使用方式](https://aotu.io/notes/2017/02/24/Mobile-debug/index.html)

## 最后

chimee 移动端可以用了，欢迎大家使用。提 issue

## 参考

[H5同层播放器接入规范](https://x5.tencent.com/tbs/guide/video.html)

[Muted Autoplay on Mobile: Say Goodbye to Canvas Hacks and Animated GIFs!](https://developers.google.com/web/updates/2016/07/autoplay)
[New  Policies for iOS](https://webkit.org/blog/6784/new-video-policies-for-ios/)

[hammer.js](https://github.com/hammerjs/hammer.js)

[iOS 10 Safari 视频播放新政策](https://imququ.com/post/new-video-policies-for-ios10.html)

[Touch Events](https://www.w3.org/TR/touch-events/)
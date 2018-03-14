# ChimeeMobilePlayer

这是基于[chimee](https://github.com/Chimeejs/chimee)集成的一套您可以直接使用的HTML5移动端播放器，提供有了默认样式。

并集成了以下官方UI插件：
> 1. [chimee-plugin-mobile-controlbar](https://github.com/Chimeejs/chimee-plugin-mobile-controlbar)
> 2. [chimee-plugin-mobile-state](https://github.com/Chimeejs/chimee-plugin-mobile-state)

## 安装

首先根据您的业务场景，你可以直接将lib目录下适合的打包文件引入您的业务代码中，比如直接使用`<script src='./lib/chimee-mobile-player.browser.js'></script>`引用JS。

或者您的项目基于nodejs环境构建的话，直接执行 `npm install chimee-mobile-player --save`，然后再在代码中`import ChimeeMobilePlayer from 'chimee-mobile-player';`即可。

## 基本用法

基于点播场景，可以这样使用：

```javascript
new ChimeeMobilePlayer({
  wrapper: '#wrapper',  // video dom容器
  src: 'http://cdn.toxicjohann.com/lostStar.mp4',
  autoplay: true,
  controls: true,
  playsInline: true,
  preload: true,
  x5VideoPlayerFullscreen: true,
  x5VideoOrientation: true,
  xWebkitAirplay: true,
  muted: true,
  // removeInnerPlugins: ['chimeeMobiControlbar', 'chimeeState'] // 需要移除的插件
});
```

如果您需要的是直播场景场景，可以根据您的媒体容器类型，参考以下配置：

```javascript
// HLS 直播
new ChimeeMobilePlayer({
  wrapper: '#wrapper',  // video dom容器
  src: 'http://chimee.org/xxx/fff.m3u8',
  isLive: true,
  autoplay: true,
  controls: true,
  playsInline: true,
  preload: true,
  x5VideoPlayerFullscreen: true,
  x5VideoOrientation: true,
  xWebkitAirplay: true,
  muted: true,
  // removeInnerPlugins: ['chimeeMobiControlbar', 'chimeeState'] // 需要移除的插件
});

```

## 注意

0. 默认配置是自带控制条和中部状态的，通过配置可以去掉
1. 暂不支持在该元素上使用缩放 zoom / scale
2. ios 上的声音和机器的声音同步，并非设置 volume 可以改变，muted 是有效果的。
3. 在 chimee@0.8.3 之后将 playsline / x5VideoPlayerType 分开配置。
4. 在 0.1.5 版本后，样式文件单独打包， 需要用户单独引入 lib/chimee-mobile-player.browser.css


## FAQ

### 为什么移动端不能播放 m3u8 直播流？

移动端是原生支持 m3u8 播放的，无需使用 `chimee-kernel-hls` 进行编解码。如果你发现使用 chimee 不能顺利播放直播流。请注意 `box` 值是否有设为 `native`。

### 为什么我在移动端播放没有音量？

注意下是否设置了 `muted` 为 `true`。示例中的 muted 均设置了 true 值。

但是在移动播放器中，一般只允许静音的视频进行自动播放，因此如果需要自动播放的，最好将 muted 设为 true。

### 为什么我不能条件音量？

如果你所持有的是 iOS 设备，你会发现声音是和机器的声音同步的，并非设置 volume 可以改变的。

### 预装的内部插件可以去掉吗？

其实 chimee-mobile-player 预装的插件并不多，只有 chimee-plugin-mobile-controlbar,  chimee-plugin-mobile-state。

如果需要的话，可以自行利用 chimee 进行搭建也可以利用 removeInnerPlugins 进行。

*希望您用着方便，有相应问题请随时反馈。*

var player;

// 配置变化则销毁现有播放器，并重建新的播放器
function rebuildPlayer (src, type, box, poster) {

  player && !player.destroyed && player.destroy();
  player = new ChimeeMobilePlayer({
    // 播放地址
    src: src,
    // 直播:live 点播：vod
    isLive: type == 'live',
    // 编解码容器
    poster: poster,
    // dom容器
    wrapper: '#wrapper',
    // video
    autoplay: true,
    controls: true,
    playsInline: true,
    preload: true,
    x5VideoPlayerFullscreen: true,
    x5VideoOrientation: true,
    xWebkitAirplay: true,
    muted: true,
    box: 'native',
    // kernels: {
    //   hls: ChimeeKernelHls
    // }
    // removeInnerPlugins: ['chimeeMobiControlbar', 'chimeeState']
  });

  try{
    WeixinJSBridge && WeixinJsBridge.invoke('getNetworkType', {}, function () {
      player.load();
    })
  }catch(e) {
    console.warn('不支持WeixinJSBridge')
  }
}

// 快捷按键操作
$('#tabs_box button').on('click', function(e){
  var data = $(this).data();
  $('#src').val(data.src);
  $('#type').val(data.type);
  $('#poster').val(data.poster);
  $('#enter').click();
});
// 自定义配置确认
$('#enter').on('click', function(e){
  rebuildPlayer(
    $('#src').val(),
    $('#type').val(),
    $('#poster').val()||undefined
  );
}).click();

// 取个SD的直播流来用用
function getSDLiveHlsUrl(sn, cbk){
  console.log(sn)
  var a = 've3.ji', b = '60.c';
  $.ajax({
    url: 'https://li'+ a +'a.3'+ b +'n/public/getInfoAndPlayV2?from=mpc_ipcam_web&sn='+ sn +'&taskid='+ +new Date(),
    type:'get',
    dataType:'jsonp'
  }).then(function(data){
    var liveHLS = data && data.playInfo && data.playInfo.hls;
    if(!liveHLS)return;
    cbk && cbk(liveHLS, data.publicInfo.thumbnail);
  });
}
// 取个SD的HLS直播流来用用
getSDLiveHlsUrl('3'+'6052770915', function(hls, poster){
  $('button[data-type="live"]').attr('data-src',hls).attr('data-poster', poster);
});

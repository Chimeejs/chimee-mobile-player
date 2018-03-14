import Chimee from 'chimee';
import { isObject, isArray, UAParser, Log } from 'chimee-helper';
import chimeeControl from 'chimee-plugin-mobile-controlbar';
import chimeeState from 'chimee-plugin-mobile-state';
import gestureFactory from 'chimee-plugin-gesture';
import { uiIsAvailable, reduceArray } from './util.js';
import './main.css';

const DEFAULT_DISABLE_UA = [ 'UCBrowser', '360Browser', 'QQBrowser' ];
const innerPlugins = [
  chimeeControl.name,
  chimeeState.name,
];

Chimee.install(chimeeControl);
Chimee.install(chimeeState);

function handlePlugins(config) {
  config.plugin = config.plugin || config.plugins;
  if (!isArray(config.plugin)) config.plugin = [];
  const configPluginNames = config.plugin.map(item => (isObject(item) ? item.name : item));
  innerPlugins.forEach(name => {
    if (configPluginNames.indexOf(name) > -1) return;
    config.plugin.push(name);
  });
  config.plugin = reduceArray(config.plugin, config.removeInnerPlugins);
}

class ChimeeMobilePlayer extends Chimee {
  constructor(config) {
    if (!isObject(config)) throw new TypeError('You must pass an Object as config when you new ChimeePlayer');
    const defaultDisableUA = config.disableUA === undefined ? DEFAULT_DISABLE_UA : config.disableUA;
    const ua = new UAParser().getResult();
    const isUIAvailable = uiIsAvailable(defaultDisableUA, ua);

    // 添加UI插件
    if (isUIAvailable) handlePlugins(config);

    config.box = config.box === undefined ? 'native' : config.box;

    super(config);
    this.hlsWarn(this.box);
    this.ready.then(() => {
      this.$watch('box', box => this.hlsWarn(box));
    });
  }

  hlsWarn(box) {
    if (box === 'hls') {
      Log.warn('chimee-mobile-player', 'Mobile support m3u8, you do not need to use hls box. See more https://github.com/Chimeejs/chimee-mobile-player/blob/master/README.md#%E4%B8%BA%E4%BB%80%E4%B9%88%E7%A7%BB%E5%8A%A8%E7%AB%AF%E4%B8%8D%E8%83%BD%E6%92%AD%E6%94%BE-m3u8-%E7%9B%B4%E6%92%AD%E6%B5%81');
    }
  }
}
// 暴露手势工厂方法
ChimeeMobilePlayer.gestureFactory = gestureFactory;

export default ChimeeMobilePlayer;

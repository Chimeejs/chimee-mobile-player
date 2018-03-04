import Chimee from 'chimee';
import { isObject, isArray, UAParser, Log } from 'chimee-helper';
import chimeeControl from 'chimee-plugin-mobile-controlbar';
import chimeeState from 'chimee-plugin-mobile-state';
import gestureFactory from 'chimee-plugin-gesture';
import { uiIsAvailable, reduceArray } from './util.js';
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
    this.ready.then(() => {
      this.hlsWarn(this.box);
      this.$watch('box', box => this.hlsWarn(box));
    });
  }

  hlsWarn(box) {
    if (box === 'hls') {
      Log.warn('chimee-mobile-player', 'Mobile support m3u8, you do not need to use hls box.');
    }
  }
}
// 暴露手势工厂方法
ChimeeMobilePlayer.gestureFactory = gestureFactory;

export default ChimeeMobilePlayer;

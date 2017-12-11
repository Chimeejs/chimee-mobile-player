import Chimee from 'chimee';
import {isObject, isArray, UAParser} from 'chimee-helper';
import chimeeControl from 'chimee-plugin-mobile-controlbar';
import chimeeState from 'chimee-plugin-mobile-state';
import gestureFactory from 'chimee-plugin-gesture';
import {uiIsAvailable} from './util.js';
const DEFAULT_DISABLE_UA = ['UCBrowser', 'UCBrowser', 'QQBrowser'];

Chimee.install(chimeeControl);
Chimee.install(chimeeState);

class ChimeeMobilePlayer extends Chimee {
  constructor (config) {
    if(!isObject(config)) throw new TypeError('You must pass an Object as config when you new ChimeePlayer');
    const defaultDisableUA = config.disableUA === undefined ? DEFAULT_DISABLE_UA : config.disableUA;
    const ua = new UAParser().getResult();
    const isUIAvailable = uiIsAvailable(defaultDisableUA, ua);

    // 添加UI插件
    if(isUIAvailable) {
      config.plugin = config.plugin || config.plugins;
      if(!isArray(config.plugin)) config.plugin = [];
      const innerPlugins = [
        chimeeControl.name,
        chimeeState.name,
      ];
      const configPluginNames = config.plugin.map(item => isObject(item) ? item.name : item);
      innerPlugins.forEach(name => {
        if(configPluginNames.indexOf(name) > -1) return;
        config.plugin.push(name);
      });
    }

    config.box = config.box === undefined ? 'native' : config.box;

    super(config);
  }
}
// 暴露手势工厂方法
ChimeeMobilePlayer.gestureFactory = gestureFactory;

export default ChimeeMobilePlayer;

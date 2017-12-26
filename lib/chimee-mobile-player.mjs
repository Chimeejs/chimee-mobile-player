
/** ChimeeMobilePlayer
 * chimee-mobile-player v0.0.2
 * (c) 2017 yandeqiang
 * Released under MIT
 */

import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import Chimee from 'chimee';
import { UAParser, isArray, isObject } from 'chimee-helper';
import chimeeControl from 'chimee-plugin-mobile-controlbar';
import chimeeState from 'chimee-plugin-mobile-state';
import gestureFactory from 'chimee-plugin-gesture';
import { uiIsAvailable } from './util.js';

var DEFAULT_DISABLE_UA = ['UCBrowser', 'UCBrowser', 'QQBrowser'];

Chimee.install(chimeeControl);
Chimee.install(chimeeState);

var ChimeeMobilePlayer = function (_Chimee) {
  _inherits(ChimeeMobilePlayer, _Chimee);

  function ChimeeMobilePlayer(config) {
    _classCallCheck(this, ChimeeMobilePlayer);

    if (!isObject(config)) throw new TypeError('You must pass an Object as config when you new ChimeePlayer');
    var defaultDisableUA = config.disableUA === undefined ? DEFAULT_DISABLE_UA : config.disableUA;
    var ua = new UAParser().getResult();
    var isUIAvailable = uiIsAvailable(defaultDisableUA, ua);

    // 添加UI插件
    if (isUIAvailable) {
      config.plugin = config.plugin || config.plugins;
      if (!isArray(config.plugin)) config.plugin = [];
      var innerPlugins = [chimeeControl.name, chimeeState.name];
      var configPluginNames = config.plugin.map(function (item) {
        return isObject(item) ? item.name : item;
      });
      innerPlugins.forEach(function (name) {
        if (configPluginNames.indexOf(name) > -1) return;
        config.plugin.push(name);
      });
    }

    config.box = config.box === undefined ? 'native' : config.box;

    return _possibleConstructorReturn(this, (ChimeeMobilePlayer.__proto__ || _Object$getPrototypeOf(ChimeeMobilePlayer)).call(this, config));
  }

  return ChimeeMobilePlayer;
}(Chimee);
// 暴露手势工厂方法


ChimeeMobilePlayer.gestureFactory = gestureFactory;

export default ChimeeMobilePlayer;

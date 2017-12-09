
/** ChimeeMobilePlayer
 * chimee-mobile-player v0.0.2
 * (c) 2017 yandeqiang
 * Released under MIT
 */

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _Object$getPrototypeOf = _interopDefault(require('babel-runtime/core-js/object/get-prototype-of'));
var _classCallCheck = _interopDefault(require('babel-runtime/helpers/classCallCheck'));
var _possibleConstructorReturn = _interopDefault(require('babel-runtime/helpers/possibleConstructorReturn'));
var _inherits = _interopDefault(require('babel-runtime/helpers/inherits'));
var Chimee = _interopDefault(require('chimee'));
var chimeeHelper = require('chimee-helper');
var chimeeControl = _interopDefault(require('chimee-plugin-mobile-controlbar'));
var chimeeState = _interopDefault(require('chimee-plugin-mobile-state'));
var gestureFactory = _interopDefault(require('chimee-plugin-gesture'));

Chimee.install(chimeeControl);
Chimee.install(chimeeState);

var ChimeeMobilePlayer = function (_Chimee) {
  _inherits(ChimeeMobilePlayer, _Chimee);

  function ChimeeMobilePlayer(config) {
    _classCallCheck(this, ChimeeMobilePlayer);

    if (!chimeeHelper.isObject(config)) throw new TypeError('You must pass an Object as config when you new ChimeePlayer');

    // 添加UI插件
    config.plugin = config.plugin || config.plugins;
    if (!chimeeHelper.isArray(config.plugin)) config.plugin = [];
    var innerPlugins = [chimeeControl.name, chimeeState.name];
    var configPluginNames = config.plugin.map(function (item) {
      return chimeeHelper.isObject(item) ? item.name : item;
    });
    innerPlugins.forEach(function (name) {
      if (configPluginNames.indexOf(name) > -1) return;
      config.plugin.push(name);
    });
    config.box = config.box === undefined ? 'native' : config.box;

    return _possibleConstructorReturn(this, (ChimeeMobilePlayer.__proto__ || _Object$getPrototypeOf(ChimeeMobilePlayer)).call(this, config));
  }

  return ChimeeMobilePlayer;
}(Chimee);
// 暴露手势工厂方法


ChimeeMobilePlayer.gestureFactory = gestureFactory;

module.exports = ChimeeMobilePlayer;

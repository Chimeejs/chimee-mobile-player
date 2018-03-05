
/** chimeeMobilePlayer
 * chimee-mobile-player v0.1.2
 * (c) 2017-2018 yandeqiang
 * Released under MIT
 */

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _Object$getPrototypeOf = _interopDefault(require('babel-runtime/core-js/object/get-prototype-of'));
var _classCallCheck = _interopDefault(require('babel-runtime/helpers/classCallCheck'));
var _createClass = _interopDefault(require('babel-runtime/helpers/createClass'));
var _possibleConstructorReturn = _interopDefault(require('babel-runtime/helpers/possibleConstructorReturn'));
var _inherits = _interopDefault(require('babel-runtime/helpers/inherits'));
var Chimee = _interopDefault(require('chimee'));
var chimeeHelper = require('chimee-helper');
var chimeeControl = _interopDefault(require('chimee-plugin-mobile-controlbar'));
var chimeeState = _interopDefault(require('chimee-plugin-mobile-state'));
var gestureFactory = _interopDefault(require('chimee-plugin-gesture'));
var util_js = require('./util.js');

var DEFAULT_DISABLE_UA = ['UCBrowser', '360Browser', 'QQBrowser'];
var innerPlugins = [chimeeControl.name, chimeeState.name];

Chimee.install(chimeeControl);
Chimee.install(chimeeState);

function handlePlugins(config) {
  config.plugin = config.plugin || config.plugins;
  if (!chimeeHelper.isArray(config.plugin)) config.plugin = [];
  var configPluginNames = config.plugin.map(function (item) {
    return chimeeHelper.isObject(item) ? item.name : item;
  });
  innerPlugins.forEach(function (name) {
    if (configPluginNames.indexOf(name) > -1) return;
    config.plugin.push(name);
  });
  config.plugin = util_js.reduceArray(config.plugin, config.removeInnerPlugins);
}

var ChimeeMobilePlayer = function (_Chimee) {
  _inherits(ChimeeMobilePlayer, _Chimee);

  function ChimeeMobilePlayer(config) {
    _classCallCheck(this, ChimeeMobilePlayer);

    if (!chimeeHelper.isObject(config)) throw new TypeError('You must pass an Object as config when you new ChimeePlayer');
    var defaultDisableUA = config.disableUA === undefined ? DEFAULT_DISABLE_UA : config.disableUA;
    var ua = new chimeeHelper.UAParser().getResult();
    var isUIAvailable = util_js.uiIsAvailable(defaultDisableUA, ua);

    // 添加UI插件
    if (isUIAvailable) handlePlugins(config);

    config.box = config.box === undefined ? 'native' : config.box;

    var _this = _possibleConstructorReturn(this, (ChimeeMobilePlayer.__proto__ || _Object$getPrototypeOf(ChimeeMobilePlayer)).call(this, config));

    _this.ready.then(function () {
      _this.hlsWarn(_this.box);
      _this.$watch('box', function (box) {
        return _this.hlsWarn(box);
      });
    });
    return _this;
  }

  _createClass(ChimeeMobilePlayer, [{
    key: 'hlsWarn',
    value: function hlsWarn(box) {
      if (box === 'hls') {
        chimeeHelper.Log.warn('chimee-mobile-player', 'Mobile support m3u8, you do not need to use hls box.');
      }
    }
  }]);

  return ChimeeMobilePlayer;
}(Chimee);
// 暴露手势工厂方法


ChimeeMobilePlayer.gestureFactory = gestureFactory;

module.exports = ChimeeMobilePlayer;

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _noise = __webpack_require__(1);

var _noise2 = _interopRequireDefault(_noise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noise = new _noise2.default();
noise.call();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cssMaker = __webpack_require__(2);

var _cssMaker2 = _interopRequireDefault(_cssMaker);

var _rewriter = __webpack_require__(3);

var _rewriter2 = _interopRequireDefault(_rewriter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Noise = function () {
  function Noise() {
    _classCallCheck(this, Noise);

    this.rewriter = new _rewriter2.default();
    this.char_class_names = false;
    this.css_maker = new _cssMaker2.default();
  }

  _createClass(Noise, [{
    key: 'call',
    value: function call() {
      this.rewriter.call();
      this.char_class_names = this.rewriter.class_names;
      this.css_maker.call(this.char_class_names);
    }
  }]);

  return Noise;
}();

exports.default = Noise;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _keyframesMaker = __webpack_require__(4);

var _keyframesMaker2 = _interopRequireDefault(_keyframesMaker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CssMaker = function (_KeyframesMaker) {
  _inherits(CssMaker, _KeyframesMaker);

  function CssMaker() {
    _classCallCheck(this, CssMaker);

    var _this = _possibleConstructorReturn(this, (CssMaker.__proto__ || Object.getPrototypeOf(CssMaker)).call(this));

    _this.char_class_names;
    return _this;
  }

  _createClass(CssMaker, [{
    key: 'call',
    value: function call(char_class_names) {
      this.char_class_names = char_class_names;
      var css = this.init_css_tag();
      css.appendChild(document.createTextNode(this.generate_css_content()));
      document.getElementsByTagName('head')[0].appendChild(css);
    }
  }, {
    key: 'generate_css_content',
    value: function generate_css_content() {
      var _this2 = this;

      var csses = new Array();
      csses.push(this.make_common_char_css());
      this.char_class_names.forEach(function (class_name) {
        var keyframes_name = class_name + '_anime';
        var keyframes = _this2.make_keyframes(keyframes_name, 20); //XXX
        csses.push(keyframes);
        csses.push('.noise:hover .' + class_name + ' { animation: ' + keyframes_name + ' 1s infinite; }');
      });
      return csses.join('\n');
    }
  }, {
    key: 'make_common_char_css',
    value: function make_common_char_css() {
      return '.noise_char { display: inline-block; }';
    }
  }, {
    key: 'init_css_tag',
    value: function init_css_tag() {
      var css = document.createElement('style');
      css.media = 'screen';
      css.type = 'text/css';
      return css;
    }
  }]);

  return CssMaker;
}(_keyframesMaker2.default);

exports.default = CssMaker;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rewriter = function () {
  function Rewriter() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'noise';

    _classCallCheck(this, Rewriter);

    this.text = document.getElementsByClassName(target)[0].innerText;
    this.class_names = new Array();
    this.new_text = this.make_new_text();
  }

  _createClass(Rewriter, [{
    key: 'call',
    value: function call() {
      this.clear();
      this.new_text.forEach(function (s) {
        return document.getElementsByClassName('noise')[0].appendChild(s);
      });
    }
  }, {
    key: 'clear',
    value: function clear() {
      document.getElementsByClassName('noise')[0].innerText = '';
    }
  }, {
    key: 'make_new_text',
    value: function make_new_text() {
      var _this = this;

      var new_text = [];
      this.to_array(this.text).forEach(function (s, i) {
        var char = document.createTextNode(s);
        var node = _this.make_span_tag('char_' + i);
        node.appendChild(char);
        new_text.push(node);
      });
      return new_text;
    }
  }, {
    key: 'make_span_tag',
    value: function make_span_tag(class_name) {
      var node = document.createElement('span');
      if (class_name) {
        node.setAttribute('class', class_name + ' noise_char'); //XXX
        this.class_names.push(class_name);
      }
      return node;
    }
  }, {
    key: 'to_array',
    value: function to_array(text) {
      // 空白を含めてsplit()でarrayを作成出来ない
      var array = [];
      for (var i = 0; i < text.length; i++) {
        var char = text[i] == ' ' ? '\xA0' : text[i];
        array.push(char);
      }
      return array;
    }
  }]);

  return Rewriter;
}();

exports.default = Rewriter;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _random = __webpack_require__(5);

var _random2 = _interopRequireDefault(_random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeyframesMaker = function () {
  function KeyframesMaker() {
    _classCallCheck(this, KeyframesMaker);
  }

  _createClass(KeyframesMaker, [{
    key: 'get_pos',
    value: function get_pos() {
      var min = -3;
      var max = 3;
      if ((0, _random2.default)(1, 10) == 1) {
        return [(0, _random2.default)(min, max), (0, _random2.default)(-200, 200)].map(function (x) {
          return x + 'px';
        });
      } //XXX
      return [(0, _random2.default)(min, max), (0, _random2.default)(min, max)].map(function (x) {
        return x + 'px';
      });
    }
  }, {
    key: 'make_translate',
    value: function make_translate() {
      return 'translate(' + this.get_pos().join(', ') + ')';
    }
  }, {
    key: 'get_rotate',
    value: function get_rotate() {
      var min = -5;
      var max = 5;
      return (0, _random2.default)(min, max) + 'deg';
    }
  }, {
    key: 'make_rotate',
    value: function make_rotate() {
      return 'rotate(' + this.get_rotate() + ')';
    }
  }, {
    key: 'get_scale',
    value: function get_scale() {
      var min = 0;
      var max = 15;
      if ((0, _random2.default)(1, 100) == 1) {
        return (0, _random2.default)(min, 200) / 10;
      } //XXX
      return (0, _random2.default)(min, max) / 10;
    }
  }, {
    key: 'make_scale',
    value: function make_scale() {
      return 'scale(' + this.get_scale() + ')';
    }
  }, {
    key: 'make_transform',
    value: function make_transform() {
      return 'transform: ' + this.make_translate() + ' ' + this.make_rotate() + ' ' + this.make_scale();
    }
  }, {
    key: 'make_opacity',
    value: function make_opacity() {
      return 'opacity: ' + (0, _random2.default)(0, 100) / 100;
    }
  }, {
    key: 'make_keyframes',
    value: function make_keyframes(name, steps) {
      var css = void 0,
          css_child = [];

      for (var i = 0; i < steps; i++) {
        var percentage = Math.floor(100 / steps * i) + '%';
        var translate = i == 0 ? 'transform: translate(0, 0)' : this.make_transform(); //XXX
        var _css = percentage + ' { ' + translate + '; ' + this.make_opacity() + ' }';
        css_child.push(_css);
      }

      css = '\n    @keyframes ' + name + '{\n      ' + css_child.join('\n') + '\n    }\n    ';

      return css;
    }
  }]);

  return KeyframesMaker;
}();

exports.default = KeyframesMaker;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

exports.default = random;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmUzYjVhMDQyN2Q0OTgyMDM5MGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ub2lzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3NzTWFrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Jld3JpdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9rZXlmcmFtZXNNYWtlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmFuZG9tLmpzIl0sIm5hbWVzIjpbIm5vaXNlIiwiY2FsbCIsIk5vaXNlIiwicmV3cml0ZXIiLCJjaGFyX2NsYXNzX25hbWVzIiwiY3NzX21ha2VyIiwiY2xhc3NfbmFtZXMiLCJDc3NNYWtlciIsImNzcyIsImluaXRfY3NzX3RhZyIsImFwcGVuZENoaWxkIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImdlbmVyYXRlX2Nzc19jb250ZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjc3NlcyIsIkFycmF5IiwicHVzaCIsIm1ha2VfY29tbW9uX2NoYXJfY3NzIiwiZm9yRWFjaCIsImtleWZyYW1lc19uYW1lIiwiY2xhc3NfbmFtZSIsImtleWZyYW1lcyIsIm1ha2Vfa2V5ZnJhbWVzIiwiam9pbiIsImNyZWF0ZUVsZW1lbnQiLCJtZWRpYSIsInR5cGUiLCJSZXdyaXRlciIsInRhcmdldCIsInRleHQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwibmV3X3RleHQiLCJtYWtlX25ld190ZXh0IiwiY2xlYXIiLCJzIiwidG9fYXJyYXkiLCJpIiwiY2hhciIsIm5vZGUiLCJtYWtlX3NwYW5fdGFnIiwic2V0QXR0cmlidXRlIiwiYXJyYXkiLCJsZW5ndGgiLCJLZXlmcmFtZXNNYWtlciIsIm1pbiIsIm1heCIsIm1hcCIsIngiLCJnZXRfcG9zIiwiZ2V0X3JvdGF0ZSIsImdldF9zY2FsZSIsIm1ha2VfdHJhbnNsYXRlIiwibWFrZV9yb3RhdGUiLCJtYWtlX3NjYWxlIiwibmFtZSIsInN0ZXBzIiwiY3NzX2NoaWxkIiwicGVyY2VudGFnZSIsIk1hdGgiLCJmbG9vciIsInRyYW5zbGF0ZSIsIm1ha2VfdHJhbnNmb3JtIiwibWFrZV9vcGFjaXR5IiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7Ozs7OztBQUNBLElBQUlBLFFBQVEscUJBQVo7QUFDQUEsTUFBTUMsSUFBTixHOzs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7OztBQUNBOzs7Ozs7OztJQUVxQkMsSztBQUNuQixtQkFBYztBQUFBOztBQUNaLFNBQUtDLFFBQUwsR0FBZ0Isd0JBQWhCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0IsS0FBeEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLHdCQUFqQjtBQUNEOzs7OzJCQUVNO0FBQ0wsV0FBS0YsUUFBTCxDQUFjRixJQUFkO0FBQ0EsV0FBS0csZ0JBQUwsR0FBd0IsS0FBS0QsUUFBTCxDQUFjRyxXQUF0QztBQUNBLFdBQUtELFNBQUwsQ0FBZUosSUFBZixDQUFvQixLQUFLRyxnQkFBekI7QUFDRDs7Ozs7O2tCQVhrQkYsSzs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOzs7Ozs7Ozs7Ozs7SUFFcUJLLFE7OztBQUNuQixzQkFBYTtBQUFBOztBQUFBOztB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Qm5CLEdBQWhCLEVBQXFCQyxHQUFyQixFQUEwQjtBQUN4QixTQUFPYSxLQUFLQyxLQUFMLENBQVdELEtBQUtLLE1BQUwsTUFBaUJsQixNQUFNRCxHQUF2QixJQUE4QkEsR0FBekMsQ0FBUDtBQUNEOztrQkFFY21CLE0iLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmUzYjVhMDQyN2Q0OTgyMDM5MGMiLCJpbXBvcnQgTm9pc2UgZnJvbSAnLi9ub2lzZSdcbmxldCBub2lzZSA9IG5ldyBOb2lzZTtcbm5vaXNlLmNhbGwoKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2luZGV4LmpzIiwiaW1wb3J0IENzc01ha2VyIGZyb20gJy4vY3NzTWFrZXInXG5pbXBvcnQgUmV3cml0ZXIgZnJvbSAnLi9yZXdyaXRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9pc2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJld3JpdGVyID0gbmV3IFJld3JpdGVyO1xuICAgIHRoaXMuY2hhcl9jbGFzc19uYW1lcyA9IGZhbHNlO1xuICAgIHRoaXMuY3NzX21ha2VyID0gbmV3IENzc01ha2VyO1xuICB9XG5cbiAgY2FsbCgpIHtcbiAgICB0aGlzLnJld3JpdGVyLmNhbGwoKTtcbiAgICB0aGlzLmNoYXJfY2xhc3NfbmFtZXMgPSB0aGlzLnJld3JpdGVyLmNsYXNzX25hbWVzO1xuICAgIHRoaXMuY3NzX21ha2VyLmNhbGwodGhpcy5jaGFyX2NsYXNzX25hbWVzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL25vaXNlLmpzIiwiaW1wb3J0IEtleWZyYW1lc01ha2VyIGZyb20gJy4va2V5ZnJhbWVzTWFrZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENzc01ha2VyIGV4dGVuZHMgS2V5ZnJhbWVzTWFrZXIge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jaGFyX2NsYXNzX25hbWVzO1xuICB9XG5cbiAgY2FsbChjaGFyX2NsYXNzX25hbWVzKSB7XG4gICAgdGhpcy5jaGFyX2NsYXNzX25hbWVzID0gY2hhcl9jbGFzc19uYW1lcztcbiAgICBsZXQgY3NzID0gdGhpcy5pbml0X2Nzc190YWcoKTtcbiAgICBjc3MuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5nZW5lcmF0ZV9jc3NfY29udGVudCgpKSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChjc3MpO1xuICB9XG5cbiAgZ2VuZXJhdGVfY3NzX2NvbnRlbnQoKSB7XG4gICAgbGV0IGNzc2VzID0gbmV3IEFycmF5O1xuICAgIGNzc2VzLnB1c2godGhpcy5tYWtlX2NvbW1vbl9jaGFyX2NzcygpKTtcbiAgICB0aGlzLmNoYXJfY2xhc3NfbmFtZXMuZm9yRWFjaChjbGFzc19uYW1lID0+IHtcbiAgICAgIGxldCBrZXlmcmFtZXNfbmFtZSA9IGAke2NsYXNzX25hbWV9X2FuaW1lYFxuICAgICAgbGV0IGtleWZyYW1lcyA9IHRoaXMubWFrZV9rZXlmcmFtZXMoa2V5ZnJhbWVzX25hbWUsIDIwKTsgLy9YWFhcbiAgICAgIGNzc2VzLnB1c2goa2V5ZnJhbWVzKVxuICAgICAgY3NzZXMucHVzaChgLm5vaXNlOmhvdmVyIC4ke2NsYXNzX25hbWV9IHsgYW5pbWF0aW9uOiAke2tleWZyYW1lc19uYW1lfSAxcyBpbmZpbml0ZTsgfWApXG4gICAgfSk7XG4gICAgcmV0dXJuIGNzc2VzLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgbWFrZV9jb21tb25fY2hhcl9jc3MoKSB7XG4gICAgcmV0dXJuIGAubm9pc2VfY2hhciB7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgfWA7XG4gIH1cblxuICBpbml0X2Nzc190YWcoKSB7XG4gICAgbGV0IGNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgY3NzLm1lZGlhID0gJ3NjcmVlbic7XG4gICAgY3NzLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIHJldHVybiBjc3M7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jc3NNYWtlci5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJld3JpdGVyIHtcblxuICBjb25zdHJ1Y3Rvcih0YXJnZXQgPSAnbm9pc2UnKSB7XG4gICAgdGhpcy50ZXh0ICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGFyZ2V0KVswXS5pbm5lclRleHQ7XG4gICAgdGhpcy5jbGFzc19uYW1lcyA9IG5ldyBBcnJheTtcbiAgICB0aGlzLm5ld190ZXh0ID0gdGhpcy5tYWtlX25ld190ZXh0KCk7XG4gIH1cblxuICBjYWxsKCkge1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLm5ld190ZXh0LmZvckVhY2gocyA9PlxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbm9pc2UnKVswXS5hcHBlbmRDaGlsZChzKVxuICAgICk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdub2lzZScpWzBdLmlubmVyVGV4dCA9ICcnO1xuICB9XG5cbiAgbWFrZV9uZXdfdGV4dCgpIHtcbiAgICBsZXQgbmV3X3RleHQgPSBbXTtcbiAgICB0aGlzLnRvX2FycmF5KHRoaXMudGV4dCkuZm9yRWFjaCgocywgaSkgPT4ge1xuICAgICAgbGV0IGNoYXIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzKTtcbiAgICAgIGxldCBub2RlID0gdGhpcy5tYWtlX3NwYW5fdGFnKGBjaGFyXyR7aX1gKTtcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hhcik7XG4gICAgICBuZXdfdGV4dC5wdXNoKG5vZGUpO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXdfdGV4dDtcbiAgfVxuXG4gIG1ha2Vfc3Bhbl90YWcoY2xhc3NfbmFtZSkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGlmIChjbGFzc19uYW1lKSB7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgJHtjbGFzc19uYW1lfSBub2lzZV9jaGFyYCk7IC8vWFhYXG4gICAgICB0aGlzLmNsYXNzX25hbWVzLnB1c2goY2xhc3NfbmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdG9fYXJyYXkodGV4dCkgeyAvLyDnqbrnmb3jgpLlkKvjgoHjgaZzcGxpdCgp44GnYXJyYXnjgpLkvZzmiJDlh7rmnaXjgarjgYRcbiAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICBmb3IobGV0IGk9MDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGFyID0gdGV4dFtpXSA9PSAnICcgPyAnXFx1MDBhMCcgOiB0ZXh0W2ldO1xuICAgICAgYXJyYXkucHVzaChjaGFyKVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9yZXdyaXRlci5qcyIsImltcG9ydCByYW5kb20gZnJvbSAnLi9yYW5kb20nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleWZyYW1lc01ha2VyIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXRfcG9zKCkge1xuICAgIGxldCBtaW4gPSAtMztcbiAgICBsZXQgbWF4ID0gMztcbiAgICBpZiAocmFuZG9tKDEsIDEwKSA9PSAxKSB7IHJldHVybiAgW3JhbmRvbShtaW4sIG1heCksIHJhbmRvbSgtMjAwLCAyMDApXS5tYXAoIHggPT4geCArICdweCcpOyB9IC8vWFhYXG4gICAgcmV0dXJuIFtyYW5kb20obWluLCBtYXgpLCByYW5kb20obWluLCBtYXgpXS5tYXAoIHggPT4geCArICdweCcpO1xuICB9XG5cbiAgbWFrZV90cmFuc2xhdGUoKXtcbiAgICByZXR1cm4gYHRyYW5zbGF0ZSgkeyB0aGlzLmdldF9wb3MoKS5qb2luKCcsICcpIH0pYDtcbiAgfVxuXG4gIGdldF9yb3RhdGUoKSB7XG4gICAgbGV0IG1pbiA9IC01O1xuICAgIGxldCBtYXggPSA1O1xuICAgIHJldHVybiByYW5kb20obWluLCBtYXgpICsgJ2RlZyc7XG4gIH1cblxuICBtYWtlX3JvdGF0ZSgpe1xuICAgIHJldHVybiBgcm90YXRlKCR7IHRoaXMuZ2V0X3JvdGF0ZSgpfSlgO1xuICB9XG5cbiAgZ2V0X3NjYWxlKCkge1xuICAgIGxldCBtaW4gPSAwO1xuICAgIGxldCBtYXggPSAxNTtcbiAgICBpZiAocmFuZG9tKDEsIDEwMCkgPT0gMSkgeyByZXR1cm4gcmFuZG9tKG1pbiwgMjAwKSAvIDEwOyB9IC8vWFhYXG4gICAgcmV0dXJuIHJhbmRvbShtaW4sIG1heCkgLyAxMDtcbiAgfVxuXG4gIG1ha2Vfc2NhbGUoKXtcbiAgICByZXR1cm4gYHNjYWxlKCR7IHRoaXMuZ2V0X3NjYWxlKCl9KWA7XG4gIH1cblxuICBtYWtlX3RyYW5zZm9ybSgpe1xuICAgIHJldHVybiBgdHJhbnNmb3JtOiAke3RoaXMubWFrZV90cmFuc2xhdGUoKX0gJHt0aGlzLm1ha2Vfcm90YXRlKCl9ICR7dGhpcy5tYWtlX3NjYWxlKCl9YDtcbiAgfVxuXG4gIG1ha2Vfb3BhY2l0eSgpe1xuICAgIHJldHVybiBgb3BhY2l0eTogJHtyYW5kb20oMCwxMDApIC8gMTAwfWBcbiAgfVxuXG4gIG1ha2Vfa2V5ZnJhbWVzKG5hbWUsIHN0ZXBzKSB7XG4gICAgbGV0IGNzcywgY3NzX2NoaWxkID0gW107XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpPCBzdGVwczsgaSsrKXtcbiAgICAgIGxldCBwZXJjZW50YWdlID0gTWF0aC5mbG9vcigxMDAgLyBzdGVwcyAqIGkpICsgJyUnO1xuICAgICAgbGV0IHRyYW5zbGF0ZSA9IGkgPT0gMCA/ICd0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKScgOiB0aGlzLm1ha2VfdHJhbnNmb3JtKCk7IC8vWFhYXG4gICAgICBsZXQgY3NzID0gYCR7cGVyY2VudGFnZX0geyAkeyB0cmFuc2xhdGUgfTsgJHsgdGhpcy5tYWtlX29wYWNpdHkoKSB9IH1gXG4gICAgICBjc3NfY2hpbGQucHVzaChjc3MpXG4gICAgfVxuXG4gICAgY3NzID0gYFxuICAgIEBrZXlmcmFtZXMgJHtuYW1lfXtcbiAgICAgICR7Y3NzX2NoaWxkLmpvaW4oJ1xcbicpfVxuICAgIH1cbiAgICBgO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2tleWZyYW1lc01ha2VyLmpzIiwiZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9yYW5kb20uanMiXSwic291cmNlUm9vdCI6IiJ9
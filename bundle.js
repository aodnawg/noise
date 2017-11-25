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
        var keyframes = _this2.make_keyframes(keyframes_name, 6); //XXX
        csses.push(keyframes);
        csses.push('.noise:hover .' + class_name + ' { animation: ' + keyframes_name + ' 1s steps(1) infinite; }');
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
    key: 'make_new_text',
    value: function make_new_text() {
      var _this = this;

      var new_text = [];
      this.text.split('').forEach(function (s, i) {
        var char = document.createTextNode(s);
        var node = _this.make_span_tag('char_' + i);
        node.appendChild(char);
        new_text.push(node);
      });
      return new_text;
    }
  }, {
    key: 'clear',
    value: function clear() {
      document.getElementsByClassName('noise')[0].innerText = '';
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
        return [(0, _random2.default)(min, max), (0, _random2.default)(-100, 100)].map(function (x) {
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
      if ((0, _random2.default)(1, 50) == 1) {
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
    key: 'make_keyframes',
    value: function make_keyframes(name, steps) {
      var css = void 0,
          css_child = [];

      for (var i = 0; i < steps; i++) {
        var percentage = Math.floor(100 / steps * i) + '%';
        var translate = i == 0 ? 'transform: translate(0, 0)' : this.make_transform(); //XXX
        var _css = percentage + ' { ' + translate + ' }';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmY3YjYyZTRiNjk3NTBmNDY5ZGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ub2lzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3NzTWFrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Jld3JpdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9rZXlmcmFtZXNNYWtlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmFuZG9tLmpzIl0sIm5hbWVzIjpbIm5vaXNlIiwiY2FsbCIsIk5vaXNlIiwicmV3cml0ZXIiLCJjaGFyX2NsYXNzX25hbWVzIiwiY3NzX21ha2VyIiwiY2xhc3NfbmFtZXMiLCJDc3NNYWtlciIsImNzcyIsImluaXRfY3NzX3RhZyIsImFwcGVuZENoaWxkIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImdlbmVyYXRlX2Nzc19jb250ZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjc3NlcyIsIkFycmF5IiwicHVzaCIsIm1ha2VfY29tbW9uX2NoYXJfY3NzIiwiZm9yRWFjaCIsImtleWZyYW1lc19uYW1lIiwiY2xhc3NfbmFtZSIsImtleWZyYW1lcyIsIm1ha2Vfa2V5ZnJhbWVzIiwiam9pbiIsImNyZWF0ZUVsZW1lbnQiLCJtZWRpYSIsInR5cGUiLCJSZXdyaXRlciIsInRhcmdldCIsInRleHQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwibmV3X3RleHQiLCJtYWtlX25ld190ZXh0IiwiY2xlYXIiLCJzIiwibm9kZSIsInNldEF0dHJpYnV0ZSIsInNwbGl0IiwiaSIsImNoYXIiLCJtYWtlX3NwYW5fdGFnIiwiS2V5ZnJhbWVzTWFrZXIiLCJtaW4iLCJtYXgiLCJtYXAiLCJ4IiwiZ2V0X3BvcyIsImdldF9yb3RhdGUiLCJnZXRfc2NhbGUiLCJtYWtlX3RyYW5zbGF0ZSIsIm1ha2Vfcm90YXRlIiwibWFrZV9zY2FsZSIsIm5hbWUiLCJzdGVwcyIsImNzc19jaGlsZCIsInBlcmNlbnRhZ2UiLCJNYXRoIiwiZmxvb3IiLCJ0cmFuc2xhdGUiLCJtYWtlX3RyYW5zZm9ybSIsInJhbmRvbSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBOzs7Ozs7QUFDQSxJQUFJQSxRQUFRLHFCQUFaO0FBQ0FBLE1BQU1DLElBQU4sRzs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUJDLEs7QUFDbkIsbUJBQWM7QUFBQTs7QUFDWixTQUFLQyxRQUFMLEdBQWdCLHdCQUFoQjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCLEtBQXhCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQix3QkFBakI7QUFDRDs7OzsyQkFFTTtBQUNMLFdBQUtGLFFBQUwsQ0FBY0YsSUFBZDtBQUNBLFdBQUtHLGdCQUFMLEdBQXdCLEtBQUtELFFBQUwsQ0FBY0csV0FBdEM7QUFDQSxXQUFLRCxTQUFMLENBQWVKLElBQWYsQ0FBb0IsS0FBS0csZ0JBQXpCO0FBQ0Q7Ozs7OztrQkFYa0JGLEs7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQjs7Ozs7Ozs7Ozs7O0lBRXFCSyxROzs7QUFDbkIsc0JBQWE7QUFBQTs7QUFBQTs7QUFFWCxVQUFLSCxnQkFBTDtBQUZXO0FBR1o7Ozs7eUJBRUlB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QyxjQUFMLEVBQXJCLFNBQThDLEtBQUtDLFdBQUwsRUFBOUMsU0FBb0UsS0FBS0MsVUFBTCxFQUFwRTtBQUNEOzs7bUNBRWNDLEksRUFBTUMsSyxFQUFPO0FBQzFCLFVBQUkvQyxZQUFKO0FBQUEsVUFBU2dELFlBQVksRUFBckI7O0FBRUEsV0FBSSxJQUFJaEIsSUFBSSxDQUFaLEVBQWVBLElBQUdlLEtBQWxCLEVBQXlCZixHQUF6QixFQUE2QjtBQUMzQixZQUFJaUIsYUFBYUMsS0FBS0MsS0FBTCxDQUFXLE1BQU1KLEtBQU4sR0FBY2YsQ0FBekIsSUFBOEIsR0FBL0M7QUFDQSxZQUFJb0IsWUFBWXBCLEtBQUssQ0FBTCxHQUFTLDRCQUFULEdBQXdDLEtBQUtxQixjQUFMLEVBQXhELENBRjJCLENBRW9EO0FBQy9FLFlBQUlyRCxPQUFTaUQsVUFBVCxXQUEwQkcsU0FBMUIsT0FBSjtBQUNBSixrQkFBVXZDLElBQVYsQ0FBZVQsSUFBZjtBQUNEOztBQUVEQSxrQ0FDYThDLElBRGIsaUJBRUlFLFVBQVVoQyxJQUFWLENBQWUsSUFBZixDQUZKOztBQU1BLGFBQU9oQixHQUFQO0FBQ0Q7Ozs7OztrQkF4RGtCbUMsYzs7Ozs7Ozs7Ozs7O0FDRnJCLFNBQVNtQixNQUFULENBQWdCbEIsR0FBaEIsRUFBcUJDLEdBQXJCLEVBQTBCO0FBQ3hCLFNBQU9hLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0ksTUFBTCxNQUFpQmpCLE1BQU1ELEdBQXZCLElBQThCQSxHQUF6QyxDQUFQO0FBQ0Q7O2tCQUVja0IsTSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2ZjdiNjJlNGI2OTc1MGY0NjlkZSIsImltcG9ydCBOb2lzZSBmcm9tICcuL25vaXNlJ1xubGV0IG5vaXNlID0gbmV3IE5vaXNlO1xubm9pc2UuY2FsbCgpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvaW5kZXguanMiLCJpbXBvcnQgQ3NzTWFrZXIgZnJvbSAnLi9jc3NNYWtlcidcbmltcG9ydCBSZXdyaXRlciBmcm9tICcuL3Jld3JpdGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2lzZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucmV3cml0ZXIgPSBuZXcgUmV3cml0ZXI7XG4gICAgdGhpcy5jaGFyX2NsYXNzX25hbWVzID0gZmFsc2U7XG4gICAgdGhpcy5jc3NfbWFrZXIgPSBuZXcgQ3NzTWFrZXI7XG4gIH1cblxuICBjYWxsKCkge1xuICAgIHRoaXMucmV3cml0ZXIuY2FsbCgpO1xuICAgIHRoaXMuY2hhcl9jbGFzc19uYW1lcyA9IHRoaXMucmV3cml0ZXIuY2xhc3NfbmFtZXM7XG4gICAgdGhpcy5jc3NfbWFrZXIuY2FsbCh0aGlzLmNoYXJfY2xhc3NfbmFtZXMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbm9pc2UuanMiLCJpbXBvcnQgS2V5ZnJhbWVzTWFrZXIgZnJvbSAnLi9rZXlmcmFtZXNNYWtlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3NzTWFrZXIgZXh0ZW5kcyBLZXlmcmFtZXNNYWtlciB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNoYXJfY2xhc3NfbmFtZXM7XG4gIH1cblxuICBjYWxsKGNoYXJfY2xhc3NfbmFtZXMpIHtcbiAgICB0aGlzLmNoYXJfY2xhc3NfbmFtZXMgPSBjaGFyX2NsYXNzX25hbWVzO1xuICAgIGxldCBjc3MgPSB0aGlzLmluaXRfY3NzX3RhZygpO1xuICAgIGNzcy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmdlbmVyYXRlX2Nzc19jb250ZW50KCkpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKGNzcyk7XG4gIH1cblxuICBnZW5lcmF0ZV9jc3NfY29udGVudCgpIHtcbiAgICBsZXQgY3NzZXMgPSBuZXcgQXJyYXk7XG4gICAgY3NzZXMucHVzaCh0aGlzLm1ha2VfY29tbW9uX2NoYXJfY3NzKCkpO1xuICAgIHRoaXMuY2hhcl9jbGFzc19uYW1lcy5mb3JFYWNoKGNsYXNzX25hbWUgPT4ge1xuICAgICAgbGV0IGtleWZyYW1lc19uYW1lID0gYCR7Y2xhc3NfbmFtZX1fYW5pbWVgXG4gICAgICBsZXQga2V5ZnJhbWVzID0gdGhpcy5tYWtlX2tleWZyYW1lcyhrZXlmcmFtZXNfbmFtZSwgNik7IC8vWFhYXG4gICAgICBjc3Nlcy5wdXNoKGtleWZyYW1lcylcbiAgICAgIGNzc2VzLnB1c2goYC5ub2lzZTpob3ZlciAuJHtjbGFzc19uYW1lfSB7IGFuaW1hdGlvbjogJHtrZXlmcmFtZXNfbmFtZX0gMXMgc3RlcHMoMSkgaW5maW5pdGU7IH1gKVxuICAgIH0pO1xuICAgIHJldHVybiBjc3Nlcy5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIG1ha2VfY29tbW9uX2NoYXJfY3NzKCkge1xuICAgIHJldHVybiBgLm5vaXNlX2NoYXIgeyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1gO1xuICB9XG5cbiAgaW5pdF9jc3NfdGFnKCkge1xuICAgIGxldCBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGNzcy5tZWRpYSA9ICdzY3JlZW4nO1xuICAgIGNzcy50eXBlID0gJ3RleHQvY3NzJztcbiAgICByZXR1cm4gY3NzO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3NzTWFrZXIuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdyaXRlciB7XG5cbiAgY29uc3RydWN0b3IodGFyZ2V0ID0gJ25vaXNlJykge1xuICAgIHRoaXMudGV4dCAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRhcmdldClbMF0uaW5uZXJUZXh0O1xuICAgIHRoaXMuY2xhc3NfbmFtZXMgPSBuZXcgQXJyYXk7XG4gICAgdGhpcy5uZXdfdGV4dCA9IHRoaXMubWFrZV9uZXdfdGV4dCgpO1xuICB9XG5cbiAgY2FsbCgpIHtcbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5uZXdfdGV4dC5mb3JFYWNoKHMgPT5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25vaXNlJylbMF0uYXBwZW5kQ2hpbGQocylcbiAgICApO1xuICB9XG5cbiAgbWFrZV9zcGFuX3RhZyhjbGFzc19uYW1lKSB7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaWYgKGNsYXNzX25hbWUpIHtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIGAke2NsYXNzX25hbWV9IG5vaXNlX2NoYXJgKTsgLy9YWFhcbiAgICAgIHRoaXMuY2xhc3NfbmFtZXMucHVzaChjbGFzc19uYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBtYWtlX25ld190ZXh0KCkge1xuICAgIGxldCBuZXdfdGV4dCA9IFtdO1xuICAgIHRoaXMudGV4dC5zcGxpdCgnJykuZm9yRWFjaCgocywgaSkgPT4ge1xuICAgICAgbGV0IGNoYXIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzKTtcbiAgICAgIGxldCBub2RlID0gdGhpcy5tYWtlX3NwYW5fdGFnKGBjaGFyXyR7aX1gKTtcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hhcik7XG4gICAgICBuZXdfdGV4dC5wdXNoKG5vZGUpO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXdfdGV4dDtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25vaXNlJylbMF0uaW5uZXJUZXh0ID0gJyc7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9yZXdyaXRlci5qcyIsImltcG9ydCByYW5kb20gZnJvbSAnLi9yYW5kb20nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleWZyYW1lc01ha2VyIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXRfcG9zKCkge1xuICAgIGxldCBtaW4gPSAtMztcbiAgICBsZXQgbWF4ID0gMztcbiAgICBpZiAocmFuZG9tKDEsIDEwKSA9PSAxKSB7IHJldHVybiAgW3JhbmRvbShtaW4sIG1heCksIHJhbmRvbSgtMTAwLCAxMDApXS5tYXAoIHggPT4geCArICdweCcpOyB9IC8vWFhYXG4gICAgcmV0dXJuIFtyYW5kb20obWluLCBtYXgpLCByYW5kb20obWluLCBtYXgpXS5tYXAoIHggPT4geCArICdweCcpO1xuICB9XG5cbiAgbWFrZV90cmFuc2xhdGUoKXtcbiAgICByZXR1cm4gYHRyYW5zbGF0ZSgkeyB0aGlzLmdldF9wb3MoKS5qb2luKCcsICcpIH0pYDtcbiAgfVxuXG4gIGdldF9yb3RhdGUoKSB7XG4gICAgbGV0IG1pbiA9IC01O1xuICAgIGxldCBtYXggPSA1O1xuICAgIHJldHVybiByYW5kb20obWluLCBtYXgpICsgJ2RlZyc7XG4gIH1cblxuICBtYWtlX3JvdGF0ZSgpe1xuICAgIHJldHVybiBgcm90YXRlKCR7IHRoaXMuZ2V0X3JvdGF0ZSgpfSlgO1xuICB9XG5cbiAgZ2V0X3NjYWxlKCkge1xuICAgIGxldCBtaW4gPSAwO1xuICAgIGxldCBtYXggPSAxNTtcbiAgICBpZiAocmFuZG9tKDEsIDUwKSA9PSAxKSB7IHJldHVybiByYW5kb20obWluLCAyMDApIC8gMTA7IH0gLy9YWFhcbiAgICByZXR1cm4gcmFuZG9tKG1pbiwgbWF4KSAvIDEwO1xuICB9XG5cbiAgbWFrZV9zY2FsZSgpe1xuICAgIHJldHVybiBgc2NhbGUoJHsgdGhpcy5nZXRfc2NhbGUoKX0pYDtcbiAgfVxuXG4gIG1ha2VfdHJhbnNmb3JtKCl7XG4gICAgcmV0dXJuIGB0cmFuc2Zvcm06ICR7dGhpcy5tYWtlX3RyYW5zbGF0ZSgpfSAke3RoaXMubWFrZV9yb3RhdGUoKX0gJHt0aGlzLm1ha2Vfc2NhbGUoKX1gO1xuICB9XG5cbiAgbWFrZV9rZXlmcmFtZXMobmFtZSwgc3RlcHMpIHtcbiAgICBsZXQgY3NzLCBjc3NfY2hpbGQgPSBbXTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGk8IHN0ZXBzOyBpKyspe1xuICAgICAgbGV0IHBlcmNlbnRhZ2UgPSBNYXRoLmZsb29yKDEwMCAvIHN0ZXBzICogaSkgKyAnJSc7XG4gICAgICBsZXQgdHJhbnNsYXRlID0gaSA9PSAwID8gJ3RyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApJyA6IHRoaXMubWFrZV90cmFuc2Zvcm0oKTsgLy9YWFhcbiAgICAgIGxldCBjc3MgPSBgJHtwZXJjZW50YWdlfSB7ICR7IHRyYW5zbGF0ZSB9IH1gXG4gICAgICBjc3NfY2hpbGQucHVzaChjc3MpXG4gICAgfVxuXG4gICAgY3NzID0gYFxuICAgIEBrZXlmcmFtZXMgJHtuYW1lfXtcbiAgICAgICR7Y3NzX2NoaWxkLmpvaW4oJ1xcbicpfVxuICAgIH1cbiAgICBgO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2tleWZyYW1lc01ha2VyLmpzIiwiZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9yYW5kb20uanMiXSwic291cmNlUm9vdCI6IiJ9
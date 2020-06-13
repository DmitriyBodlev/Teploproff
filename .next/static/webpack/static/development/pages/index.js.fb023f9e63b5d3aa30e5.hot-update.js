webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js":
false,

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout/index.js");
/* harmony import */ var _components_StoryList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/StoryList */ "./components/StoryList.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);



function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var _default = /*#__PURE__*/function (_React$Component) {
  _inherits(_default, _React$Component);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
          console.log('service worker registration successful');
        }).catch(function (err) {
          console.warn('service worker registration failed', err.message);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          stories = _this$props.stories,
          page = _this$props.page;
      if (typeof stories === 'undefined' || !stories) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_error__WEBPACK_IMPORTED_MODULE_5___default.a, {
        statusCode: 503
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: 'Hacker News Reader',
        description: 'A sample PWA built with React and Next.JS'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "14264331",
        css: "footer.jsx-14264331{padding:2em 1em;}footer.jsx-14264331 a.jsx-14264331{font-size:1.5em;font-weight:bold;color:#ff6600;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RtaXRyaXkvcHJvamVjdHMvbmV4dGpzLXB3YS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ29CLEFBRzZCLEFBR0EsZ0JBRmxCLEFBR21CLGlCQUNILGNBQ08sa0RBQ3ZCIiwiZmlsZSI6Ii9ob21lL2RtaXRyaXkvcHJvamVjdHMvbmV4dGpzLXB3YS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgU3RvcnlMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvU3RvcnlMaXN0J1xuaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxuICAgICAgICAucmVnaXN0ZXIoJy9zZXJ2aWNlLXdvcmtlci5qcycpXG4gICAgICAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsJylcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkJywgZXJyLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmllcywgcGFnZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYoIHR5cGVvZiBzdG9yaWVzID09PSAndW5kZWZpbmVkJyB8fCAhIHN0b3JpZXMgKSByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezUwM30gLz5cblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IHRpdGxlPXsnSGFja2VyIE5ld3MgUmVhZGVyJ30gIGRlc2NyaXB0aW9uPXsnQSBzYW1wbGUgUFdBIGJ1aWx0IHdpdGggUmVhY3QgYW5kIE5leHQuSlMnfT5cbiAgICAgICAgey8qIDxTdG9yeUxpc3Qgc3Rvcmllcz17c3Rvcmllc30gLz4gKi99XG57LyogXG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC8/cGFnZT0ke3BhZ2UrMX1gfSBwcmVmZXRjaD48YT5OZXh0IFBhZ2UgJmd0OzwvYT48L0xpbms+XG4gICAgICAgIDwvZm9vdGVyPiAqL31cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJlbSAxZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmY2NjAwO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxuXG59Il19 */\n/*@ sourceURL=/home/dmitriy/projects/nextjs-pwa/pages/index.js */"
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.fb023f9e63b5d3aa30e5.hot-update.js.map
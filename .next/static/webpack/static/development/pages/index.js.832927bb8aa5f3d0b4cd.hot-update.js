webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/layout/index.js":
/*!************************************!*\
  !*** ./components/layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui */ "./components/layout/ui.js");



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




 ///////////////////////////////////////////////////////////////////////////////////////////////////

var Layout = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Layout, _React$PureComponent);

  var _super = _createSuper(Layout);

  function Layout() {
    _classCallCheck(this, Layout);

    return _super.apply(this, arguments);
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          description = _this$props.description,
          children = _this$props.children,
          showBack = _this$props.showBack;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2853013092"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        className: "jsx-2853013092"
      }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "description",
        content: description,
        className: "jsx-2853013092"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
        className: "jsx-2853013092"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "manifest",
        href: "/static/manifest.webmanifest",
        className: "jsx-2853013092"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "theme-color",
        content: "#ff6600",
        className: "jsx-2853013092"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "/static/icon.png",
        className: "jsx-2853013092"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "apple-touch-icon",
        href: "/static/icon.png",
        className: "jsx-2853013092"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "apple-mobile-web-app-title",
        content: "Hacker News",
        className: "jsx-2853013092"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "apple-mobile-web-app-status-bar-style",
        content: "default",
        className: "jsx-2853013092"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes",
        className: "jsx-2853013092"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "mobile-web-app-capable",
        content: "yes",
        className: "jsx-2853013092"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
        bg: "#ff6600",
        color: "#fff",
        width: "100%",
        height: "50px"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_5__["LinkInNav"], {
        display: "inline-block",
        color: "#ffffff"
      }, showBack && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-2853013092" + " " + "back"
      }, "<"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-2853013092" + " " + "title"
      }, "\u0422\u0435\u043F\u043B\u043E\u043F\u0440\u043E\u0444\u0444")))), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "984850368",
        css: "nav.jsx-2853013092 a.jsx-2853013092:hover{background-color:rgba(0,0,0,0.1);}nav.jsx-2853013092 .back.jsx-2853013092{display:inline-block;height:1em;width:1em;font-weight:300;padding:1em 0 1em 1em;text-align:center;}nav.jsx-2853013092 .title.jsx-2853013092{display:inline-block;padding:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RtaXRyaXkvcHJvamVjdHMvbmV4dGpzLXB3YS9jb21wb25lbnRzL2xheW91dC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ2tCLEFBRzRDLEFBR1osQUFRQSxxQkFQVixBQVFDLFdBUEYsQ0FKWixBQVlBLFNBUGtCLGdCQUNNLHNCQUNKLGtCQUNwQiIsImZpbGUiOiIvaG9tZS9kbWl0cml5L3Byb2plY3RzL25leHRqcy1wd2EvY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBOYXYsIExpbmtJbk5hdiB9IGZyb20gJy4vdWknO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGNoaWxkcmVuLCBzaG93QmFjayB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc3RhdGljL21hbmlmZXN0LndlYm1hbmlmZXN0XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNmZjY2MDBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9zdGF0aWMvaWNvbi5wbmdcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj1cIi9zdGF0aWMvaWNvbi5wbmdcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGVcIiBjb250ZW50PVwiSGFja2VyIE5ld3NcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtc3RhdHVzLWJhci1zdHlsZVwiIGNvbnRlbnQ9XCJkZWZhdWx0XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPE5hdiBiZz0nI2ZmNjYwMCcgY29sb3I9JyNmZmYnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzUwcHgnID5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8TGlua0luTmF2IGRpc3BsYXk9J2lubGluZS1ibG9jaycgY29sb3I9JyNmZmZmZmYnPlxuICAgICAgICAgICAge3Nob3dCYWNrICYmIDxzcGFuIGNsYXNzTmFtZT1cImJhY2tcIj4mbHQ7PC9zcGFuPn1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+0KLQtdC/0LvQvtC/0YDQvtGE0YQ8L3NwYW4+XG4gICAgICAgICAgPC9MaW5rSW5OYXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvTmF2PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBuYXYgYTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgICB9XG4gICAgICAgIG5hdiAuYmFjayB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBwYWRkaW5nOiAxZW0gMCAxZW0gMWVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBuYXYgLnRpdGxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkgeyBcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIH1cbn1cblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */\n/*@ sourceURL=/home/dmitriy/projects/nextjs-pwa/components/layout/index.js */"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3315911533",
        css: "body{margin:0;background:#f0f0f0;font-family:system-ui;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RtaXRyaXkvcHJvamVjdHMvbmV4dGpzLXB3YS9jb21wb25lbnRzL2xheW91dC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRHlCLEFBR29CLFNBQ1UsbUJBQ0csc0JBQ3hCIiwiZmlsZSI6Ii9ob21lL2RtaXRyaXkvcHJvamVjdHMvbmV4dGpzLXB3YS9jb21wb25lbnRzL2xheW91dC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IE5hdiwgTGlua0luTmF2IH0gZnJvbSAnLi91aSc7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgY2hpbGRyZW4sIHNob3dCYWNrIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9zdGF0aWMvbWFuaWZlc3Qud2VibWFuaWZlc3RcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiI2ZmNjYwMFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL3N0YXRpYy9pY29uLnBuZ1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPVwiL3N0YXRpYy9pY29uLnBuZ1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZVwiIGNvbnRlbnQ9XCJIYWNrZXIgTmV3c1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1zdGF0dXMtYmFyLXN0eWxlXCIgY29udGVudD1cImRlZmF1bHRcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwibW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8TmF2IGJnPScjZmY2NjAwJyBjb2xvcj0nI2ZmZicgd2lkdGg9JzEwMCUnIGhlaWdodD0nNTBweCcgPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxMaW5rSW5OYXYgZGlzcGxheT0naW5saW5lLWJsb2NrJyBjb2xvcj0nI2ZmZmZmZic+XG4gICAgICAgICAgICB7c2hvd0JhY2sgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYmFja1wiPiZsdDs8L3NwYW4+fVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj7QotC10L/Qu9C+0L/RgNC+0YTRhDwvc3Bhbj5cbiAgICAgICAgICA8L0xpbmtJbk5hdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9OYXY+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG5hdiBhOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAgIH1cbiAgICAgICAgbmF2IC5iYWNrIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIHBhZGRpbmc6IDFlbSAwIDFlbSAxZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIG5hdiAudGl0bGUge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7IFxuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgfVxufVxuXG5MYXlvdXQucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufVxuIl19 */\n/*@ sourceURL=/home/dmitriy/projects/nextjs-pwa/components/layout/index.js */"
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);


Layout.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
};

/***/ })

})
//# sourceMappingURL=index.js.832927bb8aa5f3d0b4cd.hot-update.js.map
var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _react=_interopRequireDefault(require("react"));var _ThemeContext=_interopRequireDefault(require("./ThemeContext"));var _mergeTheme=_interopRequireDefault(require("./mergeTheme"));var _jsxFileName="/mnt/c/mike/eps/repos/material-bread/src/Theme/withTheme.js";function withTheme(Component){return function(_React$Component){(0,_inherits2.default)(_class,_React$Component);function _class(){(0,_classCallCheck2.default)(this,_class);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(_class).apply(this,arguments));}(0,_createClass2.default)(_class,[{key:"render",value:function render(){var _this=this;return _react.default.createElement(_ThemeContext.default.Consumer,{__source:{fileName:_jsxFileName,lineNumber:9}},function(theme){return _react.default.createElement(Component,(0,_extends2.default)({theme:(0,_mergeTheme.default)(theme)},_this.props,{__source:{fileName:_jsxFileName,lineNumber:11}}));});}}]);return _class;}(_react.default.Component);}var _default=withTheme;exports.default=_default;
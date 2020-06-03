var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _BaseText=_interopRequireDefault(require("../BaseText/BaseText"));var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _jsxFileName="/mnt/c/mike/eps/repos/material-bread/src/Components/Typography/BodyText/BodyText.js";var BodyText=function(_Component){(0,_inherits2.default)(BodyText,_Component);function BodyText(){(0,_classCallCheck2.default)(this,BodyText);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(BodyText).apply(this,arguments));}(0,_createClass2.default)(BodyText,[{key:"render",value:function render(){var _this$props=this.props,type=_this$props.type,theme=_this$props.theme,style=_this$props.style,children=_this$props.children,text=_this$props.text;var textStyle=type==2?theme.bodyTextTwo:theme.bodyText;return _react.default.createElement(_BaseText.default,(0,_extends2.default)({typographyStyles:textStyle,style:style,theme:theme},this.props,{__source:{fileName:_jsxFileName,lineNumber:20}}),children?children:text);}}]);return BodyText;}(_react.Component);(0,_defineProperty2.default)(BodyText,"propTypes",{type:_propTypes.default.number,children:_propTypes.default.node,theme:_propTypes.default.object,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),text:_propTypes.default.string});var _default=(0,_withTheme.default)(BodyText);exports.default=_default;
var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _ButtonBase=_interopRequireDefault(require("../ButtonBase/ButtonBase"));var _color=_interopRequireDefault(require("color"));var _=require("../../../");var _jsxFileName="C:\\mike\\eps\\repos\\material-bread\\src\\Components\\Button\\OutlinedButton\\OutlinedButton.js";var OutlinedButton=function(_Component){(0,_inherits2.default)(OutlinedButton,_Component);function OutlinedButton(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,OutlinedButton);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(OutlinedButton)).call.apply(_getPrototypeOf2,[this].concat(args)));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{stateBackgroundColor:null});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"getBackgroundColor",function(){var _this$props=_this.props,userColor=_this$props.color,disabled=_this$props.disabled;var stateBackgroundColor=_this.state.stateBackgroundColor;var backgroundColor=userColor?userColor:'transparent';backgroundColor=stateBackgroundColor?stateBackgroundColor:backgroundColor;return disabled?'transparent':backgroundColor;});return _this;}(0,_createClass2.default)(OutlinedButton,[{key:"getButtonStyles",value:function getButtonStyles(){var _this$props2=this.props,theme=_this$props2.theme,textColor=_this$props2.textColor,disabled=_this$props2.disabled,borderSize=_this$props2.borderSize;var borderColor=textColor?textColor:theme.primary.main;var buttonStyles=[theme.outlinedButton,{backgroundColor:this.getBackgroundColor(),borderColor:disabled?'rgba(0, 0, 0, 0.26)':borderColor,borderWidth:borderSize?borderSize:theme.outlinedButton.borderWidth}];return buttonStyles;}},{key:"getRippleColor",value:function getRippleColor(){var _this$props3=this.props,textColor=_this$props3.textColor,theme=_this$props3.theme,rippleColor=_this$props3.rippleColor;var implementedRippleColor=textColor?textColor:theme.primary.main;return rippleColor?rippleColor:implementedRippleColor;}},{key:"getTextColor",value:function getTextColor(){var _this$props4=this.props,textColor=_this$props4.textColor,disabled=_this$props4.disabled,theme=_this$props4.theme;var implementedTextColor=textColor?textColor:theme.primary.main;return disabled?'rgba(0, 0, 0, 0.26)':implementedTextColor;}},{key:"handleHover",value:function handleHover(toggle){var implementedColor=toggle?(0,_color.default)(this.getTextColor()).alpha(0.12).rgb().string():null;this.setState({stateBackgroundColor:implementedColor});}},{key:"render",value:function render(){var _this2=this;var _this$props5=this.props,containerStyle=_this$props5.containerStyle,props=(0,_objectWithoutProperties2.default)(_this$props5,["containerStyle"]);return _react.default.createElement(_.Hoverable,{onHoverIn:function onHoverIn(){return _this2.handleHover(true);},onHoverOut:function onHoverOut(){return _this2.handleHover(false);},style:containerStyle,__source:{fileName:_jsxFileName,lineNumber:84}},function(){return _react.default.createElement(_ButtonBase.default,(0,_extends2.default)({typeRippleColor:_this2.getRippleColor(),typeTextColor:_this2.getTextColor(),typeButtonStyles:_this2.getButtonStyles()},props,{__source:{fileName:_jsxFileName,lineNumber:89}}));});}}]);return OutlinedButton;}(_react.Component);(0,_defineProperty2.default)(OutlinedButton,"propTypes",{disabled:_propTypes.default.bool,color:_propTypes.default.string,textColor:_propTypes.default.string,rippleColor:_propTypes.default.string,theme:_propTypes.default.object,borderSize:_propTypes.default.number,containerStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array])});var _default=(0,_withTheme.default)(OutlinedButton);exports.default=_default;
var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _TextFieldUnderline=_interopRequireDefault(require("./TextFieldUnderline.styles"));var _jsxFileName="C:\\mike\\eps\\repos\\material-bread\\src\\Components\\TextField\\TextFieldUnderline\\TextFieldUnderline.js";var TextFieldUnderline=function(_Component){(0,_inherits2.default)(TextFieldUnderline,_Component);function TextFieldUnderline(props){var _this;(0,_classCallCheck2.default)(this,TextFieldUnderline);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(TextFieldUnderline).call(this,props));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{underLineXAnimation:new _reactNative.Animated.Value(0),animationDuration:2000,animationEasing:_reactNative.Easing.ease});return _this;}(0,_createClass2.default)(TextFieldUnderline,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var _this$props=this.props,focused=_this$props.focused,error=_this$props.error;if(focused!==prevProps.focused&&!error){this._handleUnderlineAnimation();}}},{key:"_handleUnderlineAnimation",value:function _handleUnderlineAnimation(){var focused=this.props.focused;var _this$state=this.state,underLineXAnimation=_this$state.underLineXAnimation,animationEasing=_this$state.animationEasing,animationDuration=_this$state.animationDuration;var value=focused?1:0;_reactNative.Animated.timing(underLineXAnimation,{toValue:value,duration:animationDuration,easing:animationEasing}).start();}},{key:"render",value:function render(){var _this$props2=this.props,error=_this$props2.error,underlineColor=_this$props2.underlineColor,underlineActiveColor=_this$props2.underlineActiveColor,focused=_this$props2.focused;var underLineXAnimation=this.state.underLineXAnimation;var baseUnderlineScale=0.5;if(!underlineColor)underlineColor='rgba(0, 0, 0, 0.42)';if(!underlineActiveColor)underlineActiveColor='rgba(33, 150, 243, 1)';if(error){underlineColor='red';baseUnderlineScale=1;}return _react.default.createElement(_reactNative.Animated.View,{useNativeDriver:false,style:[_TextFieldUnderline.default.underline,{backgroundColor:underlineColor,transform:[{scaleY:baseUnderlineScale}]}],__source:{fileName:_jsxFileName,lineNumber:65}},_react.default.createElement(_reactNative.Animated.View,{useNativeDriver:false,style:[_TextFieldUnderline.default.underline,{backgroundColor:underlineActiveColor,opacity:focused&&!error?1:0,transform:[{scaleX:underLineXAnimation},{scaleY:focused?2:0}]}],__source:{fileName:_jsxFileName,lineNumber:74}}));}}]);return TextFieldUnderline;}(_react.Component);(0,_defineProperty2.default)(TextFieldUnderline,"propTypes",{style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),error:_propTypes.default.bool,underlineColor:_propTypes.default.string,underlineActiveColor:_propTypes.default.string,focused:_propTypes.default.bool});var _default=(0,_withTheme.default)(TextFieldUnderline);exports.default=_default;
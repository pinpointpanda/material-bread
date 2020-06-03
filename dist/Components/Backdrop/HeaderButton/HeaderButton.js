var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _=require("../../../");var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _HeaderButton=_interopRequireDefault(require("./HeaderButton.styles"));var _jsxFileName="C:\\mike\\eps\\repos\\material-bread\\src\\Components\\Backdrop\\HeaderButton\\HeaderButton.js";var HeaderButton=function(_Component){(0,_inherits2.default)(HeaderButton,_Component);function HeaderButton(props){var _this;(0,_classCallCheck2.default)(this,HeaderButton);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(HeaderButton).call(this,props));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"spinValue",new _reactNative.Animated.Value(0));return _this;}(0,_createClass2.default)(HeaderButton,[{key:"_handleSpin",value:function _handleSpin(){var _this2=this;var _this$props=this.props,backConcealed=_this$props.backConcealed,toggleLayout=_this$props.toggleLayout;toggleLayout();_reactNative.Animated.timing(this.spinValue,{toValue:0.5,duration:94,easing:_reactNative.Easing.linear}).start(function(){_reactNative.Animated.timing(_this2.spinValue,{toValue:backConcealed?1:0,duration:94,easing:_reactNative.Easing.linear}).start();});}},{key:"render",value:function render(){var _this3=this;var _this$props2=this.props,headerButtonStyle=_this$props2.headerButtonStyle,iconName=_this$props2.iconName;var spin=this.spinValue.interpolate({inputRange:[0,1],outputRange:['180deg','0deg']});var style=[_HeaderButton.default.container,headerButtonStyle,{transform:[{rotate:spin}]}];return _react.default.createElement(_reactNative.Animated.View,{style:style,useNativeDriver:false,__source:{fileName:_jsxFileName,lineNumber:51}},_react.default.createElement(_.Ripple,{rippleContainerBorderRadius:100,onPress:function onPress(){return _this3._handleSpin();},style:_HeaderButton.default.ripple,__source:{fileName:_jsxFileName,lineNumber:52}},_react.default.createElement(_.Icon,{name:iconName,size:24,color:"white",style:_HeaderButton.default.icon,__source:{fileName:_jsxFileName,lineNumber:56}})));}}]);return HeaderButton;}(_react.Component);(0,_defineProperty2.default)(HeaderButton,"propTypes",{headerButtonStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),toggleLayout:_propTypes.default.func,backConcealed:_propTypes.default.bool,iconName:_propTypes.default.string});var _default=(0,_withTheme.default)(HeaderButton);exports.default=_default;
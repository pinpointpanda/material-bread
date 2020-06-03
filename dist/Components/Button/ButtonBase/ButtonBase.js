var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _Ripple=_interopRequireDefault(require("../../Ripple/Ripple"));var _jsxFileName="/mnt/c/mike/eps/repos/material-bread/src/Components/Button/ButtonBase/ButtonBase.js";var ButtonBase=function(_Component){(0,_inherits2.default)(ButtonBase,_Component);function ButtonBase(){(0,_classCallCheck2.default)(this,ButtonBase);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ButtonBase).apply(this,arguments));}(0,_createClass2.default)(ButtonBase,[{key:"_renderText",value:function _renderText(){var _this$props=this.props,text=_this$props.text,textStyle=_this$props.textStyle,typeTextColor=_this$props.typeTextColor,theme=_this$props.theme,hideLabel=_this$props.hideLabel,dense=_this$props.dense,useInputCasing=_this$props.useInputCasing;if(hideLabel)return null;return _react.default.createElement(_reactNative.Text,{numberOfLines:1,style:[theme.buttonText,{color:typeTextColor,fontSize:dense?13:theme.buttonText.fontSize,letterSpacing:dense?0.3:theme.buttonText.letterSpacing},textStyle],__source:{fileName:_jsxFileName,lineNumber:65}},useInputCasing?text:text.toUpperCase());}},{key:"_renderLoader",value:function _renderLoader(){var _this$props2=this.props,loading=_this$props2.loading,typeTextColor=_this$props2.typeTextColor,hideLabel=_this$props2.hideLabel,dense=_this$props2.dense;if(!loading)return null;return _react.default.createElement(_reactNative.ActivityIndicator,{size:"small",color:typeTextColor,style:{width:dense?12:16,flexDirection:'row',alignItems:'center',alignSelf:'center',justifyContent:'center',marginRight:hideLabel?0:8},__source:{fileName:_jsxFileName,lineNumber:85}});}},{key:"_renderIcon",value:function _renderIcon(){var _this$props3=this.props,icon=_this$props3.icon,iconPosition=_this$props3.iconPosition,iconSize=_this$props3.iconSize,typeTextColor=_this$props3.typeTextColor,loading=_this$props3.loading,dense=_this$props3.dense;if(loading){return this._renderLoader();}if(icon){return _react.default.cloneElement(icon,{style:{marginRight:iconPosition=='left'?8:0,marginLeft:iconPosition=='right'?8:0},size:iconSize||(dense?14:18),color:typeTextColor?typeTextColor:'white'});}return null;}},{key:"render",value:function render(){var _this$props4=this.props,disabled=_this$props4.disabled,disableRipple=_this$props4.disableRipple,loading=_this$props4.loading,children=_this$props4.children,onPress=_this$props4.onPress,theme=_this$props4.theme,typeButtonStyles=_this$props4.typeButtonStyles,fullWidth=_this$props4.fullWidth,typeRippleColor=_this$props4.typeRippleColor,dense=_this$props4.dense,style=_this$props4.style,onPressIn=_this$props4.onPressIn,onPressOut=_this$props4.onPressOut,hideLabel=_this$props4.hideLabel,radius=_this$props4.radius,icon=_this$props4.icon,iconPosition=_this$props4.iconPosition,testID=_this$props4.testID,props=(0,_objectWithoutProperties2.default)(_this$props4,["disabled","disableRipple","loading","children","onPress","theme","typeButtonStyles","fullWidth","typeRippleColor","dense","style","onPressIn","onPressOut","hideLabel","radius","icon","iconPosition","testID"]);return _react.default.createElement(_Ripple.default,(0,_extends2.default)({onPress:onPress,disabled:disabled||disableRipple||loading,rippleColor:typeRippleColor,rippleContainerBorderRadius:radius?radius:theme.button.borderRadius,style:[theme.button,{alignItems:'center',justifyContent:'center',flexDirection:hideLabel?'column':'row',width:fullWidth?'100%':'auto',minWidth:dense?'auto':64,height:dense?32:36,minHeight:dense?32:36,paddingLeft:iconPosition==='left'&&icon?12:16,paddingRight:iconPosition==='right'&&icon?12:16,borderRadius:radius?radius:theme.button.borderRadius},typeButtonStyles,style],testID:testID},props,{onPressIn:onPressIn,onPressOut:onPressOut,__source:{fileName:_jsxFileName,lineNumber:148}}),iconPosition==='left'?this._renderIcon():null,children?children:this._renderText(),iconPosition==='right'?this._renderIcon():null);}}]);return ButtonBase;}(_react.Component);(0,_defineProperty2.default)(ButtonBase,"propTypes",{theme:_propTypes.default.object,style:_propTypes.default.oneOfType([_propTypes.default.array,_propTypes.default.object]),children:_propTypes.default.node,type:_propTypes.default.string,onPress:_propTypes.default.func,loading:_propTypes.default.bool,loader:_propTypes.default.node,hideLabel:_propTypes.default.bool,color:_propTypes.default.string,radius:_propTypes.default.number,fullWidth:_propTypes.default.bool,dense:_propTypes.default.bool,icon:_propTypes.default.node,iconPosition:_propTypes.default.string,iconSize:_propTypes.default.number,disabled:_propTypes.default.bool,disableRipple:_propTypes.default.bool,text:_propTypes.default.string,textStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),useInputCasing:_propTypes.default.bool,typeTextColor:_propTypes.default.string,typeButtonStyles:_propTypes.default.oneOfType([_propTypes.default.array,_propTypes.default.object]),typeRippleColor:_propTypes.default.string,onPressIn:_propTypes.default.func,onPressOut:_propTypes.default.func,testID:_propTypes.default.string});(0,_defineProperty2.default)(ButtonBase,"defaultProps",{iconPosition:'left',dense:false,useInputCasing:false});var _default=(0,_withTheme.default)(ButtonBase);exports.default=_default;
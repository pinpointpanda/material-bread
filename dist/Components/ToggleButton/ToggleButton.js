var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _withTheme=_interopRequireDefault(require("../../Theme/withTheme"));var _Ripple=_interopRequireDefault(require("../Ripple/Ripple.js"));var _ToggleButtonGroup=require("./ToggleButtonGroup/ToggleButtonGroup");var _jsxFileName="/mnt/c/mike/eps/repos/material-bread/src/Components/ToggleButton/ToggleButton.js";var ToggleButton=function(_Component){(0,_inherits2.default)(ToggleButton,_Component);function ToggleButton(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,ToggleButton);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(ToggleButton)).call.apply(_getPrototypeOf2,[this].concat(args)));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{isActive:false});return _this;}(0,_createClass2.default)(ToggleButton,[{key:"componentDidMount",value:function componentDidMount(){var active=this.props.active;if(active){this.setState({isActive:true});}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var active=this.props.active;if(active!=prevProps.active){this.setState({isActive:active});}}},{key:"handleToggle",value:function handleToggle(){var onPress=this.props.onPress;var isActive=this.state.isActive;this.setState({isActive:!isActive});if(onPress)onPress();}},{key:"render",value:function render(){var _this2=this;var _this$props=this.props,style=_this$props.style,size=_this$props.size,rippleColor=_this$props.rippleColor,value=_this$props.value,activeNode=_this$props.activeNode,inActiveNode=_this$props.inActiveNode,rippleContainerBorderRadius=_this$props.rippleContainerBorderRadius,testID=_this$props.testID;var isActive=this.state.isActive;return _react.default.createElement(_ToggleButtonGroup.ToggleButtonContext.Consumer,{__source:{fileName:_jsxFileName,lineNumber:65}},function(context){return _react.default.createElement(_Ripple.default,{rippleContainerBorderRadius:rippleContainerBorderRadius||rippleContainerBorderRadius==0?rippleContainerBorderRadius:100,rippleColor:rippleColor?rippleColor:'rgb(0, 0, 0)',onPress:function onPress(){if(context&&context.updateActive){return context.updateActive(value);}else{return _this2.handleToggle();}},testID:testID,style:[style,{height:size*1.2,width:size*1.2,justifyContent:'center',alignItems:'center'}],__source:{fileName:_jsxFileName,lineNumber:67}},isActive||context.active==value?activeNode:inActiveNode);});}}]);return ToggleButton;}(_react.Component);(0,_defineProperty2.default)(ToggleButton,"propTypes",{style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),active:_propTypes.default.bool,onPress:_propTypes.default.func,value:_propTypes.default.string,activeNode:_propTypes.default.node,inActiveNode:_propTypes.default.node,rippleColor:_propTypes.default.string,size:_propTypes.default.number,rippleContainerBorderRadius:_propTypes.default.number,testID:_propTypes.default.string});(0,_defineProperty2.default)(ToggleButton,"defaultProps",{size:30});var _default=(0,_withTheme.default)(ToggleButton);exports.default=_default;
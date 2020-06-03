var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _withTheme=_interopRequireDefault(require("../../Theme/withTheme"));var _TextFieldOutline=_interopRequireDefault(require("./TextFieldOutline/TextFieldOutline.js"));var _TextFieldFilled=_interopRequireDefault(require("./TextFieldFilled/TextFieldFilled.js"));var _TextFieldFlat=_interopRequireDefault(require("./TextFieldFlat/TextFieldFlat.js"));var _jsxFileName="/mnt/c/mike/eps/repos/material-bread/src/Components/TextField/TextField.js";var TextField=function(_Component){(0,_inherits2.default)(TextField,_Component);function TextField(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,TextField);for(var _len=arguments.length,_args=new Array(_len),_key=0;_key<_len;_key++){_args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(TextField)).call.apply(_getPrototypeOf2,[this].concat(_args)));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{focused:false});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"handleFocus",function(){var _this$props=_this.props,disabled=_this$props.disabled,onFocus=_this$props.onFocus;if(disabled)return;_this.setState({focused:true});if(onFocus)onFocus.apply(void 0,arguments);});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"handleBlur",function(){var _this$props2=_this.props,disabled=_this$props2.disabled,onBlur=_this$props2.onBlur;if(disabled)return;_this.setState({focused:false});if(onBlur)onBlur.apply(void 0,arguments);});return _this;}(0,_createClass2.default)(TextField,[{key:"render",value:function render(){var _this$props3=this.props,type=_this$props3.type,rest=(0,_objectWithoutProperties2.default)(_this$props3,["type"]);var focused=this.state.focused;if(type=='outlined'){return _react.default.createElement(_TextFieldOutline.default,(0,_extends2.default)({handleFocus:this.handleFocus,handleBlur:this.handleBlur,focused:focused},rest,{__source:{fileName:_jsxFileName,lineNumber:46}}));}else if(type=='filled'){return _react.default.createElement(_TextFieldFilled.default,(0,_extends2.default)({handleFocus:this.handleFocus,handleBlur:this.handleBlur,focused:focused},rest,{__source:{fileName:_jsxFileName,lineNumber:55}}));}else{return _react.default.createElement(_TextFieldFlat.default,(0,_extends2.default)({handleFocus:this.handleFocus,handleBlur:this.handleBlur,focused:focused},rest,{__source:{fileName:_jsxFileName,lineNumber:64}}));}}}]);return TextField;}(_react.Component);(0,_defineProperty2.default)(TextField,"propTypes",{type:_propTypes.default.string,onFocus:_propTypes.default.func,onBlur:_propTypes.default.func,disabled:_propTypes.default.bool});var _default=(0,_withTheme.default)(TextField);exports.default=_default;
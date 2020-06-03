var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.ToggleButtonContext=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _jsxFileName="/mnt/c/mike/eps/repos/material-bread/src/Components/ToggleButton/ToggleButtonGroup/ToggleButtonGroup.js";var ToggleButtonContext=_react.default.createContext({updateActive:'',active:''});exports.ToggleButtonContext=ToggleButtonContext;var ToggleButtonGroup=function(_Component){(0,_inherits2.default)(ToggleButtonGroup,_Component);function ToggleButtonGroup(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,ToggleButtonGroup);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(ToggleButtonGroup)).call.apply(_getPrototypeOf2,[this].concat(args)));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{active:''});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"updateActive",function(value){_this.setState({active:value});if(_this.props.onPress)_this.props.onPress(value);});return _this;}(0,_createClass2.default)(ToggleButtonGroup,[{key:"render",value:function render(){var children=this.props.children;return _react.default.createElement(ToggleButtonContext.Provider,{value:{updateActive:this.updateActive,active:this.state.active},__source:{fileName:_jsxFileName,lineNumber:27}},children);}}]);return ToggleButtonGroup;}(_react.Component);(0,_defineProperty2.default)(ToggleButtonGroup,"propTypes",{onPress:_propTypes.default.func,children:_propTypes.default.node});var _default=(0,_withTheme.default)(ToggleButtonGroup);exports.default=_default;
var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.BottomNavContext=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../Theme/withTheme"));var _BottomNavigationItem=_interopRequireDefault(require("./BottomNavigationItem/BottomNavigationItem.js"));var _BottomNavigation=_interopRequireDefault(require("./BottomNavigation.styles"));var _jsxFileName="/mnt/c/mike/eps/repos/material-bread/src/Components/BottomNavigation/BottomNavigation.js";var BottomNavContext=_react.default.createContext();exports.BottomNavContext=BottomNavContext;var BottomNavigation=function(_Component){(0,_inherits2.default)(BottomNavigation,_Component);function BottomNavigation(props){var _this;(0,_classCallCheck2.default)(this,BottomNavigation);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(BottomNavigation).call(this,props));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"componentDidMount",function(){_reactNative.Dimensions.addEventListener('change',_this.handleOrientationChange);});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"getItemMaxWidth",function(isLandscape,_ref){var height=_ref.height,width=_ref.width;var actionItems=_this.props.actionItems;return(isLandscape?height:width)/actionItems.length;});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"isOrientationLandscape",function(_ref2){var width=_ref2.width,height=_ref2.height;return width>height;});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"handleOrientationChange",function(_ref3){var window=_ref3.window;var isLandscape=_this.isOrientationLandscape(window);var itemMaxWidth=_this.getItemMaxWidth(isLandscape,window);_this.setState({isLandscape:isLandscape,itemMaxWidth:itemMaxWidth});});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"handleInternalChange",function(value,backgroundColor){var handleChange=_this.props.handleChange;if(handleChange)handleChange(value);_this.setState({backgroundColor:backgroundColor});});var dimensions=_reactNative.Dimensions.get('window');var _isLandscape=_this.isOrientationLandscape(dimensions);var _itemMaxWidth=_this.getItemMaxWidth(_isLandscape,dimensions);_this.state={backgroundColor:'#2196f3',isLandscape:_isLandscape,itemMaxWidth:_itemMaxWidth};return _this;}(0,_createClass2.default)(BottomNavigation,[{key:"componentWillUnmount",value:function componentWillUnmount(){_reactNative.Dimensions.removeEventListener('change',this.handleOrientationChange);}},{key:"_renderActionItems",value:function _renderActionItems(){var _this2=this;var _this$props=this.props,backgroundColor=_this$props.backgroundColor,actionItems=_this$props.actionItems,showLabels=_this$props.showLabels,horizontalWhenLandscape=_this$props.horizontalWhenLandscape;var _this$state=this.state,isLandscape=_this$state.isLandscape,itemMaxWidth=_this$state.itemMaxWidth;var backgroundColorActual=backgroundColor?backgroundColor:'#2196f3';return _react.default.createElement(BottomNavContext.Provider,{value:{backgroundColor:backgroundColorActual},__source:{fileName:_jsxFileName,lineNumber:80}},actionItems.map(function(item,index){if(!item.props){return _react.default.createElement(_BottomNavigationItem.default,{key:item.label,icon:item.icon,label:item.label,showLabel:showLabels||item.showLabel,onPress:item.onPress,handleChange:_this2.handleInternalChange,value:index||index===0?index:item.value,showLabels:_this2.props.showLabels,active:index===_this2.props.value,isLandscape:isLandscape,maxWidth:itemMaxWidth,horizontal:horizontalWhenLandscape,__source:{fileName:_jsxFileName,lineNumber:85}});}else{return _react.default.cloneElement(item,{key:item.label,handleChange:item.props.handleChange?item.props.handleChange:_this2.handleInternalChange,value:item.props.value?item.props.value:index,showLabels:_this2.props.showLabels,active:item.props.active?item.props.active:index===_this2.props.value,isLandscape:isLandscape,maxWidth:itemMaxWidth,horizontal:horizontalWhenLandscape});}}));}},{key:"render",value:function render(){var _this$props2=this.props,children=_this$props2.children,backgroundColor=_this$props2.backgroundColor,style=_this$props2.style,testID=_this$props2.testID;var backgroundColorActual=backgroundColor?backgroundColor:'#2196f3';return _react.default.createElement(_reactNative.View,{style:[_BottomNavigation.default.bottomNavigation,{backgroundColor:backgroundColorActual},style],testID:testID,__source:{fileName:_jsxFileName,lineNumber:127}},children?children:this._renderActionItems());}}]);return BottomNavigation;}(_react.Component);(0,_defineProperty2.default)(BottomNavigation,"propTypes",{backgroundColor:_propTypes.default.string,children:_propTypes.default.node,style:_propTypes.default.oneOfType([_propTypes.default.array,_propTypes.default.object]),actionItems:_propTypes.default.array,showLabels:_propTypes.default.bool,handleChange:_propTypes.default.func,value:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.number]),horizontalWhenLandscape:_propTypes.default.bool,testID:_propTypes.default.string});(0,_defineProperty2.default)(BottomNavigation,"defaultProps",{showLabels:true});var _default=(0,_withTheme.default)(BottomNavigation);exports.default=_default;
var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _SwipeNav=_interopRequireDefault(require("./SwipeNav.styles"));var _statusBarHeight=_interopRequireDefault(require("../../helpers/statusBarHeight"));var _jsxFileName="/mnt/c/mike/eps/repos/material-bread/src/Components/SwipeNav/SwipeNav.js";var SwipeNav=function(_Component){(0,_inherits2.default)(SwipeNav,_Component);function SwipeNav(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,SwipeNav);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(SwipeNav)).call.apply(_getPrototypeOf2,[this].concat(args)));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{headerHeight:56,footerHeight:100,offsetY:0,headerOffsetY:new _reactNative.Animated.Value(0),scrollPaddingTop:new _reactNative.Animated.Value(56),footerOffsetY:new _reactNative.Animated.Value(0),scrollPaddingBottom:new _reactNative.Animated.Value(100)});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"onHeaderLayout",function(e){_this.setState({headerHeight:e.nativeEvent.layout.height});});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"onFooterLayout",function(e){_this.setState({footeerHeight:e.nativeEvent.layout.height});});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"onScroll",function(e){var _this$props=_this.props,header=_this$props.header,footer=_this$props.footer;var offsetY=e.nativeEvent.contentOffset.y;var lastOffsetY=_this.state.offsetY;_this.setState({offsetY:offsetY});if(header&&offsetY-lastOffsetY>20||offsetY-lastOffsetY<-20){if(offsetY>lastOffsetY){_this.animateHeader(true);}else{_this.animateHeader(false);}}if(footer&&offsetY-lastOffsetY<-20||offsetY-lastOffsetY>20){if(offsetY<lastOffsetY){_this.animateFooter(true);}else{_this.animateFooter(false);}}});return _this;}(0,_createClass2.default)(SwipeNav,[{key:"animateHeader",value:function animateHeader(hide){var _this$state=this.state,headerOffsetY=_this$state.headerOffsetY,headerHeight=_this$state.headerHeight,scrollPaddingTop=_this$state.scrollPaddingTop;var newHeaderOffset=hide?-headerHeight-(0,_statusBarHeight.default)():0;var newScrollPadding=hide?0:headerHeight;_reactNative.Animated.parallel([_reactNative.Animated.timing(headerOffsetY,{toValue:newHeaderOffset,duration:100}),_reactNative.Animated.timing(scrollPaddingTop,{toValue:newScrollPadding,duration:100})]).start();}},{key:"animateFooter",value:function animateFooter(hide){var _this$state2=this.state,footerOffsetY=_this$state2.footerOffsetY,footerHeight=_this$state2.footerHeight,scrollPaddingBottom=_this$state2.scrollPaddingBottom;var newFooterOffset=hide?footerHeight:0;var newScrollPadding=hide?0:footerHeight;_reactNative.Animated.parallel([_reactNative.Animated.timing(footerOffsetY,{toValue:newFooterOffset,duration:100}),_reactNative.Animated.timing(scrollPaddingBottom,{toValue:newScrollPadding,duration:100})]).start();}},{key:"renderScrollView",value:function renderScrollView(){var _this$props2=this.props,header=_this$props2.header,footer=_this$props2.footer,scrollViewStyle=_this$props2.scrollViewStyle,scrollViewProps=_this$props2.scrollViewProps,children=_this$props2.children;return _react.default.createElement(_reactNative.Animated.ScrollView,(0,_extends2.default)({useNativeDriver:false,scrollEventThrottle:16},scrollViewProps,{onScroll:this.onScroll,style:[_SwipeNav.default.scroll,{paddingTop:header?this.state.scrollPaddingTop:0,paddingBottom:footer?this.state.paddingBottom:0},scrollViewStyle],__source:{fileName:_jsxFileName,lineNumber:109}}),children);}},{key:"renderCustomScrollView",value:function renderCustomScrollView(){var _this2=this;var _this$props3=this.props,header=_this$props3.header,footer=_this$props3.footer,scrollComponent=_this$props3.scrollComponent,scrollViewStyle=_this$props3.scrollViewStyle;return _react.default.cloneElement(scrollComponent,{scrollEventThrottle:16,style:[_SwipeNav.default.scroll,{paddingTop:header?this.state.scrollPaddingTop:0,paddingBottom:footer?this.state.paddingBottom:0},scrollViewStyle],onScroll:function onScroll(e){_this2.onScroll(e);scrollComponent.props.onScroll&&scrollComponent.props.onScroll(e);}});}},{key:"_renderHeader",value:function _renderHeader(){var _this$props4=this.props,header=_this$props4.header,headerContainerStyle=_this$props4.headerContainerStyle;return _react.default.createElement(_reactNative.Animated.View,{useNativeDriver:false,style:[_SwipeNav.default.headerContainer,headerContainerStyle,{transform:[{translateY:this.state.headerOffsetY}]}],onLayout:this.onHeaderLayout,__source:{fileName:_jsxFileName,lineNumber:150}},header);}},{key:"_renderFooter",value:function _renderFooter(){var _this$props5=this.props,footer=_this$props5.footer,footerContainerStyle=_this$props5.footerContainerStyle;return _react.default.createElement(_reactNative.Animated.View,{useNativeDriver:false,style:[_SwipeNav.default.footerContainer,footerContainerStyle,{transform:[{translateY:this.state.footerOffsetY}]}],onLayout:this.onFooterLayout,__source:{fileName:_jsxFileName,lineNumber:169}},footer);}},{key:"render",value:function render(){var _this$props6=this.props,header=_this$props6.header,footer=_this$props6.footer,scrollComponent=_this$props6.scrollComponent,style=_this$props6.style;return _react.default.createElement(_reactNative.View,{style:[_SwipeNav.default.container,style],__source:{fileName:_jsxFileName,lineNumber:188}},header?this._renderHeader():null,_react.default.createElement(_reactNative.View,{style:[_SwipeNav.default.scrollContainer],__source:{fileName:_jsxFileName,lineNumber:190}},scrollComponent?this.renderCustomScrollView():this.renderScrollView()),footer?this._renderFooter():null);}}]);return SwipeNav;}(_react.Component);(0,_defineProperty2.default)(SwipeNav,"propTypes",{header:_propTypes.default.node,footer:_propTypes.default.node,scrollViewProps:_propTypes.default.object,scrollComponent:_propTypes.default.node,style:_propTypes.default.object,headerContainerStyle:_propTypes.default.object,footerContainerStyle:_propTypes.default.object,scrollViewStyle:_propTypes.default.object,children:_propTypes.default.node});var _default=SwipeNav;exports.default=_default;
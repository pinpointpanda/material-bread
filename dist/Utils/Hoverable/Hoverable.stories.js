var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _=require("../../");var _Header=_interopRequireDefault(require("../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../storybook/components/Container"));var _storiesOf=require("../../storybook/helpers/storiesOf");var _storybookState=require("@sambego/storybook-state");var _jsxFileName="/mnt/c/mike/eps/repos/material-bread/src/Utils/Hoverable/Hoverable.stories.js";var store=new _storybookState.Store({color:'#00BCD4',left:new _reactNative.Animated.Value(0)});var _default=(0,_storiesOf.storiesOf)('Utils|Hoverable',module).addParameters({jest:['Hoverable']}).add('Simple',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:18}},_react.default.createElement(_Header.default,{title:'Hoverable',subtitle:'Cross Platform Hover Component',__source:{fileName:_jsxFileName,lineNumber:19}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:20}},function(state){return _react.default.createElement(_reactNative.View,{style:{flexDirection:'row'},__source:{fileName:_jsxFileName,lineNumber:22}},_react.default.createElement(_.Hoverable,{onHoverIn:function onHoverIn(){return store.set({color:'#009688'});},onHoverOut:function onHoverOut(){return store.set({color:'#00BCD4'});},__source:{fileName:_jsxFileName,lineNumber:23}},_react.default.createElement(_reactNative.View,{style:{width:200,height:125,backgroundColor:state.color},__source:{fileName:_jsxFileName,lineNumber:26}})));}));}).add('Animation',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:40}},_react.default.createElement(_Header.default,{title:'Hoverable',subtitle:'Cross Platform Hover Component',__source:{fileName:_jsxFileName,lineNumber:41}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:42}},function(state){return _react.default.createElement(_reactNative.View,{style:{flexDirection:'row'},__source:{fileName:_jsxFileName,lineNumber:44}},_react.default.createElement(_.Hoverable,{onHoverIn:function onHoverIn(){_reactNative.Animated.timing(state.left,{toValue:1,duration:500}).start();},onHoverOut:function onHoverOut(){_reactNative.Animated.timing(state.left,{toValue:0,duration:500}).start();},__source:{fileName:_jsxFileName,lineNumber:45}},_react.default.createElement(_reactNative.Animated.View,{useNativeDriver:false,style:{width:200,height:125,backgroundColor:state.color,transform:[{rotate:state.left.interpolate({inputRange:[0,1],outputRange:['0deg','360deg']})}]},__source:{fileName:_jsxFileName,lineNumber:58}})));}));});exports.default=_default;
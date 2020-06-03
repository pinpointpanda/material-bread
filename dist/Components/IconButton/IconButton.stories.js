var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _MaterialCommunityIcons=_interopRequireDefault(require("react-native-vector-icons/MaterialCommunityIcons"));var _=require("../../");var _Header=_interopRequireDefault(require("../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../storybook/components/Container"));var _storiesOf=require("../../storybook/helpers/storiesOf");var _jsxFileName="C:\\mike\\eps\\repos\\material-bread\\src\\Components\\IconButton\\IconButton.stories.js";var _default=(0,_storiesOf.storiesOf)('Components|Icon Button',module).addParameters({jest:['IconButton']}).addDecorator(function(story){return _react.default.createElement(_reactNative.View,{style:{padding:16},__source:{fileName:_jsxFileName,lineNumber:12}},story());}).add('Component',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:15}},_react.default.createElement(_Header.default,{title:'Icon Button',__source:{fileName:_jsxFileName,lineNumber:16}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:18}},_react.default.createElement(_.IconButton,{name:"alarm",size:32,__source:{fileName:_jsxFileName,lineNumber:19}}),_react.default.createElement(_.IconButton,{name:"face",size:32,color:'purple',__source:{fileName:_jsxFileName,lineNumber:20}}),_react.default.createElement(_.IconButton,{name:"arrow-back",size:32,color:'orange',__source:{fileName:_jsxFileName,lineNumber:21}})),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:23}},_react.default.createElement(_.IconButton,{name:"adb",size:12,color:'#F44336',__source:{fileName:_jsxFileName,lineNumber:24}}),_react.default.createElement(_.IconButton,{name:"album",size:24,color:'#E91E63',__source:{fileName:_jsxFileName,lineNumber:25}}),_react.default.createElement(_.IconButton,{name:"battery-full",size:32,color:'#9C27B0',__source:{fileName:_jsxFileName,lineNumber:26}}),_react.default.createElement(_.Badge,{style:{position:'absolute',top:0,right:0},size:14,badgeContent:4,__source:{fileName:_jsxFileName,lineNumber:27}},_react.default.createElement(_.IconButton,{name:"camera",size:48,color:'#009688',__source:{fileName:_jsxFileName,lineNumber:31}}))),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:34}},_react.default.createElement(_.IconButton,{name:"create",size:24,color:'#00BCD4',__source:{fileName:_jsxFileName,lineNumber:35}}),_react.default.createElement(_.IconButton,{name:"dashboard",size:32,color:'#607D8B',__source:{fileName:_jsxFileName,lineNumber:36}}),_react.default.createElement(_.IconButton,{name:"directions-walk",size:48,color:'#8BC34A',__source:{fileName:_jsxFileName,lineNumber:37}}),_react.default.createElement(_.IconButton,{name:"flash-on",size:64,color:'#FFEB3B',__source:{fileName:_jsxFileName,lineNumber:39}})));}).add('Another source',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:44}},_react.default.createElement(_Header.default,{title:'Icons from another source',__source:{fileName:_jsxFileName,lineNumber:45}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:47}},_react.default.createElement(_.IconButton,{name:"visual-studio-code",size:24,color:'#373177',iconComponent:_MaterialCommunityIcons.default,__source:{fileName:_jsxFileName,lineNumber:48}}),_react.default.createElement(_.IconButton,{name:"android-head",size:32,color:'#69B342',iconComponent:_MaterialCommunityIcons.default,__source:{fileName:_jsxFileName,lineNumber:54}}),_react.default.createElement(_.IconButton,{name:"apple-ios",size:48,color:'#000000',iconComponent:_MaterialCommunityIcons.default,__source:{fileName:_jsxFileName,lineNumber:60}}),_react.default.createElement(_.IconButton,{name:"react",size:64,color:'#5FDAFB',iconComponent:_MaterialCommunityIcons.default,__source:{fileName:_jsxFileName,lineNumber:66}})));});exports.default=_default;
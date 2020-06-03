var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _storiesOf=require("../../../storybook/helpers/storiesOf");var _=require("../../..");var _Header=_interopRequireDefault(require("../../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../../storybook/components/Container"));var _jsxFileName="C:\\mike\\eps\\repos\\material-bread\\src\\Components\\Button\\TextButton\\TextButton.stories.js";var _default=(0,_storiesOf.storiesOf)('Components|Buttons/Text Button',module).addParameters({jest:['Button']}).add('Simple',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:12}},_react.default.createElement(_Header.default,{title:'Simple Text Button',__source:{fileName:_jsxFileName,lineNumber:13}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:15}},_react.default.createElement(_.Button,{text:'Text',__source:{fileName:_jsxFileName,lineNumber:23}}),_react.default.createElement(_.Button,{text:'Button',textColor:'#E91E63',__source:{fileName:_jsxFileName,lineNumber:24}}),_react.default.createElement(_.Button,{text:'Buy',textColor:'#FF5722',__source:{fileName:_jsxFileName,lineNumber:25}}),_react.default.createElement(_.Button,{text:'Click Here',textColor:'#673AB7',__source:{fileName:_jsxFileName,lineNumber:26}}),_react.default.createElement(_.Button,{text:'Do not click',textColor:'#009688',__source:{fileName:_jsxFileName,lineNumber:27}})));}).add('with icon',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:32}},_react.default.createElement(_Header.default,{title:'Text Button',__source:{fileName:_jsxFileName,lineNumber:33}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:35}},_react.default.createElement(_.Button,{text:'Home',icon:_react.default.createElement(_.Icon,{name:"home",__source:{fileName:_jsxFileName,lineNumber:43}}),__source:{fileName:_jsxFileName,lineNumber:43}}),_react.default.createElement(_.Button,{text:'Favorite',textColor:'#E91E63',borderSize:2,icon:_react.default.createElement(_.Icon,{name:"favorite",__source:{fileName:_jsxFileName,lineNumber:48}}),__source:{fileName:_jsxFileName,lineNumber:44}}),_react.default.createElement(_.Button,{text:'Settings',icon:_react.default.createElement(_.Icon,{name:"settings",__source:{fileName:_jsxFileName,lineNumber:52}}),textColor:'#FF5722',radius:20,__source:{fileName:_jsxFileName,lineNumber:50}}),_react.default.createElement(_.Button,{text:'Buy',ttextColor:'#673AB7',dense:true,icon:_react.default.createElement(_.Icon,{name:"attach-money",__source:{fileName:_jsxFileName,lineNumber:60}}),__source:{fileName:_jsxFileName,lineNumber:56}}),_react.default.createElement(_.Button,{text:'Archive',textColor:'#009688',icon:_react.default.createElement(_.Icon,{name:"archive",__source:{fileName:_jsxFileName,lineNumber:65}}),__source:{fileName:_jsxFileName,lineNumber:62}})));}).add('radius',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:71}},_react.default.createElement(_Header.default,{title:'Text Button',__source:{fileName:_jsxFileName,lineNumber:72}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:74}},_react.default.createElement(_.Button,{text:'Home',radius:20,__source:{fileName:_jsxFileName,lineNumber:82}}),_react.default.createElement(_.Button,{text:'Favorite',textColor:'#E91E63',borderSize:2,radius:40,icon:_react.default.createElement(_.Icon,{name:"favorite",__source:{fileName:_jsxFileName,lineNumber:88}}),__source:{fileName:_jsxFileName,lineNumber:83}}),_react.default.createElement(_.Button,{text:'Settings',textColor:'#FF5722',radius:60,__source:{fileName:_jsxFileName,lineNumber:90}}),_react.default.createElement(_.Button,{text:'Buy',ttextColor:'#673AB7',dense:true,radius:0,icon:_react.default.createElement(_.Icon,{name:"attach-money",__source:{fileName:_jsxFileName,lineNumber:96}}),__source:{fileName:_jsxFileName,lineNumber:91}}),_react.default.createElement(_.Button,{text:'Archive',textColor:'#009688',radius:0,icon:_react.default.createElement(_.Icon,{name:"archive",__source:{fileName:_jsxFileName,lineNumber:102}}),__source:{fileName:_jsxFileName,lineNumber:98}})));}).add('dense',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:108}},_react.default.createElement(_Header.default,{title:'Text Button',__source:{fileName:_jsxFileName,lineNumber:109}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:111}},_react.default.createElement(_.Button,{text:'Home',dense:true,__source:{fileName:_jsxFileName,lineNumber:119}}),_react.default.createElement(_.Button,{text:'Favorite',textColor:'#E91E63',borderSize:2,dense:true,icon:_react.default.createElement(_.Icon,{name:"favorite",__source:{fileName:_jsxFileName,lineNumber:125}}),__source:{fileName:_jsxFileName,lineNumber:120}}),_react.default.createElement(_.Button,{text:'Settings',textColor:'#FF5722',dense:true,radius:60,__source:{fileName:_jsxFileName,lineNumber:127}}),_react.default.createElement(_.Button,{text:'Buy',ttextColor:'#673AB7',dense:true,radius:0,icon:_react.default.createElement(_.Icon,{name:"attach-money",__source:{fileName:_jsxFileName,lineNumber:133}}),__source:{fileName:_jsxFileName,lineNumber:128}}),_react.default.createElement(_.Button,{text:'Archive',textColor:'#009688',dense:true,icon:_react.default.createElement(_.Icon,{name:"archive",__source:{fileName:_jsxFileName,lineNumber:139}}),__source:{fileName:_jsxFileName,lineNumber:135}})));}).add('loading',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:145}},_react.default.createElement(_Header.default,{title:'Text Button',__source:{fileName:_jsxFileName,lineNumber:146}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:148}},_react.default.createElement(_.Button,{text:'Home',loading:true,__source:{fileName:_jsxFileName,lineNumber:156}}),_react.default.createElement(_.Button,{text:'Favorite',textColor:'#E91E63',borderSize:2,loading:true,icon:_react.default.createElement(_.Icon,{name:"favorite",__source:{fileName:_jsxFileName,lineNumber:162}}),__source:{fileName:_jsxFileName,lineNumber:157}}),_react.default.createElement(_.Button,{text:'Settings',textColor:'#FF5722',loading:true,radius:60,__source:{fileName:_jsxFileName,lineNumber:164}}),_react.default.createElement(_.Button,{text:'Buy',ttextColor:'#673AB7',dense:true,radius:0,loading:true,icon:_react.default.createElement(_.Icon,{name:"attach-money",__source:{fileName:_jsxFileName,lineNumber:171}}),__source:{fileName:_jsxFileName,lineNumber:165}}),_react.default.createElement(_.Button,{text:'Archive',textColor:'#009688',loading:true,icon:_react.default.createElement(_.Icon,{name:"archive",__source:{fileName:_jsxFileName,lineNumber:177}}),__source:{fileName:_jsxFileName,lineNumber:173}})));}).add('disabled',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:183}},_react.default.createElement(_Header.default,{title:'Text Button',__source:{fileName:_jsxFileName,lineNumber:184}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:186}},_react.default.createElement(_.Button,{text:'Home',disabled:true,__source:{fileName:_jsxFileName,lineNumber:194}}),_react.default.createElement(_.Button,{text:'Favorite',textColor:'#E91E63',borderSize:2,loading:true,disabled:true,icon:_react.default.createElement(_.Icon,{name:"favorite",__source:{fileName:_jsxFileName,lineNumber:201}}),__source:{fileName:_jsxFileName,lineNumber:195}}),_react.default.createElement(_.Button,{text:'Settings',textColor:'#FF5722',disabled:true,radius:60,__source:{fileName:_jsxFileName,lineNumber:203}}),_react.default.createElement(_.Button,{text:'Buy',ttextColor:'#673AB7',dense:true,radius:0,disabled:true,icon:_react.default.createElement(_.Icon,{name:"attach-money",__source:{fileName:_jsxFileName,lineNumber:210}}),__source:{fileName:_jsxFileName,lineNumber:204}}),_react.default.createElement(_.Button,{text:'Archive',textColor:'#009688',disabled:true,icon:_react.default.createElement(_.Icon,{name:"archive",__source:{fileName:_jsxFileName,lineNumber:216}}),__source:{fileName:_jsxFileName,lineNumber:212}})));}).add('full width',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:222}},_react.default.createElement(_Header.default,{title:'Text Button',__source:{fileName:_jsxFileName,lineNumber:223}}),_react.default.createElement(_.Button,{fullWidth:true,text:'Text',style:{marginBottom:8},__source:{fileName:_jsxFileName,lineNumber:224}}),_react.default.createElement(_.Button,{fullWidth:true,text:'Radius',textColor:'#009688',style:{marginBottom:8},radius:40,__source:{fileName:_jsxFileName,lineNumber:225}}),_react.default.createElement(_.Button,{fullWidth:true,text:'Icon',icon:_react.default.createElement(_.Icon,{name:"favorite",__source:{fileName:_jsxFileName,lineNumber:235}}),textColor:'#E91E63',style:{marginBottom:8},__source:{fileName:_jsxFileName,lineNumber:232}}),_react.default.createElement(_.Button,{fullWidth:true,text:'Loading',textColor:'#FF5722',loading:true,style:{marginBottom:8},__source:{fileName:_jsxFileName,lineNumber:239}}),_react.default.createElement(_.Button,{fullWidth:true,text:'Disabled',textColor:'#673AB7',disabled:true,style:{marginBottom:8},__source:{fileName:_jsxFileName,lineNumber:246}}));});exports.default=_default;
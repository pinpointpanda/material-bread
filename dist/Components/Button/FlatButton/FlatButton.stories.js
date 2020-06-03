var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _storiesOf=require("../../../storybook/helpers/storiesOf");var _=require("../../..");var _Header=_interopRequireDefault(require("../../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../../storybook/components/Container"));var _jsxFileName="/mnt/c/mike/eps/repos/material-bread/src/Components/Button/FlatButton/FlatButton.stories.js";var _default=(0,_storiesOf.storiesOf)('Components|Buttons/Flat Button',module).addParameters({jest:['Button']}).add('Simple',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:12}},_react.default.createElement(_Header.default,{title:'Simple Flat Button',__source:{fileName:_jsxFileName,lineNumber:13}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:15}},_react.default.createElement(_.Button,{text:'Text',type:"flat",__source:{fileName:_jsxFileName,lineNumber:23}}),_react.default.createElement(_.Button,{text:'Button',color:'#E91E63',type:"flat",__source:{fileName:_jsxFileName,lineNumber:24}}),_react.default.createElement(_.Button,{text:'Buy',color:'#FF5722',type:"flat",__source:{fileName:_jsxFileName,lineNumber:25}}),_react.default.createElement(_.Button,{text:'Click Here',color:'#673AB7',type:"flat",__source:{fileName:_jsxFileName,lineNumber:26}}),_react.default.createElement(_.Button,{text:'Do not click',color:'#009688',type:"flat",__source:{fileName:_jsxFileName,lineNumber:27}})));}).add('with icon',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:32}},_react.default.createElement(_Header.default,{title:'Flat Button',__source:{fileName:_jsxFileName,lineNumber:33}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:35}},_react.default.createElement(_.Button,{text:'Home',icon:_react.default.createElement(_.Icon,{name:"home",__source:{fileName:_jsxFileName,lineNumber:43}}),type:"flat",__source:{fileName:_jsxFileName,lineNumber:43}}),_react.default.createElement(_.Button,{text:'Favorite',color:'#E91E63',borderSize:2,type:"flat",icon:_react.default.createElement(_.Icon,{name:"favorite",__source:{fileName:_jsxFileName,lineNumber:49}}),__source:{fileName:_jsxFileName,lineNumber:44}}),_react.default.createElement(_.Button,{text:'Settings',icon:_react.default.createElement(_.Icon,{name:"settings",__source:{fileName:_jsxFileName,lineNumber:53}}),color:'#FF5722',radius:20,type:"flat",__source:{fileName:_jsxFileName,lineNumber:51}}),_react.default.createElement(_.Button,{text:'Buy',color:'#673AB7',dense:true,icon:_react.default.createElement(_.Icon,{name:"attach-money",__source:{fileName:_jsxFileName,lineNumber:62}}),type:"flat",__source:{fileName:_jsxFileName,lineNumber:58}}),_react.default.createElement(_.Button,{text:'Archive',color:'#009688',icon:_react.default.createElement(_.Icon,{name:"archive",__source:{fileName:_jsxFileName,lineNumber:68}}),type:"flat",__source:{fileName:_jsxFileName,lineNumber:65}})));}).add('radius',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:75}},_react.default.createElement(_Header.default,{title:'Flat Button',__source:{fileName:_jsxFileName,lineNumber:76}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:78}},_react.default.createElement(_.Button,{text:'Home',radius:20,type:"flat",__source:{fileName:_jsxFileName,lineNumber:86}}),_react.default.createElement(_.Button,{text:'Favorite',color:'#E91E63',borderSize:2,radius:40,icon:_react.default.createElement(_.Icon,{name:"favorite",__source:{fileName:_jsxFileName,lineNumber:92}}),type:"flat",__source:{fileName:_jsxFileName,lineNumber:87}}),_react.default.createElement(_.Button,{text:'Settings',color:'#FF5722',radius:60,type:"flat",__source:{fileName:_jsxFileName,lineNumber:95}}),_react.default.createElement(_.Button,{text:'Buy',tcolor:'#673AB7',dense:true,radius:0,icon:_react.default.createElement(_.Icon,{name:"attach-money",__source:{fileName:_jsxFileName,lineNumber:101}}),type:"flat",__source:{fileName:_jsxFileName,lineNumber:96}}),_react.default.createElement(_.Button,{text:'Archive',color:'#009688',radius:0,icon:_react.default.createElement(_.Icon,{name:"archive",__source:{fileName:_jsxFileName,lineNumber:108}}),type:"flat",__source:{fileName:_jsxFileName,lineNumber:104}})));}).add('dense',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:115}},_react.default.createElement(_Header.default,{title:'Flat Button',__source:{fileName:_jsxFileName,lineNumber:116}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:118}},_react.default.createElement(_.Button,{text:'Home',dense:true,type:"flat",__source:{fileName:_jsxFileName,lineNumber:126}}),_react.default.createElement(_.Button,{text:'Favorite',color:'#E91E63',borderSize:2,dense:true,type:"flat",icon:_react.default.createElement(_.Icon,{name:"favorite",__source:{fileName:_jsxFileName,lineNumber:133}}),__source:{fileName:_jsxFileName,lineNumber:127}}),_react.default.createElement(_.Button,{text:'Settings',color:'#FF5722',dense:true,radius:60,type:"flat",__source:{fileName:_jsxFileName,lineNumber:135}}),_react.default.createElement(_.Button,{text:'Buy',tcolor:'#673AB7',dense:true,radius:0,type:"flat",icon:_react.default.createElement(_.Icon,{name:"attach-money",__source:{fileName:_jsxFileName,lineNumber:148}}),__source:{fileName:_jsxFileName,lineNumber:142}}),_react.default.createElement(_.Button,{text:'Archive',color:'#009688',dense:true,icon:_react.default.createElement(_.Icon,{name:"archive",__source:{fileName:_jsxFileName,lineNumber:154}}),type:"flat",__source:{fileName:_jsxFileName,lineNumber:150}})));}).add('loading',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:161}},_react.default.createElement(_Header.default,{title:'Flat Button',__source:{fileName:_jsxFileName,lineNumber:162}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:164}},_react.default.createElement(_.Button,{text:'Home',loading:true,type:"flat",__source:{fileName:_jsxFileName,lineNumber:172}}),_react.default.createElement(_.Button,{text:'Favorite',color:'#E91E63',borderSize:2,loading:true,type:"flat",icon:_react.default.createElement(_.Icon,{name:"favorite",__source:{fileName:_jsxFileName,lineNumber:179}}),__source:{fileName:_jsxFileName,lineNumber:173}}),_react.default.createElement(_.Button,{text:'Settings',color:'#FF5722',loading:true,radius:60,type:"flat",__source:{fileName:_jsxFileName,lineNumber:181}}),_react.default.createElement(_.Button,{text:'Buy',tcolor:'#673AB7',dense:true,radius:0,loading:true,type:"flat",icon:_react.default.createElement(_.Icon,{name:"attach-money",__source:{fileName:_jsxFileName,lineNumber:195}}),__source:{fileName:_jsxFileName,lineNumber:188}}),_react.default.createElement(_.Button,{text:'Archive',color:'#009688',loading:true,type:"flat",icon:_react.default.createElement(_.Icon,{name:"archive",__source:{fileName:_jsxFileName,lineNumber:202}}),__source:{fileName:_jsxFileName,lineNumber:197}})));}).add('disabled',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:208}},_react.default.createElement(_Header.default,{title:'Flat Button',__source:{fileName:_jsxFileName,lineNumber:209}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:211}},_react.default.createElement(_.Button,{text:'Home',disabled:true,type:"flat",__source:{fileName:_jsxFileName,lineNumber:219}}),_react.default.createElement(_.Button,{text:'Favorite',color:'#E91E63',borderSize:2,loading:true,disabled:true,type:"flat",icon:_react.default.createElement(_.Icon,{name:"favorite",__source:{fileName:_jsxFileName,lineNumber:227}}),__source:{fileName:_jsxFileName,lineNumber:220}}),_react.default.createElement(_.Button,{text:'Settings',color:'#FF5722',type:"flat",disabled:true,radius:60,__source:{fileName:_jsxFileName,lineNumber:229}}),_react.default.createElement(_.Button,{text:'Buy',tcolor:'#673AB7',dense:true,radius:0,disabled:true,type:"flat",icon:_react.default.createElement(_.Icon,{name:"attach-money",__source:{fileName:_jsxFileName,lineNumber:243}}),__source:{fileName:_jsxFileName,lineNumber:236}}),_react.default.createElement(_.Button,{text:'Archive',color:'#009688',disabled:true,type:"flat",icon:_react.default.createElement(_.Icon,{name:"archive",__source:{fileName:_jsxFileName,lineNumber:250}}),__source:{fileName:_jsxFileName,lineNumber:245}})));}).add('full width',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:256}},_react.default.createElement(_Header.default,{title:'Full Width',__source:{fileName:_jsxFileName,lineNumber:257}}),_react.default.createElement(_.Button,{fullWidth:true,text:'Flat',type:"flat",style:{marginBottom:8},__source:{fileName:_jsxFileName,lineNumber:258}}),_react.default.createElement(_.Button,{fullWidth:true,text:'Radius',color:'#009688',type:"flat",style:{marginBottom:8},radius:40,__source:{fileName:_jsxFileName,lineNumber:260}}),_react.default.createElement(_.Button,{fullWidth:true,text:'Icon',color:'#E91E63',type:"flat",style:{marginBottom:8},icon:_react.default.createElement(_.Icon,{name:"favorite",__source:{fileName:_jsxFileName,lineNumber:274}}),__source:{fileName:_jsxFileName,lineNumber:268}}),_react.default.createElement(_.Button,{fullWidth:true,text:'Loading',color:'#FF5722',type:"flat",loading:true,style:{marginBottom:8},__source:{fileName:_jsxFileName,lineNumber:276}}),_react.default.createElement(_.Button,{fullWidth:true,text:'Disabled',color:'#673AB7',type:"flat",style:{marginBottom:8},disabled:true,__source:{fileName:_jsxFileName,lineNumber:284}}));});exports.default=_default;
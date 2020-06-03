var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _storybookState=require("@sambego/storybook-state");var _Header=_interopRequireDefault(require("../../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../../storybook/components/Container"));var _storiesOf=require("../../../storybook/helpers/storiesOf");var _=require("../../../");var _jsxFileName="C:\\mike\\eps\\repos\\material-bread\\src\\Components\\TextField\\TextFieldFlat\\TextFieldFlat.stories.js";var store=new _storybookState.Store({flatOne:'',flatTwo:'',flatThree:''});var _default=(0,_storiesOf.storiesOf)('Components|TextField/Flat',module).addParameters({jest:['TextFieldFlat']}).add('simple',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:19}},_react.default.createElement(_Header.default,{title:'Flat TextField',__source:{fileName:_jsxFileName,lineNumber:20}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:21}},function(state){return _react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:23}},_react.default.createElement(_.TextField,{label:'Label',value:state.flatOne,onChangeText:function onChangeText(value){return store.set({flatOne:value});},__source:{fileName:_jsxFileName,lineNumber:24}}),_react.default.createElement(_.TextField,{containerStyle:{marginTop:20},label:'Multiline',multiline:true,value:state.flatTwo,onChangeText:function onChangeText(value){return store.set({flatTwo:value});},__source:{fileName:_jsxFileName,lineNumber:29}}));}));}).add('multiline',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:42}},_react.default.createElement(_Header.default,{title:'Flat TextField',__source:{fileName:_jsxFileName,lineNumber:43}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:44}},function(state){return _react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:46}},_react.default.createElement(_.TextField,{containerStyle:{marginTop:20},label:'Multiline',multiline:true,value:state.flatTwo,onChangeText:function onChangeText(value){return store.set({flatTwo:value});},__source:{fileName:_jsxFileName,lineNumber:47}}));}));}).add('with leadingIcon',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:60}},_react.default.createElement(_Header.default,{title:'Flat TextField',__source:{fileName:_jsxFileName,lineNumber:61}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:62}},function(state){return _react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:64}},_react.default.createElement(_.TextField,{type:'flat',containerStyle:{marginTop:20},label:'Icon',leadingIcon:_react.default.createElement(_.Icon,{name:'date-range',size:24,color:'#6e6e6e',__source:{fileName:_jsxFileName,lineNumber:70}}),value:state.flatTwo,onChangeText:function onChangeText(value){return store.set({flatTwo:value});},__source:{fileName:_jsxFileName,lineNumber:65}}));}));}).add('with prefix',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:81}},_react.default.createElement(_Header.default,{title:'Flat TextField',__source:{fileName:_jsxFileName,lineNumber:82}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:83}},function(state){return _react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:85}},_react.default.createElement(_.TextField,{type:'flat',containerStyle:{marginTop:20},label:'Pounds',prefix:_react.default.createElement(_.BodyText,{text:"$",__source:{fileName:_jsxFileName,lineNumber:90}}),value:state.flatOne,onChangeText:function onChangeText(value){return store.set({flatOne:value});},__source:{fileName:_jsxFileName,lineNumber:86}}));}));}).add('with suffix',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:100}},_react.default.createElement(_Header.default,{title:'Flat TextField',__source:{fileName:_jsxFileName,lineNumber:101}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:102}},function(state){return _react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:104}},_react.default.createElement(_.TextField,{type:'flat',containerStyle:{marginTop:20},label:'Pounds',suffix:_react.default.createElement(_.Caption,{text:"lbs",__source:{fileName:_jsxFileName,lineNumber:109}}),value:state.flatOne,onChangeText:function onChangeText(value){return store.set({flatOne:value});},__source:{fileName:_jsxFileName,lineNumber:105}}));}));}).add('with trailingIcon',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:120}},_react.default.createElement(_Header.default,{title:'Flat TextField',__source:{fileName:_jsxFileName,lineNumber:121}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:122}},function(state){return _react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:124}},_react.default.createElement(_.TextField,{type:'flat',containerStyle:{marginTop:20},label:'Icon',trailingIcon:_react.default.createElement(_.Icon,{name:'date-range',size:24,color:'#6e6e6e',__source:{fileName:_jsxFileName,lineNumber:130}}),value:state.flatOne,onChangeText:function onChangeText(value){return store.set({flatOne:value});},__source:{fileName:_jsxFileName,lineNumber:125}}));}));}).add('with helperText',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:141}},_react.default.createElement(_Header.default,{title:'Flat TextField',__source:{fileName:_jsxFileName,lineNumber:142}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:143}},function(state){return _react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:145}},_react.default.createElement(_.TextField,{label:'Label',value:state.flatOne,onChangeText:function onChangeText(value){return store.set({flatOne:value});},helperText:'This is some helper text',__source:{fileName:_jsxFileName,lineNumber:146}}),_react.default.createElement(_.TextField,{containerStyle:{marginTop:20},label:'Label',error:true,value:state.flatThree,onChangeText:function onChangeText(value){return store.set({flatThree:value});},helperText:'There is an error',__source:{fileName:_jsxFileName,lineNumber:153}}));}));}).add('dense',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:167}},_react.default.createElement(_Header.default,{title:'Flat TextField',__source:{fileName:_jsxFileName,lineNumber:168}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:169}},function(state){return _react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:171}},_react.default.createElement(_.TextField,{label:'Label',value:state.flatOne,onChangeText:function onChangeText(value){return store.set({flatOne:value});},dense:true,__source:{fileName:_jsxFileName,lineNumber:172}}),_react.default.createElement(_.TextField,{containerStyle:{marginTop:20},placeholder:'Placeholder',value:state.flatThree,onChangeText:function onChangeText(value){return store.set({flatThree:value});},dense:true,__source:{fileName:_jsxFileName,lineNumber:179}}));}));});exports.default=_default;
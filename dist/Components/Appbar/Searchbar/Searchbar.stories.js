var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _=require("../../..");var _storybookState=require("@sambego/storybook-state");var _Header=_interopRequireDefault(require("../../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../../storybook/components/Container"));var _storiesOf=require("../../../storybook/helpers/storiesOf");var _jsxFileName="/mnt/c/mike/eps/repos/material-bread/src/Components/Appbar/Searchbar/Searchbar.stories.js";var store=new _storybookState.Store({searchOne:''});var _default=(0,_storiesOf.storiesOf)('Components|Appbar/Searchbar',module).addParameters({jest:['Searchbar']}).add('Simple',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:17}},_react.default.createElement(_Header.default,{title:'Searchbar',__source:{fileName:_jsxFileName,lineNumber:18}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:19}},function(state){return _react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:21}},_react.default.createElement(_.Searchbar,{label:'Label',value:state.searchOne,onChangeText:function onChangeText(value){return store.set({searchOne:value});},onCloseIcon:function onCloseIcon(){return store.set({searchOne:''});},__source:{fileName:_jsxFileName,lineNumber:22}}));}));});exports.default=_default;
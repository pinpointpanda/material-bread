var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _storiesOf=require("../../storybook/helpers/storiesOf");var _=require("../..");var _SwipeNav=_interopRequireDefault(require("./SwipeNav"));var _jsxFileName="C:\\mike\\eps\\repos\\material-bread\\src\\Components\\SwipeNav\\SwipeNav.stories.js";var _default=(0,_storiesOf.storiesOf)('Components|SwipeNav',module).addParameters({jest:['SwipeNav']}).add('Header',function(){return _react.default.createElement(_reactNative.SafeAreaView,{__source:{fileName:_jsxFileName,lineNumber:21}},_react.default.createElement(_reactNative.View,{style:{height:'100%',maxWidth:500},__source:{fileName:_jsxFileName,lineNumber:22}},_react.default.createElement(_SwipeNav.default,{header:_react.default.createElement(_.Appbar,{barType:'normal',color:'#009688',navigation:'menu',title:'News',actionItems:[{name:'more-vert'}],__source:{fileName:_jsxFileName,lineNumber:25}}),scrollViewStyle:{height:_reactNative.Platform.OS=='web'?500:'100%'},__source:{fileName:_jsxFileName,lineNumber:23}},_react.default.createElement(BodyContent,{__source:{fileName:_jsxFileName,lineNumber:34}}))));}).add('Footer BottomNav',function(){return _react.default.createElement(_reactNative.SafeAreaView,{__source:{fileName:_jsxFileName,lineNumber:40}},_react.default.createElement(_reactNative.View,{style:{height:'100%',maxWidth:500},__source:{fileName:_jsxFileName,lineNumber:41}},_react.default.createElement(_SwipeNav.default,{footer:_react.default.createElement(_.BottomNavigation,{style:{maxWidth:672,width:'100%'},value:true,showLabels:true,actionItems:[{label:'Buy'},{label:'Sell'},{label:'Settings'}],__source:{fileName:_jsxFileName,lineNumber:44}}),scrollViewStyle:{height:_reactNative.Platform.OS=='web'?400:'100%',overflow:'hidden'},__source:{fileName:_jsxFileName,lineNumber:42}},_react.default.createElement(BodyContent,{__source:{fileName:_jsxFileName,lineNumber:59}}))));}).add('Footer AppbarBottom',function(){return _react.default.createElement(_reactNative.SafeAreaView,{__source:{fileName:_jsxFileName,lineNumber:65}},_react.default.createElement(_reactNative.View,{style:{height:'100%',maxWidth:500},__source:{fileName:_jsxFileName,lineNumber:66}},_react.default.createElement(_SwipeNav.default,{footer:_react.default.createElement(_.AppbarBottom,{fab:_react.default.createElement(_.Fab,{icon:'change-history',backgroundColor:'#009688',__source:{fileName:_jsxFileName,lineNumber:70}}),fabPosition:'center',navigation:'menu',color:'#E91E63',__source:{fileName:_jsxFileName,lineNumber:69}}),scrollViewStyle:{height:_reactNative.Platform.OS=='web'?400:'100%',overflow:'hidden'},__source:{fileName:_jsxFileName,lineNumber:67}},_react.default.createElement(BodyContent,{__source:{fileName:_jsxFileName,lineNumber:80}}))));});exports.default=_default;var SimpleCard=function SimpleCard(_ref){var hours=_ref.hours,title=_ref.title,description=_ref.description;return _react.default.createElement(_.Card,{style:{maxWidth:500,width:'100%',marginBottom:6,marginTop:6},__source:{fileName:_jsxFileName,lineNumber:88}},_react.default.createElement(_.CardContent,{__source:{fileName:_jsxFileName,lineNumber:90}},_react.default.createElement(_reactNative.Text,{style:{color:'rgba(0,0,0,.6)',fontSize:14,marginBottom:6},__source:{fileName:_jsxFileName,lineNumber:91}},hours),_react.default.createElement(_reactNative.Text,{style:{color:'rgba(0,0,0,1)',fontSize:16,marginBottom:10},__source:{fileName:_jsxFileName,lineNumber:95}},title),_react.default.createElement(_reactNative.Text,{style:{color:'rgba(0,0,0,.8)',fontSize:14},__source:{fileName:_jsxFileName,lineNumber:99}},description)));};var BodyContent=function BodyContent(){return _react.default.createElement(_reactNative.View,{style:{backgroundColor:'salmon',paddingLeft:8,paddingRight:8},__source:{fileName:_jsxFileName,lineNumber:109}},_react.default.createElement(SimpleCard,{hours:'2 hours ago',title:'Woman Opens Two Chrome Tabs',description:'After downloading 128GB of RAM on her custom desktop, Karen was able to open two Chrome tabs at the same time which experts have called "Revolutionary"',__source:{fileName:_jsxFileName,lineNumber:116}}),_react.default.createElement(SimpleCard,{hours:'3 hours ago',title:'Local developer wastes time',description:'A local develop wastes his Sunday writing placeholder text for a demo instead of going outside',__source:{fileName:_jsxFileName,lineNumber:123}}),_react.default.createElement(SimpleCard,{hours:'4 hours ago',title:'Bitcoin dead again',description:'Bitcoin has died yet again after falling .2% in 1 hour says leading economist.',__source:{fileName:_jsxFileName,lineNumber:130}}),_react.default.createElement(SimpleCard,{hours:'6 hours ago',title:'Bitcoin going to the moon',description:'Bitcoin has risen 11.4% in the last 5 minutes which has some experts predicating the start of the next bull run',__source:{fileName:_jsxFileName,lineNumber:137}}),_react.default.createElement(SimpleCard,{hours:'8 hours ago',title:'U.S Tech Startups rebound',description:'Favorable Business Conditions have allowed startups to secure more fundraising deals compared to last year.',__source:{fileName:_jsxFileName,lineNumber:145}}),_react.default.createElement(SimpleCard,{hours:'9 hours ago',title:"Asia's clean energy initiatives",description:'China Plans to invest billions of dollars for the development of over 300 clean energy projects in SouthEast Asia',__source:{fileName:_jsxFileName,lineNumber:152}}),_react.default.createElement(SimpleCard,{hours:'10 hours ago',title:'Copper on the rise',description:'Copper prices soar admid global market optimism and increasing demand',__source:{fileName:_jsxFileName,lineNumber:159}}),_react.default.createElement(SimpleCard,{hours:'11 hours ago',title:'Poverty to Empowerment in Chicago',description:'How one woman is transforming the lives of underpriveledged children.',__source:{fileName:_jsxFileName,lineNumber:166}}));};SimpleCard.propTypes={hours:_propTypes.default.string,title:_propTypes.default.string,description:_propTypes.default.string};
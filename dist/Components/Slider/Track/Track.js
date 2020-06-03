var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _Track=_interopRequireDefault(require("./Track.styles"));var _jsxFileName="C:\\mike\\eps\\repos\\material-bread\\src\\Components\\Slider\\Track\\Track.js";var Track=function(_Component){(0,_inherits2.default)(Track,_Component);function Track(){(0,_classCallCheck2.default)(this,Track);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Track).apply(this,arguments));}(0,_createClass2.default)(Track,[{key:"render",value:function render(){var _this$props=this.props,backgroundTrackColor=_this$props.backgroundTrackColor,sliderLength=_this$props.sliderLength,positionOne=_this$props.positionOne,positionTwo=_this$props.positionTwo,twoMarkers=_this$props.twoMarkers,theme=_this$props.theme,trackColor=_this$props.trackColor,bothDisabled=_this$props.bothDisabled,oneDisabled=_this$props.oneDisabled,trackHeight=_this$props.trackHeight,trackStyle=_this$props.trackStyle;var selectedColor=trackColor?trackColor:theme.primary.main;var unselectedColor=backgroundTrackColor?backgroundTrackColor:'#CECECE';var trackOneLength=positionOne;var trackThreeLength=twoMarkers?sliderLength-positionTwo:0;var trackTwoLength=sliderLength-trackOneLength-trackThreeLength;var commonStyles=[_Track.default.track,trackStyle,{height:trackHeight}];return _react.default.createElement(_react.Fragment,{__source:{fileName:_jsxFileName,lineNumber:50}},_react.default.createElement(_reactNative.View,{style:[].concat(commonStyles,[{width:trackOneLength,backgroundColor:twoMarkers||oneDisabled?unselectedColor:selectedColor}]),__source:{fileName:_jsxFileName,lineNumber:51}}),_react.default.createElement(_reactNative.View,{style:[].concat(commonStyles,[{width:trackTwoLength,backgroundColor:twoMarkers&&!bothDisabled?selectedColor:unselectedColor}]),__source:{fileName:_jsxFileName,lineNumber:61}}),twoMarkers&&_react.default.createElement(_reactNative.View,{style:[].concat(commonStyles,[{width:trackThreeLength,backgroundColor:twoMarkers?unselectedColor:selectedColor}]),__source:{fileName:_jsxFileName,lineNumber:72}}));}}]);return Track;}(_react.Component);(0,_defineProperty2.default)(Track,"propTypes",{backgroundTrackColor:_propTypes.default.string,twoMarkers:_propTypes.default.bool,sliderLength:_propTypes.default.number,positionOne:_propTypes.default.number,positionTwo:_propTypes.default.number,theme:_propTypes.default.object,trackColor:_propTypes.default.string,bothDisabled:_propTypes.default.bool,oneDisabled:_propTypes.default.bool,trackHeight:_propTypes.default.number,trackStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array])});var _default=(0,_withTheme.default)(Track);exports.default=_default;
var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _reactNativeSvg=_interopRequireWildcard(require("react-native-svg"));var _jsxFileName="/mnt/c/mike/eps/repos/material-bread/src/Components/AppbarBottom/AppbarBottom.svg.js";var AppbarBottomSVG=function AppbarBottomSVG(_ref){var paddingHorizontal=_ref.paddingHorizontal,width=_ref.width,backgroundColor=_ref.backgroundColor,fabPosition=_ref.fabPosition;if(!width){width=_reactNative.Dimensions.get('screen').width-paddingHorizontal;}var widthOfPath=92;var rectWidth=width/2-widthOfPath/2;var middlePosition=width/2-widthOfPath/2;var rightPosition=width/2+widthOfPath/2;if(fabPosition=='end'){rectWidth=width-widthOfPath;middlePosition=width-widthOfPath;}return _react.default.createElement(_reactNativeSvg.default,{width:'100%',height:56,style:{position:'absolute'},__source:{fileName:_jsxFileName,lineNumber:29}},_react.default.createElement(_reactNativeSvg.Rect,{height:56,width:rectWidth+1,fill:backgroundColor,x:0,y:0,__source:{fileName:_jsxFileName,lineNumber:30}}),_react.default.createElement(_reactNativeSvg.G,{x:middlePosition,__source:{fileName:_jsxFileName,lineNumber:37}},_react.default.createElement(_reactNativeSvg.Path,{fill:backgroundColor,d:"M0 0v56h92V0h-7.125c-1.662 0-3 1.338-3 3h-.025C80.29 21.644 64.71 35.987 46 36c-18.711-.011-34.294-14.354-35.854-33h-.033c0-1.662-1.338-3-3-3H0z",fillRule:"evenodd",__source:{fileName:_jsxFileName,lineNumber:38}})),fabPosition=='end'?null:_react.default.createElement(_reactNativeSvg.Rect,{height:56,width:rectWidth+1,fill:backgroundColor,x:rightPosition-1,y:0,__source:{fileName:_jsxFileName,lineNumber:45}}));};AppbarBottomSVG.propTypes={paddingHorizontal:_propTypes.default.number,width:_propTypes.default.number,backgroundColor:_propTypes.default.string,fabPosition:_propTypes.default.string};var _default=AppbarBottomSVG;exports.default=_default;
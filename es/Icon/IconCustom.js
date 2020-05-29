var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import classNames from 'classnames';
import { svgBaseProps } from "./utils";
var IconCustom = function (props) {
    var _a;
    // icon-primary
    var className = props.className, Component = props.component, style = props.style, theme = props.theme, children = props.children;
    var classes = classNames('viking-icon', className, (_a = {},
        _a["icon-" + theme] = theme,
        _a));
    var innerSvgProps = __assign({}, svgBaseProps);
    var renderChildNode = function () {
        if (!(Component || children)) {
            console.error('Should have `component` prop or `children`.');
        }
        if (Component) {
            return React.createElement(Component, __assign({}, innerSvgProps));
        }
        if (children) {
            return React.createElement("svg", __assign({}, innerSvgProps), children);
        }
    };
    return React.createElement("i", { style: style, className: classes }, renderChildNode());
};
export default IconCustom;
//# sourceMappingURL=IconCustom.js.map
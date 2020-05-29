"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var classnames_1 = require("classnames");
var utils_1 = require("./utils");
var IconCustom = function (props) {
    var _a;
    // icon-primary
    var className = props.className, Component = props.component, style = props.style, theme = props.theme, children = props.children;
    var classes = classnames_1.default('viking-icon', className, (_a = {},
        _a["icon-" + theme] = theme,
        _a));
    var innerSvgProps = __assign({}, utils_1.svgBaseProps);
    var renderChildNode = function () {
        if (!(Component || children)) {
            console.error('Should have `component` prop or `children`.');
        }
        if (Component) {
            return react_1.default.createElement(Component, __assign({}, innerSvgProps));
        }
        if (children) {
            return react_1.default.createElement("svg", __assign({}, innerSvgProps), children);
        }
    };
    return react_1.default.createElement("i", { style: style, className: classes }, renderChildNode());
};
exports.default = IconCustom;
//# sourceMappingURL=IconCustom.js.map
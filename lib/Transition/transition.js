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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_transition_group_1 = require("react-transition-group");
var Transition = function (props) {
    var animation = props.animation, classNames = props.classNames, wrapper = props.wrapper, children = props.children, restProps = __rest(props, ["animation", "classNames", "wrapper", "children"]);
    return (react_1.default.createElement(react_transition_group_1.CSSTransition, __assign({ classNames: classNames ? classNames : animation }, restProps), wrapper ? react_1.default.createElement("div", null, children) : children));
};
Transition.defaultProps = {
    unmountOnExit: true,
    appear: true,
};
exports.default = Transition;
//# sourceMappingURL=transition.js.map
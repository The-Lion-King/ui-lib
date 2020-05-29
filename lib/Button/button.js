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
var classnames_1 = require("classnames");
var config_provider_1 = require("../config-provider");
exports.Button = function (props) {
    var _a, _b;
    var className = props.className, btnType = props.btnType, size = props.size, disabled = props.disabled, children = props.children, href = props.href, circle = props.circle, icon = props.icon, restProps = __rest(props, ["className", "btnType", "size", "disabled", "children", "href", "circle", "icon"]);
    var getPrefixCls = react_1.useContext(config_provider_1.ConfigProviderContext).getPrefixCls;
    var prefixCls = getPrefixCls('btn');
    var classes = classnames_1.default(prefixCls, className, (_a = {},
        _a[prefixCls + "-" + size] = size,
        _a[prefixCls + "-" + btnType] = btnType,
        _a.disabled = btnType === 'link' && disabled,
        _a));
    var btnClasses = classnames_1.default(classes, (_b = {},
        _b[prefixCls + "-circle"] = circle,
        _b));
    if (btnType === 'link' && href) {
        return react_1.default.createElement("a", __assign({ className: classes, href: href }, restProps), children);
    }
    return react_1.default.createElement("button", __assign({ className: btnClasses, disabled: disabled }, restProps),
        icon,
        children);
};
exports.Button.defaultProps = {
    disabled: false,
    btnType: 'default',
};
exports.default = exports.Button;
//# sourceMappingURL=button.js.map
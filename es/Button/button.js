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
import React, { useContext } from 'react';
import classnames from 'classnames';
import { ConfigProviderContext } from '../config-provider';
export var Button = function (props) {
    var _a, _b;
    var className = props.className, btnType = props.btnType, size = props.size, disabled = props.disabled, children = props.children, href = props.href, circle = props.circle, icon = props.icon, restProps = __rest(props, ["className", "btnType", "size", "disabled", "children", "href", "circle", "icon"]);
    var getPrefixCls = useContext(ConfigProviderContext).getPrefixCls;
    var prefixCls = getPrefixCls('btn');
    var classes = classnames(prefixCls, className, (_a = {},
        _a[prefixCls + "-" + size] = size,
        _a[prefixCls + "-" + btnType] = btnType,
        _a.disabled = btnType === 'link' && disabled,
        _a));
    var btnClasses = classnames(classes, (_b = {},
        _b[prefixCls + "-circle"] = circle,
        _b));
    if (btnType === 'link' && href) {
        return React.createElement("a", __assign({ className: classes, href: href }, restProps), children);
    }
    return React.createElement("button", __assign({ className: btnClasses, disabled: disabled }, restProps),
        icon,
        children);
};
Button.defaultProps = {
    disabled: false,
    btnType: 'default',
};
export default Button;
//# sourceMappingURL=button.js.map
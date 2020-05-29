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
var Col = function (props) {
    var _a;
    var gutter = props.gutter, key = props.key, span = props.span, className = props.className, children = props.children, style = props.style, offset = props.offset, order = props.order, rest = __rest(props, ["gutter", "key", "span", "className", "children", "style", "offset", "order"]);
    var getPrefixCls = useContext(ConfigProviderContext).getPrefixCls;
    var prefixCls = getPrefixCls('col');
    var classes = classnames(prefixCls, className, (_a = {},
        _a[prefixCls + "-span-" + span] = span !== undefined,
        _a[prefixCls + "-offset-" + offset] = offset,
        _a));
    var colStyle = gutter ? {
        paddingLeft: gutter / 2,
        paddingRight: gutter / 2,
    }
        : {};
    return React.createElement("div", __assign({ key: key, className: classes, style: __assign(__assign(__assign({}, colStyle), { order: order }), style) }, rest), children);
};
Col.displayName = "Col";
Col.defaultProps = {
    order: 0
};
export default Col;
//# sourceMappingURL=col.js.map
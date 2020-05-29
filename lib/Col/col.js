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
var Col = function (props) {
    var _a;
    var gutter = props.gutter, key = props.key, span = props.span, className = props.className, children = props.children, style = props.style, offset = props.offset, order = props.order, rest = __rest(props, ["gutter", "key", "span", "className", "children", "style", "offset", "order"]);
    var getPrefixCls = react_1.useContext(config_provider_1.ConfigProviderContext).getPrefixCls;
    var prefixCls = getPrefixCls('col');
    var classes = classnames_1.default(prefixCls, className, (_a = {},
        _a[prefixCls + "-span-" + span] = span !== undefined,
        _a[prefixCls + "-offset-" + offset] = offset,
        _a));
    var colStyle = gutter ? {
        paddingLeft: gutter / 2,
        paddingRight: gutter / 2,
    }
        : {};
    return react_1.default.createElement("div", __assign({ key: key, className: classes, style: __assign(__assign(__assign({}, colStyle), { order: order }), style) }, rest), children);
};
Col.displayName = "Col";
Col.defaultProps = {
    order: 0
};
exports.default = Col;
//# sourceMappingURL=col.js.map
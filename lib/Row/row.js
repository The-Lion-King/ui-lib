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
var Row = function (props) {
    var _a;
    var gutter = props.gutter, children = props.children, style = props.style, className = props.className, align = props.align, justify = props.justify, rest = __rest(props, ["gutter", "children", "style", "className", "align", "justify"]);
    var getPrefixCls = react_1.useContext(config_provider_1.ConfigProviderContext).getPrefixCls;
    var prefixCls = getPrefixCls('row');
    var classes = classnames_1.default(prefixCls, className, (_a = {},
        _a[prefixCls + "-" + align] = align,
        _a[prefixCls + "-" + justify] = justify,
        _a));
    var rowStyle = gutter ? {
        marginLeft: -gutter / 2,
        marginRight: -gutter / 2
    } : {};
    var renderChildren = function () {
        return react_1.default.Children.map(children, function (item, index) {
            var child = item;
            return react_1.default.cloneElement(child, {
                gutter: gutter,
                key: index
            });
        });
    };
    return react_1.default.createElement("div", __assign({ className: classes, style: __assign(__assign({}, style), rowStyle) }, rest), renderChildren());
};
Row.displayName = 'Row';
Row.defaultProps = {
    gutter: 0,
    align: 'top',
};
exports.default = Row;
//# sourceMappingURL=row.js.map
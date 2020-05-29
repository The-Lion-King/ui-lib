"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var localeProvider_1 = require("./localeProvider");
var getPrefixCls = function (suffixCls, customizePrefixCls) {
    if (customizePrefixCls)
        return customizePrefixCls;
    return suffixCls ? "jet-" + suffixCls : 'jet';
};
exports.ConfigProviderContext = react_1.createContext({ getPrefixCls: getPrefixCls });
exports.default = localeProvider_1.default;
//# sourceMappingURL=index.js.map
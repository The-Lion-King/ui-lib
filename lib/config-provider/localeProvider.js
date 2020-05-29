"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var zh_cn_1 = require("./lang/zh-cn");
exports.LocaleContext = react_1.default.createContext(zh_cn_1.default);
var LocaleProvider = function (props) {
    var children = props.children, locale = props.locale;
    return react_1.default.createElement(exports.LocaleContext.Provider, { value: locale }, children);
};
exports.default = LocaleProvider;
//# sourceMappingURL=localeProvider.js.map
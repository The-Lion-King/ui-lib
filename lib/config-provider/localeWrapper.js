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
var localeProvider_1 = require("./localeProvider");
var LocaleWrapper = function (WrappedComponent, name) {
    return function (props) {
        return react_1.default.createElement(localeProvider_1.LocaleContext.Consumer, null, function (locale) {
            var localeVal;
            if (name) {
                localeVal = locale[name];
            }
            else if (WrappedComponent.displayName) {
                localeVal = locale[WrappedComponent.displayName];
            }
            else {
                localeVal = locale;
            }
            return react_1.default.createElement(WrappedComponent, __assign({}, props, { locale: localeVal }));
        });
    };
};
exports.default = LocaleWrapper;
//# sourceMappingURL=localeWrapper.js.map
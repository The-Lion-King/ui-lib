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
import React from 'react';
import { LocaleContext } from './localeProvider';
var LocaleWrapper = function (WrappedComponent, name) {
    return function (props) {
        return React.createElement(LocaleContext.Consumer, null, function (locale) {
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
            return React.createElement(WrappedComponent, __assign({}, props, { locale: localeVal }));
        });
    };
};
export default LocaleWrapper;
//# sourceMappingURL=localeWrapper.js.map
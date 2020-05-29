import React from 'react';
import zh_cn from './lang/zh-cn';
export var LocaleContext = React.createContext(zh_cn);
var LocaleProvider = function (props) {
    var children = props.children, locale = props.locale;
    return React.createElement(LocaleContext.Provider, { value: locale }, children);
};
export default LocaleProvider;
//# sourceMappingURL=localeProvider.js.map
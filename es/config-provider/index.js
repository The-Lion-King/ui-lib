import { createContext } from 'react';
import LocaleProvider from './localeProvider';
var getPrefixCls = function (suffixCls, customizePrefixCls) {
    if (customizePrefixCls)
        return customizePrefixCls;
    return suffixCls ? "jet-" + suffixCls : 'jet';
};
export var ConfigProviderContext = createContext({ getPrefixCls: getPrefixCls });
export default LocaleProvider;
//# sourceMappingURL=index.js.map
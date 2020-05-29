import React from 'react';
import LocaleProvider from './localeProvider';
interface ConfigProviderContextProps {
    getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string;
}
export declare const ConfigProviderContext: React.Context<ConfigProviderContextProps>;
export default LocaleProvider;

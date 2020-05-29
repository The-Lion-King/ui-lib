import React, { createContext } from 'react';

import LocaleProvider from './localeProvider';


interface ConfigProviderContextProps {
    getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string;
}

const getPrefixCls =  (suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;

    return suffixCls ? `jet-${suffixCls}` : 'jet';
    };
export const ConfigProviderContext = createContext<ConfigProviderContextProps>({getPrefixCls})


export default LocaleProvider;

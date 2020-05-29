import React from 'react';

import { LocaleContext } from './localeProvider'

type IReactComponent<P = any> =
    | React.StatelessComponent<P>
    | React.ComponentClass<P>
    | React.ClassicComponentClass<P>
    | React.FunctionComponent<P>;

const LocaleWrapper =<T extends any>(WrappedComponent:IReactComponent, name?:string) =>  {
    return (props:T) => {
        return <LocaleContext.Consumer>
            {locale => {
                let localeVal;
                if(name){
                    localeVal = locale[name]
                } else if(WrappedComponent.displayName){
                    localeVal = locale[WrappedComponent.displayName]
                } else {
                    localeVal = locale
                }
                return <WrappedComponent
                    {...props}
                    locale={localeVal}
                />
            }}
        </LocaleContext.Consumer>
    }
};

export default LocaleWrapper;
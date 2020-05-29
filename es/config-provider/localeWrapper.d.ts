import React from 'react';
declare type IReactComponent<P = any> = React.StatelessComponent<P> | React.ComponentClass<P> | React.ClassicComponentClass<P> | React.FunctionComponent<P>;
declare const LocaleWrapper: <T extends any>(WrappedComponent: IReactComponent<any>, name?: string) => (props: T) => JSX.Element;
export default LocaleWrapper;

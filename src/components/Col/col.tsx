import React, {HTMLAttributes, useContext} from 'react';
import classnames from 'classnames';
import { ConfigProviderContext } from '../config-provider';
export interface ColProps extends HTMLAttributes<HTMLDivElement>{
    gutter?:number;
    key?:number;
    offset?:number;
    span?:number;
    order?:number;
}


const Col:React.FC<ColProps> =(props)=> {
    const {gutter, key, span,className, children, style, offset,order, ...rest} = props;
    const {getPrefixCls} = useContext(ConfigProviderContext)
    const prefixCls = getPrefixCls('col');
    const classes = classnames(prefixCls,className,{
        [`${prefixCls}-span-${span}`]:span!==undefined,
        [`${prefixCls}-offset-${offset}`]:offset
    })

    const colStyle = gutter ? {
            paddingLeft: gutter / 2,
            paddingRight: gutter / 2,
        }
        : {};
    return <div key={key} className={classes} style={{
        ...colStyle,
        order,
        ...style
    }}{...rest}>
        {children}
    </div>
};
Col.displayName="Col";
Col.defaultProps = {
    order:0
}
export default Col;
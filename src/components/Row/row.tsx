import React, {useContext, HTMLAttributes, CSSProperties} from 'react';
import classnames from 'classnames';
import { ConfigProviderContext } from '../config-provider';
import {ColProps} from "../Col/col";

export type alignType =  'top' | 'bottom' | 'center';
export type justifyType = "start" | "end" | "center" | "space-around" | "space-between";
interface RowProps extends HTMLAttributes<HTMLDivElement>{
    gutter?:number;
    align?:alignType;
    justify?:justifyType;
}

const Row:React.FC<RowProps> = (props) => {
    const {gutter,children,style,className,align,justify, ...rest} = props;
    const {getPrefixCls} = useContext(ConfigProviderContext)
    const prefixCls = getPrefixCls('row');
    const classes = classnames(prefixCls, className,{
        [`${prefixCls}-${align}`]:align,
        [`${prefixCls}-${justify}`]:justify,
    });
    const rowStyle = gutter ? {
        marginLeft: -gutter / 2,
        marginRight: -gutter / 2
    } : {};
    const renderChildren = () => {
        return React.Children.map(children,(item,index)=>{
            const child = item as React.FunctionComponentElement<ColProps>
            return React.cloneElement(child,{
                gutter,
                key:index
            })
        })
    }
        return <div className={classes} style={{
            ...style,
            ...rowStyle
        }} {...rest}>
            {renderChildren()}
        </div>
};
Row.displayName = 'Row';
Row.defaultProps = {
    gutter:0,
    align: 'top',
}

export default Row;
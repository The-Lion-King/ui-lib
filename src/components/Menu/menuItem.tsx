import React, {CSSProperties,useContext} from 'react';
import classnames from 'classnames';
import {MenuContext} from './menu'

export interface MenuItemProps {
    className?:string;
    style?:CSSProperties;
    index?:string;
    disabled?:boolean;
}


export const MenuItem:React.FC<MenuItemProps> = (props) => {
    const { index, disabled, className, style, children } = props;
    const menuContext = useContext(MenuContext)
    const classes = classnames('menu-item',className,{
        'is-disabled':disabled,
        'is-active':index === menuContext.index
    });
    const handleSelect = () => {
        if(menuContext.onSelect && !disabled && (typeof index === 'string')) {
            menuContext.onSelect(index)
        }
    }
    return (
        <li className={classes} style={style} onClick={handleSelect}>
            {children}
        </li>
    )
}

MenuItem.displayName='MenuItem';
export default MenuItem;
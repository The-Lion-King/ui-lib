import React, {CSSProperties, FunctionComponentElement, useContext, useState} from 'react';
import classnames from 'classnames';
import {MenuContext} from './menu'
import {MenuItemProps} from "./menuItem";
import Icon from '../Icon';
import Transition from '../Transition';

export interface SubMenuProps {
    index?:string;
    className?:string;
    title: string;
    style?:CSSProperties;
    popupClassName?:string;
    onTitleClick?:(index:string,e: React.MouseEvent) => void;
}

const SubMenu:React.FC<SubMenuProps> = (props) => {
    const { index, className, style, children, title, onTitleClick } = props;
    const context = useContext(MenuContext);
    const openedSubMenus = context.defaultOpenSubMenus as Array<string>
    const isOpend = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false
    const [open,setOpen] = useState(isOpend);
    const classes = classnames('menu-item submenu-item',className,{
        'is-active':context.index === index,
        'is-opened':open,
        'is-vertical': context.mode === 'vertical'
    });


    const renderChild = ()=>{
        const subMenuClasses = classnames('viking-submenu',{
            'menu-opened': open
        })
        const items =  React.Children.map(children,(item,i)=>{
            const child = item as FunctionComponentElement<MenuItemProps & SubMenuProps>;
            const {displayName} = child.type;
            if(displayName === 'MenuItem'){
                return React.cloneElement(child, {
                    index: child.props.index?child.props.index:`${index}-${i}`,
                })
            } else {
                console.error("Warning: SubMenu has a child which is not a MenuItem component")
            }
        })
        return <Transition
            timeout={300}
            in={open}
            animation="zoom-in-top">
            <ul className={subMenuClasses}>
                {items}
            </ul>
        </Transition>
    };

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setOpen(!open)
        if(onTitleClick && index) {
            onTitleClick(index,e)
        }
    };

    let timer:any;

    const handleHover = (e: React.MouseEvent, isOpen:boolean) => {
        e.preventDefault();
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            setOpen(isOpen)
        },300)
    };

    const clickEvents = context.mode === 'vertical' ? {
        onClick:handleClick
    }:{};
    const hoverClick = context.mode !== 'vertical' ? {
        onMouseEnter:(e:React.MouseEvent)=>{handleHover(e,true)},
        onMouseLeave:(e:React.MouseEvent)=>{handleHover(e,false)}
    }:{}

    return (
        <li key={index} className={classes} style={style} {...hoverClick}>
            <div className="submenu-title" {...clickEvents}>
                {title}
                <Icon icon="angle-down" className="arrow-icon"/>
            </div>
            {renderChild()}
        </li>
    )
}
SubMenu.displayName = 'SubMenu';
export default SubMenu;
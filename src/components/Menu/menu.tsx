import React, {CSSProperties, createContext,useState} from 'react';
import classnames from 'classnames';
import { MenuItemProps } from './menuItem'



type MenuMode = 'horizontal' | 'vertical'


export interface MenuProps {
    defaultIndex?:string;
    className?:string;
    defaultOpenSubMenu?:string[];
    style?:CSSProperties;
    mode?:MenuMode;
    onSelect?:(index:string)=>void;
}

interface IMenuContext {
    index: string;
    onSelect?: (selectedIndex: string) => void;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({index: '0'})

const Menu:React.FC<MenuProps> = (props) => {
    const { className, defaultIndex, style, mode, onSelect, children } = props
    const [active,setActive] = useState(defaultIndex);
    const classes = classnames('viking-menu',className,{
        'menu-horizontal':mode === 'horizontal',
        'menu-vertical' : mode === 'vertical'
    });

    const handleSelect = (index:string) => {
        setActive(index)
        if(onSelect) {
            onSelect(index)
        }
    }

    const contextVal:IMenuContext = {
        index : active?active:'0',
        onSelect:handleSelect,
    }

    const renderChildren = () => {
       return  React.Children.map(children,(child,index)=>{
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const {displayName} = childElement.type;
            if(displayName === 'MenuItem') {
                return React.cloneElement(childElement, {index: index.toString()})
            } else {
                console.error("Warning: Menu has a child which is not a MenuItem component")
            }
        })
    };

    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={contextVal}>
            {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {defaultIndex:'0',mode:'horizontal'}
export default Menu;
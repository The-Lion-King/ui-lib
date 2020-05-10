import React, { CSSProperties } from 'react';
declare type MenuMode = 'horizontal' | 'vertical';
export interface MenuProps {
    defaultIndex: string;
    className?: string;
    defaultOpenSubMenu?: string[];
    style?: CSSProperties;
    mode?: MenuMode;
    onSelect: (index: string) => void;
}
interface IMenuContext {
    index: string;
    onSelect?: (selectedIndex: string) => void;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];
}
export declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: React.FC<MenuProps>;
export default Menu;

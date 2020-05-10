import { FC } from 'react';
import { MenuProps } from './menu';
import { MenuItemProps } from './menuItem';
export declare type IMenuComponent = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
};
declare const TransMenu: IMenuComponent;
export default TransMenu;

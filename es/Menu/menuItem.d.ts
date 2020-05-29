import React, { CSSProperties } from 'react';
export interface MenuItemProps {
    className?: string;
    style?: CSSProperties;
    index?: string;
    disabled?: boolean;
}
export declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;

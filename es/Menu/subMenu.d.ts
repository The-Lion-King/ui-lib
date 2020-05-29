import React, { CSSProperties } from 'react';
export interface SubMenuProps {
    index?: string;
    className?: string;
    title: string;
    style?: CSSProperties;
    popupClassName?: string;
    onTitleClick?: (index: string, e: React.MouseEvent) => void;
}
declare const SubMenu: React.FC<SubMenuProps>;
export default SubMenu;

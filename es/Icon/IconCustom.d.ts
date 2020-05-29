import React, { CSSProperties } from 'react';
export interface CustomIconProps {
    width: string | number;
    height: string | number;
    fill: string;
    viewBox?: string;
    className?: string;
    style?: React.CSSProperties;
}
export declare type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export interface IconCustomProps {
    component?: React.ComponentType<CustomIconProps | React.SVGProps<SVGSVGElement>>;
    className?: string;
    style?: CSSProperties;
    theme?: ThemeProps;
}
declare const IconCustom: React.FC<IconCustomProps>;
export default IconCustom;

import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
export declare type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export interface CustomIconProps {
    width: string | number;
    height: string | number;
    fill: string;
    viewBox?: string;
    className?: string;
    style?: React.CSSProperties;
}
export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps;
    component?: React.ComponentType<CustomIconProps | React.SVGProps<SVGSVGElement>>;
    className?: string;
}
declare const Icon: React.FC<IconProps>;
export default Icon;

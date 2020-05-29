import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface CustomIconProps {
    width: string | number;
    height: string | number;
    fill: string;
    viewBox?: string;
    className?: string;
    style?: React.CSSProperties;
}

export interface IconProps extends FontAwesomeIconProps {
    theme? : ThemeProps
    component?:React.ComponentType<CustomIconProps | React.SVGProps<SVGSVGElement>>;
    className?:string;
}

const Icon: React.FC<IconProps> = (props) => {
    // icon-primary
    const { className, theme, component:Component, style, ...restProps } = props;
    const classes = classNames('viking-icon', className, {
        [`icon-${theme}`]: theme
    });
        return (
            <FontAwesomeIcon className={classes} {...restProps} />
        )
};

export default Icon
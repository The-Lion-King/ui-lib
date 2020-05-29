import React, {CSSProperties} from 'react'

import classNames from 'classnames'
import {svgBaseProps} from "./utils";
export interface CustomIconProps {
    width: string | number;
    height: string | number;
    fill: string;
    viewBox?: string;
    className?: string;
    style?: React.CSSProperties;
}


export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'


export interface IconCustomProps {
    component?:React.ComponentType<CustomIconProps | React.SVGProps<SVGSVGElement>>;
    className?:string;
    style?:CSSProperties;
    theme?:ThemeProps;
}

const IconCustom: React.FC<IconCustomProps> = (props) => {
    // icon-primary
    const { className,component:Component, style, theme, children } = props;
    const classes = classNames('viking-icon', className, {
        [`icon-${theme}`]: theme
    });
    const innerSvgProps: CustomIconProps = {
        ...svgBaseProps,
    };
    const renderChildNode = () => {
        if(!(Component || children)){
            console.error('Should have `component` prop or `children`.')
        }
        if(Component) {
            return <Component {...innerSvgProps}/>
        }
        if(children){
            return <svg {...innerSvgProps}>
                {children}
            </svg>

        }
    }
    return <i style={style} className={classes}>
        {renderChildNode()}
    </i>

};

export default IconCustom
import React, { FC, AnchorHTMLAttributes, ButtonHTMLAttributes, useContext } from 'react';
import classnames from 'classnames';
import { ConfigProviderContext } from '../config-provider';

export type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'dashed'
export type ButtonSize = 'lg' | 'sm'
export interface BaseButtonProps {
    className?:string;
    btnType?: ButtonType;
    size?:ButtonSize;
    disabled?:boolean;
    children: React.ReactNode;
    href?: string;
    circle?:boolean;
    icon?:React.ReactNode;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button:FC<ButtonProps> = (props) => {
  const {
    className,
    btnType,
    size,
    disabled,
    children,
    href,
    circle,
    icon,
    ...restProps
  } = props;
  const {getPrefixCls} = useContext(ConfigProviderContext)
  const prefixCls = getPrefixCls('btn');
  const classes = classnames(prefixCls, className, {
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-${btnType}`]: btnType,
    disabled: btnType === 'link' && disabled,
  });

  const btnClasses = classnames(classes, {
      [`${prefixCls}-circle`]:circle,
  });

  if (btnType === 'link' && href) {
    return <a className={classes} href={href} {...restProps}>{children}</a>;
  }

  return <button className={btnClasses} disabled={disabled} {...restProps}>{icon}{children}</button>;
};

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
};

export default Button;

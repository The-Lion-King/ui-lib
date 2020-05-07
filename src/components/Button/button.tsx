import React, { FC, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';

export type ButtonType = 'primary' | 'default' | 'danger' | 'link'
export type ButtonSize = 'lg' | 'sm'
export interface BaseButtonProps {
    className?:string;
    btnType?: ButtonType;
    size?:ButtonSize;
    disabled?:boolean;
    children: React.ReactNode;
    href?: string;
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
    ...restProps
  } = props;

  const classes = classnames('btn', className, {
    [`btn-${size}`]: size,
    [`btn-${btnType}`]: btnType,
    disabled: btnType === 'link' && disabled,
  });

  if (btnType === 'link' && href) {
    return <a className={classes} href={href} {...restProps}>{children}</a>;
  }

  return <button className={classes} disabled={disabled} {...restProps}>{children}</button>;
};

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
};

export default Button;

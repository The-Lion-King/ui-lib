import React, { ChangeEvent, InputHTMLAttributes, ReactElement } from 'react';
export declare type Size = 'lg' | 'sm';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    size?: Size;
    className?: string;
    disabled?: boolean;
    prepend?: string | ReactElement;
    append?: string | ReactElement;
    Icon?: React.ReactNode;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export declare const Input: React.FC<InputProps>;
export default Input;

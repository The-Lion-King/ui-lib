import React, {ChangeEvent, InputHTMLAttributes, ReactElement} from 'react';
import classnames from 'classnames';
export type Size = 'lg' | 'sm';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>,'size'>{
    size?:Size;
    className?:string;
    disabled?:boolean;
    prepend?:string | ReactElement;
    append?:string | ReactElement;
    Icon?:React.ReactNode;
    onChange? : (e: ChangeEvent<HTMLInputElement>) => void;
}
export const Input:React.FC<InputProps> = (props) => {
    const {
        size,
        className,
        disabled,
        prepend,
        append,
        Icon,
        style,
        ...restProps
    } = props;
    const cnames = classnames('viking-input-wrapper', {
        [`input-size-${size}`]: size,
        'is-disabled': disabled,
        'input-group': prepend || append,
        'input-group-append': !!append,
        'input-group-prepend': !!prepend
    });

    const fixControlledValue = (value: any) => {
        if (typeof value === 'undefined' || value === null) {
            return ''
        }
        return value
    };
    if('value' in props) {
        delete restProps.defaultValue;
        restProps.value = fixControlledValue(props.value)
    }

    return <div className={cnames} style={style}>
        {prepend && <div className="viking-input-group-prepend">{prepend}</div>}
        {Icon && <div className="icon-wrapper">{Icon}</div>}
        <input  className="viking-input-inner"
                disabled={disabled}
                {...restProps}
        />
        {append && <div className="viking-input-group-append">{append}</div>}
    </div>
}
export default Input;
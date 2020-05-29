import { FC } from 'react';
import { IconProps } from './Icon';
import { IconCustomProps } from './IconCustom';
export declare type IconType = FC<IconProps> & {
    Custom: FC<IconCustomProps>;
    CreateIcon: Function;
};
declare const TransIcon: IconType;
export default TransIcon;

import {FC} from 'react';
import Icon, {IconProps} from './Icon';
import IconCustom, {IconCustomProps} from './IconCustom'
import Create from './IconCreate'
export type IconType = FC<IconProps> & {
    Custom:FC<IconCustomProps>;
    CreateIcon:Function;
}

const TransIcon = Icon as IconType;
TransIcon.Custom = IconCustom;
TransIcon.CreateIcon = Create;
export default TransIcon;
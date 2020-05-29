import React from 'react';
import { IconCustomProps } from './IconCustom';
export interface CreateIconOptions {
    scriptUrl: string | string[];
}
export interface IconFontProps extends IconCustomProps {
    icon: string;
}
declare const Create: (props: CreateIconOptions) => React.FC<IconFontProps>;
export default Create;

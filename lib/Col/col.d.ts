import React, { HTMLAttributes } from 'react';
export interface ColProps extends HTMLAttributes<HTMLDivElement> {
    gutter?: number;
    key?: number;
    offset?: number;
    span?: number;
    order?: number;
}
declare const Col: React.FC<ColProps>;
export default Col;

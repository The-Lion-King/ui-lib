import React, { HTMLAttributes } from 'react';
export declare type alignType = 'top' | 'bottom' | 'center';
export declare type justifyType = "start" | "end" | "center" | "space-around" | "space-between";
interface RowProps extends HTMLAttributes<HTMLDivElement> {
    gutter?: number;
    align?: alignType;
    justify?: justifyType;
}
declare const Row: React.FC<RowProps>;
export default Row;

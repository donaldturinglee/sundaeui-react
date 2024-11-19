import React from "react";

export interface BoxProps {
    as?: React.ElementType;
    className?: string;
    children?: React.ReactNode;
    [key: string]: any;
}
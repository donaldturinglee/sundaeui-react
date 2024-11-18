import React from "react";
import { BoxProps } from "./Box.types";
import { ClassNames } from "@utilities/classnames";

export const Box = (props: BoxProps) => {
    const {
        as: Box = "div",
        ...rest
    } = props;

    const classnames = ClassNames();

    return (
        <Box className={classnames} {...rest}/>
    )
}
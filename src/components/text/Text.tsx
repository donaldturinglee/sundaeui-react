import React from "react";
import { TextProps } from "./Text.types";
import { Box } from "@components/box/Box";
import { ClassNames } from "@utilities/classnames";

export const Text = (props: TextProps) => {
    const {
        className,
        children = "Text",
        fontWeight = "normal",
        fontSize = 16,
        lineHeight = 24,
        ...rest
    } = props;
    const classnames = ClassNames();
    return (
        <Box as="span" className={classnames} {...rest}>
            {children}
        </Box>
    )
}
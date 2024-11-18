import React from "react";
import { HeadingProps } from "./Heading.types";
import { Box } from "@components/box/Box";

export const Heading = (props: HeadingProps) => {
    const {
        level,
        children,
        ...rest
    } = props;
    return (
        <Box as={level} {...rest}>
            {children}
        </Box>
    )
}
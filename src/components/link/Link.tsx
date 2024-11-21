import React from "react";
import { Box } from "@components/box/Box";
import { LinkProps } from "./Link.types";
import { ClassNames } from "@utilities/classnames";

export const Link = (props: LinkProps) => {
    const {
        children = "Link",
        className,
        target,
        href,
        ...rest
    } = props;

    const classnames = ClassNames();

    return (
        <Box as="a" href={href} target={target} className={classnames} {...rest}>
            {children}
        </Box>
    )
}
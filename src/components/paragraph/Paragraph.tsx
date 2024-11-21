import React from "react";
import { Box } from "@components/box/Box";
import { ParagraphProps } from "./Paragraph.types";
import { ClassNames } from "@utilities/classnames";

export const Paragraph = (props: ParagraphProps) => {
    const {
        children = "Paragraph",
        className,
        ...rest
    } = props;

    const classnames = ClassNames();

    return (
        <Box as="p" className={classnames} {...rest}>
            {children}
        </Box>
    )
}
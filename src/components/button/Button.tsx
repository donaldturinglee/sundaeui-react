import React from "react";
import { ButtonProps } from "./Button.types";
import { ClassNames } from "@utilities/classnames";
import "@styles/components/_button.scss";

export const Button = (props: ButtonProps) => {
    const {
        appearance = "primary",
        color = "gray",
        size = "medium",
        label = "Button",
        ...rest
    } = props;
    const classnames = ClassNames();
    return (
        <button
            type="button"
            className={classnames}
            {...rest}
        >
            {label}
        </button>
    );
}
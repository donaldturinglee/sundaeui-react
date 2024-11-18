import React from "react";

export interface ButtonProps {
    color?: "red" | "green" | "blue" | "gray";
    appearance?: string;
    label?: string;
    icon?: React.ReactNode;
    size?: "small" | "medium" | "large";
    className?: string;
    iconPosition?: "before" | "after";
    isLoading?: boolean;
    isActive?: boolean;
    disabled?: boolean;
}

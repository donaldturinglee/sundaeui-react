import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

test("Basic button", () => {
    render(<Button />)
    expect(screen.getByText("Button")).toBeInTheDocument();
});
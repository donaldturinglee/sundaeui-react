import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Box } from "./Box";

test("Box as a div", () => {
    const { container } = render(<Box />)
    expect(container.querySelector("div")).toBeInTheDocument();
});
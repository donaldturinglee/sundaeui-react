import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Paragraph } from "./Paragraph";

test("Regular Text", () => {
    const { container } = render(<Paragraph />);
    expect(container.querySelector("p")).toBeInTheDocument();
    expect(screen.getByText("Paragraph")).toBeInTheDocument();
});

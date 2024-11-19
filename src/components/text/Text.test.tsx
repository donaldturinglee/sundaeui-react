import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Text } from "./Text";

test("Regular Text", () => {
    const { container } = render(<Text />);
    expect(container.querySelector("span")).toBeInTheDocument();
    expect(screen.getByText("Text")).toBeInTheDocument();
});

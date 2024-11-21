import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Link } from "./Link";

test("Link", () => {
    const { container } = render(<Link href="#" />);
    expect(container.querySelector("a")).toBeInTheDocument();
    expect(screen.getByText("Link")).toBeInTheDocument();
});

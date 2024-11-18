import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Heading } from "./Heading";

test("Heading 1", () => {
    const { container } = render(<Heading level="h1">Heading 1</Heading>)
    expect(container.querySelector("h1")).toBeInTheDocument();
    expect(screen.getByText("Heading 1")).toBeInTheDocument();
});

test("Heading 2", () => {
    const { container } = render(<Heading level="h2">Heading 2</Heading>)
    expect(container.querySelector("h2")).toBeInTheDocument();
    expect(screen.getByText("Heading 2")).toBeInTheDocument();
});

test("Heading 3", () => {
    const { container } = render(<Heading level="h3">Heading 3</Heading>)
    expect(container.querySelector("h3")).toBeInTheDocument();
    expect(screen.getByText("Heading 3")).toBeInTheDocument();
});

test("Heading 4", () => {
    const { container } = render(<Heading level="h4">Heading 4</Heading>)
    expect(container.querySelector("h4")).toBeInTheDocument();
    expect(screen.getByText("Heading 4")).toBeInTheDocument();
});

test("Heading 5", () => {
    const { container } = render(<Heading level="h5">Heading 5</Heading>)
    expect(container.querySelector("h5")).toBeInTheDocument();
    expect(screen.getByText("Heading 5")).toBeInTheDocument();
});

test("Heading 6", () => {
    const { container } = render(<Heading level="h6">Heading 6</Heading>)
    expect(container.querySelector("h6")).toBeInTheDocument();
    expect(screen.getByText("Heading 6")).toBeInTheDocument();
});
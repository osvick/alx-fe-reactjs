import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom/extend-expect";

describe("TodoList component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
    expect(screen.getByText("Read a chapter")).toBeInTheDocument();
    expect(screen.getByText("Write notes")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add new todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Walk dog" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Walk dog")).toBeInTheDocument();
  });

  test("toggles a todo (completed/uncompleted)", () => {
    render(<TodoList />);
    const todoText = screen.getByTestId("todo-text-1"); // Buy milk has id=1
    // initially not completed
    expect(todoText).toHaveStyle("text-decoration: none");

    fireEvent.click(todoText); // toggle to completed
    expect(todoText).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todoText); // toggle back
    expect(todoText).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    // Ensure Buy milk exists
    expect(screen.getByText("Buy milk")).toBeInTheDocument();

    const deleteBtn = screen.getByLabelText("delete-1");
    fireEvent.click(deleteBtn);

    expect(screen.queryByText("Buy milk")).not.toBeInTheDocument();
  });
});

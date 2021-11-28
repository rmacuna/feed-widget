// Create a test for the feed component
import React from "react";
import { render, screen, within } from "@testing-library/react";
import { Feed } from "./Feed";

test("renders the feed with n=15 default offset", () => {
  render(<div>das</div>);
  const list = screen.getByRole("list");
  const { getAllByRole } = within(list);
  const listElements = getAllByRole("listitem");
  expect(listElements.length).toBe(15);
});

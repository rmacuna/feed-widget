import React from "react";
import { Post } from "./Post";
import { render, screen } from "@testing-library/react";

it("Should render a post", () => {
  const props = {
    author: "Post Title",
    messageBody: "Post Body",
    createdAt: "2020-01-01",
  };
  render(<Post {...props} />);
  const titlePost = screen.getByText(props.author);
  expect(titlePost).toBeInTheDocument();
});

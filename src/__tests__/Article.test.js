// src/__tests__/Article.test.js

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this line to extend expect with toBeInTheDocument
import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  render(<Article />);
  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});

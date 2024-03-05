// src/__tests__/Header.test.js

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this line to extend expect with toBeInTheDocument
import Header from "../components/Header";

test("displays the text 'hello from the Header!'", () => {
  render(<Header />);
  expect(screen.queryByText("hello from the Header!")).toBeInTheDocument();
});

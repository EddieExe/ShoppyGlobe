import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Shopping Cart heading", () => {
  render(<App />);
  const cartHeading = screen.getByText(/Shopping Cart/i);
  expect(cartHeading).toBeInTheDocument();
});

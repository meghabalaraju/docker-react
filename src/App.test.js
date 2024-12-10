import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/It is changes on the feature branch/i);
  expect(linkElement).toBeInTheDocument();
});

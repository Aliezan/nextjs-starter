import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  it("renders Home Page", () => {
    render(<Home />);
    const linkElement = screen.getByText(/Get started by editing/i);
    expect(linkElement).toBeInTheDocument();
  });
});

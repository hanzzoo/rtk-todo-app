import { render, screen } from "@testing-library/react";
import { Sample } from "../../pages/components/Sample";

describe("Sample", () => {
  it("renders a heading", () => {
    const { container } = render(<Sample />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});

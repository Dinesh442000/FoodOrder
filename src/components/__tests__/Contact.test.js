const { render, screen } = require("@testing-library/react");
const { default: Contact } = require("../Contact");
import "@testing-library/jest-dom";

describe("Contact Us page Test Cases", () => {
  test("Should load Contact US component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load Button in the Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should load Button in the Contact component by GetByText", () => {
    render(<Contact />);

    const submit_Text = screen.getByText("Submit");
    expect(submit_Text).toBeInTheDocument();
  });

  test("Should load input name inside Contact Component", () => {
    render(<Contact />);

    const input_name = screen.getByPlaceholderText("Name");
    expect(input_name).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact Component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes.length);

    //Assertions to be written to check conditions else everything is passed
    expect(inputBoxes.length).toBe(2);
  });
});

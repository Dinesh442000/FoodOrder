import RestaurantCard, { withPromotedlabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Domino's Pizza");
  expect(name).toBeInTheDocument();
});

// it("should render RestaurantCard with Promoteed Label", () => {
//   render(<RestaurantCard resData={MOCK_DATA} />);

//   const name = screen.getByText("Domino's Pizza");
//   expect(name).toBeInTheDocument();
// });

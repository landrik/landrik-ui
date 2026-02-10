import React from "react";
import renderer from "react-test-renderer";
import Rating from "./Rating.tsx";

it("renders using the default props", () => {
  const tree = renderer.create(<Rating />).toJSON();
  expect(tree).toMatchSnapshot();
});

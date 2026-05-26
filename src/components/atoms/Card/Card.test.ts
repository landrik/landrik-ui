import React from "react";
import renderer from "react-test-renderer";
import { Card } from "./Card.tsx";

it("renders using the default props", () => {
  const tree = renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});

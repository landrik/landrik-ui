import React from "react";
import renderer from "react-test-renderer";
import Box from "./Box.tsx";

it("renders using the default props", () => {
  const tree = renderer.create(<Box />).toJSON();
  expect(tree).toMatchSnapshot();
});

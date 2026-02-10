import React from "react";
import renderer from "react-test-renderer";
import Grid from "./Grid.tsx";

it("renders using the default props", () => {
  const tree = renderer.create(<Grid />).toJSON();
  expect(tree).toMatchSnapshot();
});

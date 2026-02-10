import React from "react";
import renderer from "react-test-renderer";
import Tooltip from "./Tooltip.tsx";

it("renders using the default props", () => {
  const tree = renderer.create(<Tooltip />).toJSON();
  expect(tree).toMatchSnapshot();
});

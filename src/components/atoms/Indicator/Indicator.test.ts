import React from "react";
import renderer from "react-test-renderer";
import Indicator from "./Indicator.tsx";

it("renders using the default props", () => {
  const tree = renderer.create(<Indicator />).toJSON();
  expect(tree).toMatchSnapshot();
});

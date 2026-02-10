import React from "react";
import renderer from "react-test-renderer";
import Collapse from "./Collapse.tsx";

it("renders using the default props", () => {
  const tree = renderer.create(<Collapse />).toJSON();
  expect(tree).toMatchSnapshot();
});

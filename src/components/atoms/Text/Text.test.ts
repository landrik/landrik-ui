import React from "react";
import renderer from "react-test-renderer";
import Text from "./Text.tsx";

it("renders using the default props", () => {
  const tree = renderer.create(<Text />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import Tag from "./Tag.tsx";

it("renders using the default props", () => {
  const tree = renderer.create(<Tag />).toJSON();
  expect(tree).toMatchSnapshot();
});

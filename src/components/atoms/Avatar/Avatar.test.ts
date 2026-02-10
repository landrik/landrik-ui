import React from "react";
import renderer from "react-test-renderer";
import Avatar from "./Avatar.tsx";

it("renders using the default props", () => {
  const tree = renderer.create(<Avatar />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import Container from "./Container.tsx";

it("renders using the default props", () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});

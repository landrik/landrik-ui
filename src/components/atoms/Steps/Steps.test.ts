import React from "react";
import renderer from "react-test-renderer";
import Steps from "./Steps.tsx";

it("renders using the default props", () => {
  const tree = renderer.create(<Steps />).toJSON();
  expect(tree).toMatchSnapshot();
});

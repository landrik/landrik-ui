import React from "react";
import renderer from "react-test-renderer";
import FormGroup from "./FormGroup.tsx";

it("renders using the default props", () => {
  const tree = renderer.create(<FormGroup />).toJSON();
  expect(tree).toMatchSnapshot();
});

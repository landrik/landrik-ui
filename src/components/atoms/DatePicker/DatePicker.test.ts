import React from "react";
import renderer from "react-test-renderer";
import DatePicker from "./DatePicker.tsx";

it("renders using the default props", () => {
  const tree = renderer.create(<DatePicker />).toJSON();
  expect(tree).toMatchSnapshot();
});

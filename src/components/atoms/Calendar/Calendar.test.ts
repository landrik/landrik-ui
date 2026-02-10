import React from "react";
import renderer from "react-test-renderer";
import Calendar from "./Calendar.tsx";

it("renders using the default props", () => {
  const tree = renderer.create(<Calendar />).toJSON();
  expect(tree).toMatchSnapshot();
});

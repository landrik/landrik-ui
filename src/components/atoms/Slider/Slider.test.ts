import React from "react";
import renderer from "react-test-renderer";
import Slider from "./Slider.tsx";

it("renders using the default props", () => {
  const tree = renderer.create(<Slider />).toJSON();
  expect(tree).toMatchSnapshot();
});

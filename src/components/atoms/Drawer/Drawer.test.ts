import React from "react";
import renderer from "react-test-renderer";
import { Drawer } from "./Drawer.tsx";

it("renders using the default props", () => {
  const tree = renderer.create(<Drawer />).toJSON();
  expect(tree).toMatchSnapshot();
});

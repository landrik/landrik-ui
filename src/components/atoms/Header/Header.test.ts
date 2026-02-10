import React from "react";
import renderer from "react-test-renderer";
import Header from "./Header.tsx";

it("renders using the default props", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

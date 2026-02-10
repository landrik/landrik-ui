import React from "react";
import renderer from "react-test-renderer";
import Pagination from "./Pagination.tsx";

it("renders using the default props", () => {
  const tree = renderer.create(<Pagination />).toJSON();
  expect(tree).toMatchSnapshot();
});

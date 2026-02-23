import React from "react";
import renderer from "react-test-renderer";
import FileUpload from "./FileUpload.tsx";

it("renders using the default props", () => {
  const tree = renderer.create(<FileUpload />).toJSON();
  expect(tree).toMatchSnapshot();
});

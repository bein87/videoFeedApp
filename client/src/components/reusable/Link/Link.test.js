import React from "react";
import { shallow } from "enzyme";
import { Link } from "./Link";

describe("<Link />", () => {
  it("renders without crashing", () => {
    shallow(<Link />);
  });
});

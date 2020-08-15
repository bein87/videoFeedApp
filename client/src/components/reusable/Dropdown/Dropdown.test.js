import React from "react";
import { shallow } from "enzyme";
import Dropdown from "./Dropdown";

describe("<DropDown> component", () => {
  it("renders without crashing", () => {
    shallow(<Dropdown />);
  });
});

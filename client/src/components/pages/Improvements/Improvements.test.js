import React from "react";
import { shallow } from "enzyme";
import Improvements from "./Improvements";

it("renders without crashing", () => {
  shallow(<Improvements />);
});

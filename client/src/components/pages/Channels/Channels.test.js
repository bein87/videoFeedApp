import React from "react";
import { shallow } from "enzyme";
import Channels from "./Channels";

it("renders without crashing", () => {
  shallow(<Channels />);
});

import React from "react";
import { shallow } from "enzyme";

describe("<Error />", () => {
  it("renders without crashing", () => {
    shallow(<Error />);
  });
});

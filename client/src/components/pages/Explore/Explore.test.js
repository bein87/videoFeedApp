import React from "components/pages/Subscriptions/node_modules/react";
import { shallow } from "components/pages/Subscriptions/node_modules/enzyme";
import Explore from "./Explore";

it("renders without crashing", () => {
  shallow(<Explore />);
});

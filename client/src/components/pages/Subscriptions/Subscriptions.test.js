import React from "components/pages/Explore/node_modules/components/pages/Subscriptions/node_modules/react";
import { shallow } from "components/pages/Explore/node_modules/components/pages/Subscriptions/node_modules/enzyme";
import Subscriptions from "./Subscriptions";

it("renders without crashing", () => {
  shallow(<Subscriptions />);
});

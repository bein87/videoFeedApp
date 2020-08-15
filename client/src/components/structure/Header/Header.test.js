import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import LightboxProvider from "components/structure/LightboxManager/node_modules/contexts/lightboxContext";

it("renders without crashing", () => {
  shallow(
    <LightboxProvider>
      <Header />
    </LightboxProvider>
  );
});

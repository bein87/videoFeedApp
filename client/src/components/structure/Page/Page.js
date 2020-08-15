import React from "react";
import Header from "components/structure/Header";
import LightboxManager from "components/structure/LightboxManager";

import "./Page.scss";
/**
 * Page wrapper, everything here is on every page
 * @return the page, including the head, "hidden" lightbox manager, and the page the user is visiting
 */
const Page = ({ children }) => {
  return (
    <div>
      <LightboxManager />
      <Header />
      <div className="layout">{children}</div>
    </div>
  );
};

export default Page;

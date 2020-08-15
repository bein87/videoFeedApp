import React from "react";
import { BrowserRouter } from "react-router-dom";
import LightboxProvider from "contexts/lightboxContext";
import BasicProvider from "contexts/basicContext";
import Router from "components/structure/Router";
import Page from "components/structure/Page";

import "./App.scss";
/**
 * Place all your app wrappers here, make sure the order is correct
 */
function App() {
  return (
    <BrowserRouter>
      <LightboxProvider>
        <BasicProvider>
          <Page>
            <Router />
          </Page>
        </BasicProvider>
      </LightboxProvider>
    </BrowserRouter>
  );
}

export default App;

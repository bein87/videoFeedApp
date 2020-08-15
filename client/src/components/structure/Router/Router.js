import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Home from "components/pages/Home";
import About from "components/pages/About";
import Info from "components/pages/Info";
import Subscriptions from "components/pages/Subscriptions/Subscriptions";
import Channels from "components/pages/Channels/Channels";
import Explore from "components/pages/Explore/Explore";
import Improvements from "components/pages/Improvements/Improvements";
/**
 * the router handler for this app
 */
const Router = () => {
  return (
    <Switch>
      <Route exact path={`/`} component={Home} />
      <Route exact path={`/about`} component={About} />
      <Route exact path={`/info`} component={Info} />
      <Route exact path={`/improvements`} component={Improvements} />
      <Route exact path={`/subscriptions`} component={Subscriptions} />
      <Route exact path={`/explore`} component={Explore} />
      <Route exact path={`/channels`} component={Channels} />
      <Redirect from="*" to={`/`} />
    </Switch>
  );
};

export default Router;

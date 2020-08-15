import React from "react";
import classNames from "classnames";
import { Link as L, NavLink as NL } from "react-router-dom";

import "./Link.scss";
/**
 * making link to use with react router
 */
const makeLink = (Component) => (props) => {
  const className = classNames(["link", props.className]);
  const to = props.to;
  return <Component {...{ ...props, to, className }} />;
};

const Link = makeLink(L);
export const NavLink = makeLink(NL);

export default Link;

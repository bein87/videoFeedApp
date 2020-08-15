import React, { useState, useEffect } from "react";
import { NavLink } from "components/reusable/Link";
import "./Header.scss";
import Image from "components/reusable/Image";
import UserActions from "./UserActions";
import useMediaQueries from "hooks/useMediaQueries";

/**
 * @return a nav element. this will be the header row in all pages of the app.
 */
const Header = () => {
  const { desktopCondition } = useMediaQueries();
  const [showMobileDrawer, setShowMobileDrawer] = useState(false);

  //logic for mobile menu drawer
  const toggleDrawer = () => {
    console.log("sorry, header drawer was not implemented");
    setShowMobileDrawer(!showMobileDrawer);
  };

  useEffect(() => {
    //if page is expended and side menu is open - hide it.
    if (desktopCondition) {
      setShowMobileDrawer(false);
    }
  }, [desktopCondition]);

  return (
    <nav>
      <div className="header-container">
        <NavLink exact to="/">
          <Image name="logo" className="app-logo" />
        </NavLink>

        {!desktopCondition ? (
          <Image
            name="hamburger"
            className="hamburger-button"
            onClick={toggleDrawer}
          />
        ) : (
          <></>
        )}
        <div
          className={
            !desktopCondition
              ? `header-drawer ${showMobileDrawer ? "show-header-drawer" : ""}`
              : "header-links"
          }
        >
          <NavLink exact to="/explore">
            Explore
          </NavLink>
          <NavLink exact to="/subscriptions">
            Subscriptions
          </NavLink>
          <NavLink exact to="/channels">
            Channels
          </NavLink>
          <UserActions />
        </div>
      </div>
    </nav>
  );
};

export default Header;

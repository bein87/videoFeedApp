import React from "react";
import { NavLink } from "components/reusable/Link";
import Image from "components/reusable/Image";
import Dropdown from "components/reusable/Dropdown/Dropdown";

/**
 * @return an element with the user avatar, including a dropdown with some user related info .
 */
const UserActions = () => {
  const dropdownContent = {
    about: (
      <NavLink exact to="/about">
        About Me
      </NavLink>
    ),
    info: (
      <NavLink exact to="/info">
        App info
      </NavLink>
    ),
    improvements: (
      <NavLink exact to="/improvements">
        Improvements
      </NavLink>
    ),
  };

  return (
    <Dropdown
      title={<Image className="user-avatar" name="tzach" ext="png" />}
      selectList={dropdownContent}
    ></Dropdown>
  );
};

export default UserActions;

import React, { useState, useRef } from "react";
import "./Dropdown.scss";
import { DropdownContent } from "./DropdownContent";
import useOnClickOutside from "hooks/useOnClickOutside";
import { CSSTransition } from "react-transition-group";

/**
 * @param {string} title - the title
 * @param {object} selectList - the select list
 * @param {method} handleChange - what happens after selecting
 * @param {boolean} isChangeTitle - if to change the title after selecting from dropdown
 * @param {string} className - additional class names to add
 * @return a dropdown element
 */

const Dropdown = ({
  selectList,
  selectObject,
  handleChange,
  title,
  className,
  isChangeTitle,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [dropdownTitle, setDropdownTitle] = useState(title);

  const ref = useRef();
  useOnClickOutside(ref, () => setShowDropDown(false));
  return (
    <CSSTransition
      in={showDropDown}
      timeout={600}
      classNames="dropdown"
      unmountOnExit={false}
    >
      <div className={`dropdown ${className ? className : ""}`}>
        <div ref={ref} onClick={() => setShowDropDown((prev) => !prev)}>
          {dropdownTitle}
          <DropdownContent
            {...{
              setDropdownTitle,
              handleChange,
              selectList,
              selectObject,
              isChangeTitle,
            }}
          />
        </div>
      </div>
    </CSSTransition>
  );
};

Dropdown.defaultProps = {
  selectList: [],
  title: "",
  className: "",
  isChangeTitle: false,
};

export default Dropdown;

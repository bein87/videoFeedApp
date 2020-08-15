import React from "react";

export const DropdownContent = ({
  selectList,
  handleChange,
  setDropdownTitle,
  isChangeTitle,
}) => {
  /* change selection of dropdown + handleChange if needed */
  const changeDropdownSelection = (e, itemKey) => {
    if (handleChange) {
      handleChange(e, itemKey);
    }
    if (isChangeTitle) {
      setDropdownTitle(selectList[itemKey]);
    }
  };
  if (selectList) {
    return (
      <div className="dropdown-content">
        {Object.keys(selectList).map((itemKey) => (
          <span
            key={itemKey.text || itemKey}
            value={itemKey.text || itemKey}
            onClick={(e) => changeDropdownSelection(e, itemKey.text || itemKey)}
          >
            {selectList[itemKey].text || selectList[itemKey]}
          </span>
        ))}
        <div className="dropdown-content-arrow"></div>
      </div>
    );
  } else {
    return null;
  }
};

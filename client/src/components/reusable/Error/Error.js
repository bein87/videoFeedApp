import React from "react";
import { useBasic } from "contexts/basicContext/basicContext";
import "./Error.scss";

const Error = (Component) => {
  const { getError } = useBasic();

  return (
    <div className="error-container">
      <div className="error-message">{getError()}</div>
    </div>
  );
};

export default Error;

import React from "react";
import { useBasic } from "contexts/basicContext/basicContext";

/**
 * @return a message to show to the user (i.e if there are not more new data to show)
 */
const Message = () => {
  const { getMessage } = useBasic();
  return getMessage() ? (
    <div className="message-container">
      <span className="line"></span>
      <span className="message">{getMessage()}</span>
      <span className="line"></span>
    </div>
  ) : (
    <></>
  );
};

export default Message;

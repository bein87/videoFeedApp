import React from "react";
import Image from "components/reusable/Image";
/**
 * @return a card fail message
 */
const CardFailMessage = () => {
  return (
    <>
      <Image name="failed" ext="png" className="failed-card-image"></Image>
      <span className="failed-card-text">Oh snap! we're missing some data</span>
    </>
  );
};

export default CardFailMessage;

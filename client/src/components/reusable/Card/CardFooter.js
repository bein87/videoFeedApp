import React from "react";
import Image from "components/reusable/Image";
import secondsToMinutesConverter from "utils/secondsToMinutesConverter";
/**
 * @param {object} item - data of current item.
 * @return a card footer
 */
const CardFooter = ({ item }) => {
  return (
    <div className="card-footer">
      {<Image name={`${item.source}-icon`} className="icon" />}
      <span>{item.length ? secondsToMinutesConverter(item.length) : ""}</span>
    </div>
  );
};

export default CardFooter;

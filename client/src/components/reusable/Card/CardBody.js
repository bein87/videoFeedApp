import React from "react";
import timestampToDateConverter from "utils/timestampToDateConverter";
import numberFormatter from "utils/numberFormatter";
/**
 * @param {object} item - data of current item.
 * @return a card body
 */
const CardBody = ({ item }) => {
  return (
    <div className="card-body">
      <div>{item.title}</div>
      <span>
        <span>{timestampToDateConverter(item.date)}</span>
        <span className="dot-spacer"></span>
        <span>{numberFormatter(item.views)} views</span>
      </span>
    </div>
  );
};

export default CardBody;

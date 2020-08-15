import React from "react";
import "./Card.scss";
import CardFooter from "./CardFooter";
import CardBody from "./CardBody";
import CardThumbnail from "./CardThumbnail";
import CardFailMessage from "./CardFailMessage";
import { useInView } from "react-intersection-observer";
import { CSSTransition } from "react-transition-group";
/**
 * @param {object} item - data of current item.
 * @param {number} index - index number of current item.
 * @return a generic card that includes all the video inf (of "fail" error)
 */
const Card = ({ item }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  //verifying that there is no missing data in item
  const checkIfAllValuesExist = (item) => {
    let result = 0;
    Object.keys(item).map((i) => {
      if (item[i] !== null) result++;
      return <></>;
    });
    //currently a "good" data will include 7 props. This should be moved to global consts file.
    return result === 7;
  };

  return (
    //add fade-in for better ux
    <CSSTransition
      in={inView}
      timeout={300}
      classNames="card-animation"
      unmountOnExit={false}
    >
      <div ref={ref} className="card">
        {/* show element only after element is in view */}
        {inView ? (
          <>
            {checkIfAllValuesExist(item) && item.type === "video" ? (
              <>
                <CardThumbnail item={item} />
                <CardBody item={item} />
                <CardFooter item={item} />
              </>
            ) : (
              <CardFailMessage />
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </CSSTransition>
  );
};

export default Card;

import React from "react";
import Image from "components/reusable/Image";
import { useLightbox } from "contexts/lightboxContext/";
/**
 * @param {object} item - data of current item.
 * @return a card thumbnail
 */
const CardThumbnail = ({ item }) => {
  const { setLightbox } = useLightbox();
  //logic for clicking on thumbnail and opening lightbox with the clicked item
  const handleClick = () => {
    setLightbox(item);
  };
  return (
    <div className="card-thumbnail" onClick={() => handleClick(item)}>
      <Image
        folder="video-covers"
        name={`temp-cover-${Math.floor(Math.random() * 7 + 1)}`}
        ext="jpg"
        className="card-thumbnail-image"
      />

      <Image name="play-button" ext="png" className="play-icon" />
    </div>
  );
};

export default CardThumbnail;

import React, { useState, useEffect } from "react";
import "./Image.scss";

/**
 * @param {string} src - provide this param if this is an outer-source image
 * @param {string} name - provide this param if this is an image from project's assets folder
 * @param {string} folder - the folder the local image is located in
 * @param {string} ext - the extension of the file
 * @param {string} className - className to be added to image
 * @return an element of image (if fetching-error-catching)
 */
const Image = ({ src, name, ext = "svg", folder, className, ...props }) => {
  const defaultImage = require(`assets/images/defaultImage.svg`);
  const [imageSrc, setImageSrc] = useState();
  //method for handling
  const errorHandler = () => {
    setImageSrc(defaultImage);
  };

  //if name is provided - take image from assets folder. else, its an outer-source image.
  useEffect(() => {
    if (name && !imageSrc) {
      try {
        setImageSrc(
          require(`assets/images/${folder ? folder + "/" : ""}${name}.${ext}`)
        );
      } catch {
        console.log(`unable to require image: ${name}.${ext}`);
      }
    } else {
      fetch(imageSrc).then((res) => {
        if (res.status === 200) {
          setImageSrc(res.url);
        } else {
          console.log(`unable to require image: ${src}`);
          setImageSrc(defaultImage);
        }
      });
    }
  }, [imageSrc]);

  return (
    <img
      src={imageSrc}
      className={className}
      onError={errorHandler}
      alt={name}
      title={name}
    />
  );
};

export default Image;

import React from "react";
import Image from "components/reusable/Image/Image";
/**
 * @return an element of loader (if waiting for a response from api)
 */
const Loader = () => {
  return (
    <div className="loader-container">
      <Image className="loader" name="loader" ext="gif" />
    </div>
  );
};

export default Loader;

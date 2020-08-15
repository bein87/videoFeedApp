import React, { useMemo } from "react";
import ReactDOM from "react-dom";
import { useLightbox } from "contexts/lightboxContext";
import LightboxDefaultContainer from "./LightboxDefaultContainer";
import "./LightboxManager.scss";

const LightboxManager = () => {
  //need to pass the the methods to LightboxDefaultContainer as prop due to hierarchy/unable to get to provider/context from the lightbox.
  const { getLightboxCurrentItem, closeLightbox } = useLightbox();

  return useMemo(() => {
    //todo: implement history.push() with/without file path, and logic for routing  as well
    //history.push(`${newUrl}`);

    //if a lightbox has a "currentItem" to show, it means that it is open. creating a portal in DOM (will be located at the bottom)
    return getLightboxCurrentItem()
      ? ReactDOM.createPortal(
          <LightboxDefaultContainer
            getLightboxCurrentItem={getLightboxCurrentItem}
            closeLightbox={closeLightbox}
          />,
          document.body
        )
      : null;
  }, [getLightboxCurrentItem()]);
};

export default LightboxManager;

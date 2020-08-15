import React from "react";
import ReactPlayer from "react-player";

/**
 * @param {element} playbuzzEmbedVideoElement - the element to show (null if this is not a playbuzz video)
 * @param {string} link -  the link to show inside the reactPlayer (null if this is a playbuzz video)
 * @param {method} closeLightbox -  for closing lightbox on video error
 * @return an element to show inside the lightbox. in a bigger app, this should be more generic (to enable more lightbox types and views)
 */
const LightboxContent = ({
  playbuzzEmbedVideoElement,
  link,
  closeLightbox,
}) => {
  return (
    <>
      {/* closing the lightbox if clicked anywhere outside this element */}
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {playbuzzEmbedVideoElement ? (
          <>{playbuzzEmbedVideoElement}</>
        ) : (
          <ReactPlayer
            controls={true}
            url={link}
            onError={() => {
              alert(
                "Sorry, video is missing. it may have removed or blocked.  :\\ "
              );
              closeLightbox();
            }}
          />
        )}
      </div>
    </>
  );
};

export default LightboxContent;

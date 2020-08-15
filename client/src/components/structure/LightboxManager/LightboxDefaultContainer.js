import React from "react";
import LightboxContent from "./LightboxContent";
import PlaybuzzScriptHandler from "./PlaybuzzScriptHandler";

/**
 * @param {method} getLightboxCurrentItem - for passing data of current item.
 * @param {method} closeLightbox - for closing the lightboxManager.
 * @return an element to show inside the lightbox. in a bigger app, this should be more generic (to enable more lightbox types and views)
 */
const LightboxDefaultContainer = ({
  getLightboxCurrentItem,
  closeLightbox,
}) => {
  const item = getLightboxCurrentItem();

  //make a generic link to pass to reactPlayer. could be url, facebook, or youtube.
  //if in the future we will have more video sources, this could be extracted to a file in utils folder, with the needed logic.
  const link = item.url
    ? item.url
    : `https://www.${item.source}.com/watch/?v=${item.videoId}`;

  //init playbuzz element. this will be used to check if to render the playbuzz player of the reactPlayer
  const playbuzzEmbedVideoElement =
    item.source === "playbuzz" ? (
      <div
        className="playbuzz"
        data-id={item.videoId}
        data-show-share="false"
        data-show-info="false"
        data-comments="false"
      ></div>
    ) : null;
  return (
    <div
      className="lightbox-overlay"
      onClick={() => {
        closeLightbox();
      }}
    >
      <div className="lightbox-container">
        <PlaybuzzScriptHandler
          playbuzzEmbedVideoElement={playbuzzEmbedVideoElement}
        />
        <LightboxContent
          link={link}
          playbuzzEmbedVideoElement={playbuzzEmbedVideoElement}
          closeLightbox={closeLightbox}
        />
      </div>
    </div>
  );
};

export default LightboxDefaultContainer;

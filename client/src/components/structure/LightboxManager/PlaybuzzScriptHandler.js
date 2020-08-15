import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

/**
 * dynamically adding and removing playbuzz script using react-helmet
 * */
const PlaybuzzScriptHandler = ({ playbuzzEmbedVideoElement }) => {
  // cleanup when unmounting component
  useEffect(() => {
    //removing the script tag
    return () => {
      if (playbuzzEmbedVideoElement) {
        const metaTag = document.querySelector(`script#playbuzz-sdk`);
        if (metaTag) {
          metaTag.remove();
        }
      }
    };
  }, []);

  return (
    <>
      {/* dynamically adding script to <head> */}
      <Helmet>
        <script>
          {`(function (d, s, id) {
              var js,
                fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s);
              js.id = id;
              js.src = "https://embed.playbuzz.com/sdk.js";
              fjs.parentNode.insertBefore(js, fjs);
            })(document, "script", "playbuzz-sdk");`}
        </script>
      </Helmet>
    </>
  );
};

export default PlaybuzzScriptHandler;

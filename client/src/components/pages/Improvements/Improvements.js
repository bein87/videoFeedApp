import React from "react";
import "./Improvements.scss";
const Improvements = () => {
  return (
    <div className="page-container">
      <h1>Improvements and suggestions for Playbuzz website</h1>
      <hr></hr>
      <div>
        <b>Tech </b> errors to fix
      </div>
      <ul>
        <li>ReactJS has duplicate component renders.</li>
        <li>There are many 'failed to load resource' issues.</li>
        <li>
          Syntax errors - after a while on the page (while writing this line, my
          browser had more than 1700 messages on console) code is broken due to
          unexpected token.
        </li>
      </ul>
      <hr></hr>
      <div>
        <b>Performance</b> related issues
      </div>
      <span>
        Website loading time is around 5.23 seconds and is over the average
        loading speed (5 seconds).
      </span>
      <ul>
        <li>
          A major issue to fix is a lot of unused Javascript. Consider
          lazy-loading JS bundles, or moving to SSR.{" "}
        </li>
        <li>
          Assets size can be reduced, If you will replace files formats with
          newer image formats.
        </li>
        <li>
          Third party code is significantly impacting loading time. To solve
          this, I need to understand Playbuzz code and logic. (a solution might
          be handling it with dynamically add the third party code after page
          load)
        </li>
        <li>
          For users on slow connections, external scripts dynamically injected
          via `document.write()` can delay page load by tens of seconds.
          consider changing code to avoid document.write() in playbuzz scripts.
        </li>
        <li>
          Main-thread work - parsing, compiling and executing JS takes more than
          2 seconds. delivering smaller JS payloads may helps with this.
        </li>
      </ul>

      <hr></hr>

      <div>
        <b>SEO</b> Related issues
      </div>
      <ul>
        <li>
          Main title - page title should be shorter than 580 pixels. It is 692
          pixels long.
        </li>
        <li>Headings - not all headings have content.</li>
        <li>
          Content - page content includes low word count - only 92 words. Use at
          least 250 words to provide useful information.
        </li>
        <li>
          Social networks - There are only a few social sharing widgets on the
          page. Add more to increase SEO.
        </li>
        <li>
          Mobile - view is taking more time to load. consider changing layout or
          minifying media.
        </li>
        <li>
          Small elements - some elements targets are too small to tap, their
          size in pixels and the overlapping target that is too close to be
          easily clicked.
        </li>
      </ul>
    </div>
  );
};

export default Improvements;

import React from "react";
import "./Info.scss";
const Info = ({ children }) => {
  return (
    <div className="page-container">
      <h1>Some information on this project</h1>
      <h4>
        A simple app with main page as gallery of videos/lightbox for showing
        selected video.
      </h4>
      <hr></hr>
      <div>
        <b>Tech information</b> (In basic scope) -
      </div>
      <ul>
        <li>
          <b>Running app on your local machine </b> - download from github
          repository and run 'npm install' and 'npm start' both for client and
          server folders
        </li>
        <li>
          <b>Client</b> was built with React, TDD with jest, design with
          flex-box (no bootstrap or pre ready packages). used hooks and context
          API. Implemented lazy-loading and infinite scrolling logic, animation
          with react-transition-group useMemo for "listening" to, loader for
          letting the user know that something is happening, some self-made
          utils and hooks for better ui/ux, error handling for fetching, and
          more.
        </li>
        <li>
          <b>Server</b> was built with nodejs+express (express initial
          boilerplate) caching data with node-cache package.
        </li>
      </ul>
      <hr></hr>
      <div>
        <b>Known issues</b>
        <ul>
          <li>
            Implement logic/elements for better UX, such as preloaders for video
            in lightbox, better error after failed video request.
          </li>
          <li>
            As thumbnail src was not provided, I did random fetching of image.
            this should be changed.
          </li>
		  <li>
            Playbuzz embed sdk script should be cached in order to save requests.
          </li>
          <li>
            Server should respond each request with different object. the
            current implementation is only for task purposes.
          </li>
          <li>
            Only the most basic tests were implemented. need to go deeper with
            tests.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;

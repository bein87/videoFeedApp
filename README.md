# VideoFeedApp

A simple app with main page as gallery of videos/lightbox for showing selected video.

## Basic tech information:

- Client was built with React, TDD with jest, design with
  flex-box (no bootstrap or pre ready packages). used hooks and context
  API. Implemented lazy-loading and infinite scrolling logic, animation
  with react-transition-group useMemo for "listening" to, loader for
  letting the user know that something is happening, some self-made
  utils and hooks for better ui/ux, error handling for fetching, and
  more.
- Server was built with nodejs+express (express initial boilerplate) caching data with node-cache package.

## Known issues

- Implement logic/elements for better UX, such as preloaders for video in lightbox, better error after failed video request.
- As thumbnail src was not provided, I did random fetching of image. this should be changed.
- Lightbox should change url of current viewed item. router logic should be changed as well.
- Playbuzz embed sdk script should be cached in order to save requests.
- Server should respond each request with different object. the current implementation is only for task purposes.
- Only the most basic tests were implemented. need to go deeper with tests.

## Installation:

- clone from github repository
- npm install client app
- npm install server app

### Browsing

- npm start client app
- npm start server app
- go to localhost:3000/

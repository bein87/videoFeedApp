/**
 * a util that gets number of seconds and convert it to minutes-view
 * @param {string} seconds -  number of seconds to convert
 * @return string of minutes-view
 */
const secondsToMinutesConverter = (seconds) => {
  if (!seconds) {
    return 0;
  }
  let minutes = (seconds / 60).toFixed(2).replace(".", ":");

  //returning result
  return `${minutes}m`;
};
export default secondsToMinutesConverter;

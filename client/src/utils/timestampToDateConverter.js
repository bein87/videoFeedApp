/**
 * a util that gets UNIX timestamp and convert it to human-readable date
 * @param {string} date - the UNIX timestamp
 * @return a readable version of provided timestamp
 */
const timestampToDateConverter = (date) => {
  if (!date) {
    return 0;
  }
  var tempDate = new Date(date * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = tempDate.getFullYear();
  var month = months[tempDate.getMonth()];
  var newDate = tempDate.getDate();

  //returning result
  return `${month} ${newDate}, ${year}`;
};
export default timestampToDateConverter;

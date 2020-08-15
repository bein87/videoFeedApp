/**
 * a util that gets a number and make it more readable
 * @param {number} number - the number to format
 * @return a short representation for a number
 */
const numberFormatter = (number) => {
  if (!number) {
    return 0;
  }
  let digits = 1;
  let symbols = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  let regex = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i = symbols.length - 1;
  for (null; i > 0; i--) {
    if (number >= symbols[i].value) {
      break;
    }
  }
  if (i > 2) {
    digits = 0;
  }
  let result =
    (number / symbols[i].value).toFixed(digits).replace(regex, "$1") +
    symbols[i].symbol;
  return result;
};
export default numberFormatter;

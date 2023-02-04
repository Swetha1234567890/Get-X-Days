const addDays = require("date-fns/addDays");

let getXDays = (days) => {
  const newDate = addDays(new Date(2020, 7, 22), days);
  let result = `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
  return result;
};
module.exports = getXDays;

function datePrint(days) {
  const addDays = require("date-fns/addDays");

  let d = new Date("22-Aug-2020");
  //console.log(d);
  const result = addDays(d, days);

  return result;
}

module.exports = datePrint;
console.log(datePrint(7));

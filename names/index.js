const firstNames = require("../utilities/utils/index");
const listOfNames = require("../country/state/city/index");
const getPeopleInCity = (listOfNames) => {
  return firstNames(listOfNames);
};
module.exports = getPeopleInCity;

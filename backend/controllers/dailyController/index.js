const getAllDailies = require('./getAllDailies');
const getAllDailiesByTag = require('./getAllDailiesByTag');
const getPublicDailies = require('./getPublicDailies');
const createDaily = require('./createDaily');
const deleteDaily = require('./deleteDaily');
const getDailyById = require('./getDailyById');

module.exports = {
  getAllDailies,
  getAllDailiesByTag,
  getPublicDailies,
  createDaily,
  deleteDaily,
  getDailyById
};

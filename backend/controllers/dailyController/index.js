const getAllDailies = require('./getAllDailies');
const getAllDailiesByTag = require('./getAllDailiesByTag');
const getPublicDailies = require('./getPublicDailies');
const createDaily = require('./createDaily');
const deleteDaily = require('./deleteDaily');
const getDailyById = require('./getDailyById');
const starDaily = require('./starDaily');

module.exports = {
  getAllDailies,
  getAllDailiesByTag,
  getPublicDailies,
  createDaily,
  deleteDaily,
  getDailyById,
  starDaily
};

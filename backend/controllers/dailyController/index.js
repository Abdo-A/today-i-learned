const getAllDailies = require('./getAllDailies');
const getAllDailiesByTag = require('./getAllDailiesByTag');
const getPublicDailies = require('./getPublicDailies');
const createDaily = require('./createDaily');
const deleteDaily = require('./deleteDaily');
const getDailyById = require('./getDailyById');
const starDaily = require('./starDaily');
const unstarDaily = require('./unstarDaily');
const addCommentToDaily = require('./addCommentToDaily');
const removeCommentFromDaily = require('./removeCommentFromDaily');

module.exports = {
  getAllDailies,
  getAllDailiesByTag,
  getPublicDailies,
  createDaily,
  deleteDaily,
  getDailyById,
  starDaily,
  unstarDaily,
  addCommentToDaily,
  removeCommentFromDaily
};

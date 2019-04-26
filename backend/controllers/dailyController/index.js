const getAllDailies = require('./getAllDailies');
const getAllDailiesByTag = require('./getAllDailiesByTag');
const getPublicDailiesByTag = require('./getPublicDailiesByTag');
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
  getPublicDailiesByTag,
  getPublicDailies,
  createDaily,
  deleteDaily,
  getDailyById,
  starDaily,
  unstarDaily,
  addCommentToDaily,
  removeCommentFromDaily
};

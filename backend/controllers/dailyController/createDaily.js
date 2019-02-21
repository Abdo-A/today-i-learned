const mongoose = require('mongoose');

// Models
const Daily = mongoose.model('daily');

module.exports = (req, res) => {
  const errors = {};

  new Daily(req.body)
    .save()
    .then((daily) => {
      res.json({ success: true });
    })
    .catch((err) => {
      errors.error = 'Error saving daily into the database';
      res.status(500).json({ ...errors, ...err });
    });
};

const mongoose = require('mongoose');

// Models
const Daily = mongoose.model('daily');

module.exports = (req, res) => {
  const errors = {};
  Daily.findById(req.params.daily_id)
    .then((daily) => {
      if (!daily) {
        errors.nodaily = 'No such daily';
        res.status(404).json(errors);
      }

      daily.stars++;

      daily
        .save()
        .then(() => res.json(daily))
        .catch((err) => {
          errors.error = 'Error saving daily to database';
          res.status(500).json(errors);
        });
    })
    .catch(() => {
      errors.nodaily = 'No such daily';
      res.status(404).json(errors);
    });
};

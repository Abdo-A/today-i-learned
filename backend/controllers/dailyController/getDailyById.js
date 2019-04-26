const mongoose = require('mongoose');

// Models
const Daily = mongoose.model('daily');

module.exports = (req, res) => {
  const errors = {};
  Daily.findById(req.params.daily_id)
    .then((daily) => {
      if (!daily || daily.hidden) {
        errors.nodaily = 'No such daily';
        res.status(404).json(errors);
      }

      res.json(daily);
    })
    .catch(() => {
      errors.nodaily = 'No such daily';
      res.status(404).json(errors);
    });
};

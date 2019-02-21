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
      daily.remove().then(() => res.json({ success: true }));
    })
    .catch((err) => {
      errors.nodaily = 'No such daily';
      return res.status(404).json(errors);
    });
};

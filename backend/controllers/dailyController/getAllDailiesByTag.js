const mongoose = require('mongoose');

// Models
const Daily = mongoose.model('daily');

module.exports = (req, res) => {
  const errors = {};
  Daily.find()
    .sort({ date: -1 })
    .then((dailies) => {
      if (dailies.length === 0) {
        errors.nodailies = 'No dailies found';
        return res.status(404).json(errors);
      }
      const dailiesByTag = dailies.filter((daily) =>
        daily.tags.includes(req.params.tag)
      );
      return res.json(dailiesByTag);
    })
    .catch((err) => {
      errors.error = 'Error fetching dailies from database';
      res.status(500).json({ ...errors, ...err });
    });
};

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create User model
const DailySchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  body: String,
  tags: [{ type: String }],
  private: Boolean,
  stars: {
    type: String,
    default: 0
  }
});

module.exports = mongoose.model('daily', DailySchema);

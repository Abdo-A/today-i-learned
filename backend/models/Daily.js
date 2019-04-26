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
  hidden: {
    type: Boolean,
    default: false
  },
  stars: {
    type: Number,
    default: 0
  },
  imageUrls: [{ type: String }],
  comments: [
    {
      email: String,
      body: String,
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = mongoose.model('daily', DailySchema);

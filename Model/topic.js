const mongoose = require('mongoose');
const topicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  score: {
    type: Number,
    default: 0,
  },
});
const Topic = mongoose.model('Topic1', topicSchema);
module.exports = Topic;

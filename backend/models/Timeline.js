const mongoose = require("mongoose");

const timelineSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Timeline = mongoose.model("Timeline", timelineSchema);

module.exports = Timeline;

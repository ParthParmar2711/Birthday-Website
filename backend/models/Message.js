const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    content: { type: String, required: true },
    sender: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);

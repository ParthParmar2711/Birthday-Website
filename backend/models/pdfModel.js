const mongoose = require("mongoose");

const pdfSchema = new mongoose.Schema({
  name: { type: String, required: true },
  path: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PDF", pdfSchema);

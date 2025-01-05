const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const messageRoutes = require("./routes/messageRoutes");
const timelineRoutes = require("./routes/timeline");
const pdfRoutes = require("./routes/pdfRoutes");
const path = require("path");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", (req, res, next) => {
  console.log(`Requesting: ${req.url}`);
  next();
});
app.use("/uploads", express.static("uploads"));

app.use("/api/messages", messageRoutes);
app.use("/api/timeline", timelineRoutes);
app.use("/api/pdfs", pdfRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

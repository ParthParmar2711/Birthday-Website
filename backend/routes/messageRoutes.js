const express = require("express");
const {
  getMessages,
  createMessage,
} = require("../controllers/messagesController");
const router = express.Router();

router.route("/").get(getMessages).post(createMessage);

module.exports = router;

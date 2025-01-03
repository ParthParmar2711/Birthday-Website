const Message = require("../models/Message");

exports.getMessages = async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
};

exports.createMessage = async (req, res) => {
  const { content, sender } = req.body;
  const message = await Message.create({ content, sender });
  res.status(201).json(message);
};

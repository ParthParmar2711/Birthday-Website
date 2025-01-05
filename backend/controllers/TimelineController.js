const Timeline = require("../models/Timeline");

const getTimelineEvents = async (req, res) => {
  try {
    const timelines = await Timeline.find();
    res.json(timelines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addTimelineEvent = async (req, res) => {
  const { title, description, date } = req.body;
  const newTimeline = new Timeline({ title, description, date });

  try {
    const savedTimeline = await newTimeline.save();
    res.status(201).json(savedTimeline);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const updateTimelineEvent = async (req, res) => {
  const { title, description, date } = req.body;

  try {
    const updatedTimeline = await Timeline.findByIdAndUpdate(
      req.params.id,
      { title, description, date },
      { new: true }
    );
    res.json(updatedTimeline);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteTimelineEvent = async (req, res) => {
  try {
    await Timeline.findByIdAndDelete(req.params.id);
    res.json({ message: "Timeline event deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getTimelineEvents,
  addTimelineEvent,
  updateTimelineEvent,
  deleteTimelineEvent,
};

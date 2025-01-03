const express = require("express");
const router = express.Router();
const TimelineController = require("../controllers/TimelineController");

// Get all timeline events
router.get("/", TimelineController.getTimelineEvents);

// Add a new timeline event
router.post("/", TimelineController.addTimelineEvent);

// Edit a timeline event
router.put("/:id", TimelineController.updateTimelineEvent);

// Delete a timeline event
router.delete("/:id", TimelineController.deleteTimelineEvent);

module.exports = router;

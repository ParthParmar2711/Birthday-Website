const express = require("express");
const router = express.Router();
const TimelineController = require("../controllers/TimelineController");

router.get("/", TimelineController.getTimelineEvents);
router.post("/", TimelineController.addTimelineEvent);
router.put("/:id", TimelineController.updateTimelineEvent);
router.delete("/:id", TimelineController.deleteTimelineEvent);

module.exports = router;

const router = require("express").Router();

const { getAllEvents, getModelsforSpecificEvent } = require("./controller");

router.get("/", getAllEvents);

router.get("/:id/models", getModelsforSpecificEvent);

module.exports = router;

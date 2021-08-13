const router = require("express").Router();

const {
  getAllModels,
  getModelsByAgency,
  addAModel,
  updateModel,
  removeModel,
} = require("./controller");

router.get("/", getAllModels);

router.get("/:agency", getModelsByAgency);

router.post("/", addAModel);

router.patch("/:id", updateModel);

router.delete("/:id", removeModel);

module.exports = router;

const router = require("express").Router();

const {
  getAllModels,
  getModelsByAgency,
  addAModel,
  updateModel,
  removeModel,
  getModelOutfits,
} = require("./controller");

router.get("/", getAllModels);

router.get("/:agency", getModelsByAgency);

router.get("/:id/outfits", getModelOutfits);

router.post("/", addAModel);

router.patch("/:id", updateModel);

router.delete("/:id", removeModel);

module.exports = router;

const router = require("express").Router();

const {
  getAllDesigners,
  getById,
  addDesigner,
  updateDesigner,
  deleteDesigner,
} = require("./controller");

router.get("/", getAllDesigners);

router.get("/:id", getById);

router.post("/", addDesigner);

router.patch("/:id", updateDesigner);

router.delete("/:id", deleteDesigner);

module.exports = router;

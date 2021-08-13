const router = require("express").Router();

const {
  getAllGuests,
  getById,
  findPurchases,
  totalSpent,
} = require("./controller");

router.get("/", getAllGuests);

router.get("/:id", getById);

router.get("/:id/purchases", findPurchases);

router.get("/:id/total-spent", totalSpent);

module.exports = router;

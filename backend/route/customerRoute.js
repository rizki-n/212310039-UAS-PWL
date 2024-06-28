const express = require("express");
const router = express.Router();
const {
  getCustomers,
  getCustomerById,
  postCustomers,
  updateCustomer,
  deleteCustomer,
  getOrderStats,
  getDailyOrderStats
} = require("../controllers/customerController.js");
const customers = require("../models/customerSchema");

router.get("/fetch-all", getCustomers);
router.get("/fetch/:id", getCustomerById);
router.post("/create", postCustomers);
router.put("/update/:id", updateCustomer);
router.delete("/delete/:id", deleteCustomer);
// router.get("/order-stats", getOrderStats);
router.get("/order-stats", getDailyOrderStats);

module.exports = router;

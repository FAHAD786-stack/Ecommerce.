const express = require("express");
const Order = require("../models/Order");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

/* =====================
   CREATE ORDER
===================== */
router.post("/", protect, async (req, res) => {
  try {
    const { products, totalPrice } = req.body;

    const order = await Order.create({
      user: req.user._id,
      products,
      totalPrice
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* =====================
   USER ORDERS
===================== */
router.get("/myorders", protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate("products.product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* =====================
   ALL ORDERS (ADMIN)
===================== */
router.get("/", protect, admin, async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .populate("products.product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

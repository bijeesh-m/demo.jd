const express = require("express");
const router = express.Router();
const orderController = require("../controller/order.controller");
const authenticate = require("../middlewares/auth.middleware");

router.put("/orders/:id", orderController.updateStatus);
router.post("/", authenticate, orderController.createOrder);
router.get("/", orderController.getOrders,);
router.get("/order-stats",orderController.getOrderStats)

module.exports = router;

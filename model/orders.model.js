const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        orderId: {
            type: Number,
            default: Date.now(),
        },
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
        item: {
            type: String,
        },
        totalAmount: {
            type: Number,
        },
        orderDate: {
            type: Date,
            default: Date.now(),
        },
        status: {
            type: String,
            default: "Pending",
        },
    },
    { timestamps: true }
);

const orderModel = mongoose.model("order", orderSchema);
module.exports = orderModel;

const Order = require("../model/orders.model");

module.exports.updateStatus = async (req, res) => {
    try {
        const id = req.params.id;
        const status = req.body.status;
        // const order = await Order.findOne({ orderId: id });
        // order.status = status;
        // await order.save();

        const uOrder = await Order.findOneAndUpdate(
            { orderId: id },
            {
                $set: {
                    status: status,
                    totalAmount: 1000,
                },
            },
            { new: true }
        );
        res.send(uOrder);
    } catch (error) {
        console.log(error);
    }
};

module.exports.createOrder = async (req, res) => {
    console.log(req.user);

    const { item, totalAmount } = req.body;

    const order = await Order.create({
        customerId: req.user,
        item: item,
        totalAmount: totalAmount,
    });

    res.status(200).json({ message: "Order placed!", order });
};
module.exports.getOrders = async (req, res) => {
    const orders = await Order.find().populate("customerId");

    res.status(200).json({ message: "Orders fetched successfully!", orders });
};
module.exports.getOrderStats = async (req, res) => {
    const orderStat = await Order.aggregate([
        {
            $group: {
                _id: "$customerId",
                orderTotal: { $sum: "$totalAmount" },
                averageOrder: { $avg: { $sum: "$totalAmount" } },
            },
        },
        { $limit: 1 },
    ]);
    res.send(orderStat);
};

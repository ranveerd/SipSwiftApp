const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://ranveerdeshmukh844:Ranveer884@sipswiftdb.nevf2oq.mongodb.net/SipSwiftDB?retryWrites=true&w=majority&appName=SipSwiftDB");


// ✅ Define User & Order Schema
const userSchema = new mongoose.Schema({ email: String, password: String });
const orderSchema = new mongoose.Schema({
    userEmail: String,
    drinks: [{ name: String, quantity: Number }],
    totalPrice: Number,
    status: { type: String, default: "Processing" }
});

const User = mongoose.model("User", userSchema);
const Order = mongoose.model("Order", orderSchema);

// ✅ Place Order Route
app.post("/order", async (req, res) => {
    const { userEmail, drinks } = req.body;
    const totalPrice = drinks.reduce((sum, drink) => sum + (drink.price * drink.quantity), 0);

    const newOrder = new Order({ userEmail, drinks, totalPrice });
    await newOrder.save();
    res.json({ message: "Order placed successfully!", orderId: newOrder._id });
});

// ✅ Get User Orders
app.get("/orders/:email", async (req, res) => {
    const orders = await Order.find({ userEmail: req.params.email });
    res.json(orders);
});

app.listen(4000, () => console.log("Server running on port 4000"));

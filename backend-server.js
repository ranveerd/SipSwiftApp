const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const app = express();
app.use(cors());
app.use(express.json());

const users = []; // Temporary storage
const drinks = [
    { name: "Whiskey", price: "₹500" },
    { name: "Beer", price: "₹200" },
    { name: "Vodka", price: "₹600" }
];

// ✅ Add GET `/drinks` route
app.get("/drinks", (req, res) => {
    res.json(drinks);
});

app.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ email, password: hashedPassword });
    res.json({ message: "User registered successfully!" });
});

app.listen(4000, () => console.log("Server running on port 4000"));

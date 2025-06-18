const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/drinks", (req, res) => {
    res.json([
        { name: "Whiskey", price: "₹500" },
        { name: "Beer", price: "₹200" },
        { name: "Vodka", price: "₹600" },
        { name: "Rum", price: "₹450" }
    ]);
});

app.listen(4000, () => console.log("Server running on port 4000"));

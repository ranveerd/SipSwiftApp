const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/drinks", (req, res) => {
    res.json([
        { name: "Whiskey", price: "₹500" },
        { name: "Beer", price: "₹200" }
    ]);
});

app.listen(4000, () => console.log("Server running on port 4000"));

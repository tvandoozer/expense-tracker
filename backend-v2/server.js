// backend/server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const expenseRoutes = require("./routes/expenseRoutes");

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json()); // For parsing application/json

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Expense Tracker API");
});

app.use("/api/users", userRoutes);

app.use("/api/expenses", expenseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

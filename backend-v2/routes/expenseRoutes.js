const express = require("express");
const { protect } = require("../middleware/authMiddleware"); // Protect middleware if needed
const expenseController = require("../controllers/expenseController");
const router = express.Router();

// Add an expense
router.post("/", protect, expenseController.addExpense);

// Get all expenses for the logged-in user
router.get("/", protect, expenseController.getExpenses);

// Update an expense
router.put("/:id", protect, expenseController.updateExpense);

// Delete an expense
router.delete("/:id", protect, expenseController.deleteExpense);

module.exports = router;

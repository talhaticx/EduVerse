const express = require("express");
const router = express.Router();
const Assignment = require("../models/assignmentSchema");

// Create a new assignment
router.post("/create", async (req, res) => {
  try {
    // Parse request data and create a new assignment
    const { title, description, deadline, selectedClass } = req.body;
    const newAssignment = new Assignment({
      title,
      description,
      deadline,
      selectedClass,
    });
    await newAssignment.save();

    res.status(201).json({ message: "Assignment created successfully" });
  } catch (error) {
    console.error("Error creating assignment:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the assignment" });
  }
});

// Get all assignments
router.get("/", async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.status(200).json(assignments);
  } catch (error) {
    console.error("Error getting assignments:", error);
    res
      .status(500)
      .json({ error: "An error occurred while getting assignments" });
  }
});

// Delete an assignment by ID
router.delete("/:id", async (req, res) => {
  const assignmentId = req.params.id;
  try {
    const deletedAssignment = await Assignment.findByIdAndRemove(assignmentId);
    if (!deletedAssignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }
    res.status(200).json({ message: "Assignment deleted successfully" });
  } catch (error) {
    console.error("Error deleting assignment:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the assignment" });
  }
});

module.exports = router;

const mongoose = require('mongoose');

// Define the schema for assignments
const assignmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    selectedClass: {
        type: String,
        required: true,
    },
});

// Create a model based on the schema
const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;

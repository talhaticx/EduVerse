const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS for all routes

// Connect to MongoDB (replace 'your_mongodb_uri' with your actual MongoDB URI)
mongoose.connect('mongodb://127.0.0.1:27017/EduVerse', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// importing routes
const assignmentRoutes = require('./routes/assignmentRoutes');

// setting routes
app.use('/assignment', assignmentRoutes);

// Start the server
const PORT = 1400;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
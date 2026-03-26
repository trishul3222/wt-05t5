const express = require('express'); // Import Express
const app = express(); // Create app

const router = require('./router'); // Import router

app.use('/api', router); // Use router

// Start server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
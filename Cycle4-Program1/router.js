const express = require('express');
const route = express.Router(); // Create router

// GET request
route.get('/', (req, res) => {
    res.status(200);
    res.send('Hello, World! In GET');
});

// POST request
route.post('/', (req, res) => {
    res.status(201);
    res.send('Hello, World! In POST');
});

module.exports = route; // Export router
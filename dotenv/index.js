const express = require('express');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT;

// Home Route
app.get('/', (req, res) => {
    res.send('Environment Variables Demo!');
});

// Config Route
app.get('/config', (req, res) => {
    const dbHost = process.env.DB_HOST;
    const dbUser = process.env.DB_USER;
    const apiKey = process.env.API_KEY;

    res.json({
        dbHost,
        dbUser,
        apiKey
    });
});

// 404 Handler
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

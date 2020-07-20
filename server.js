const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

connectDB();

// built-in middleware, parsing incoming request w/ JSON payloads
app.use(express.json({ extended: false }));

// API Routes
app.use('/api/recipes', require('./routes/api/recipes'));

// Use Env variable or 5000 for default
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// MySQL database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'your_password', // Replace with the password you set
    database: 'sfr_aromatics', // Replace with your database name
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Routes
app.get('/', (req, res) => {
    res.send('Hello, your app is working!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// About page
app.get('/about', (req, res) => {
  res.render('about'); // Render about.ejs view
});
// Serve the Coming Soon page
app.get('/comingsoon', (req, res) => {
  res.render('comingsoon');
});

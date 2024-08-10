const express = require('express');
const app = express();
const port = 3000;

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// About route
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

// Contact route
app.get('/contact', (req, res) => {
  res.send('This is the Contact Page.');
});

// Start the server
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}/`);
});

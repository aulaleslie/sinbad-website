const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, Sinbad! Welcome to your first Node.js website.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

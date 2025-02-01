const express = require('express');
const app = express();
app.use(express.json());

// Sample in-memory data store (replace with database in a real application)
let users = [];

app.post('/users', (req, res) => {
  const newUser = req.body;

  // Input validation
  if (!newUser || !newUser.name || !newUser.email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  // Check for duplicate email
  const duplicateUser = users.find((user) => user.email === newUser.email);
  if (duplicateUser) {
    return res.status(400).json({ error: 'Email already exists' });
  }

  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(3000, () => console.log('Server listening on port 3000'));
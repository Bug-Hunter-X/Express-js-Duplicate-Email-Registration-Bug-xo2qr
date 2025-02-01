const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  // Assume 'users' is an array to store user data
  let users = [];

  const newUser = req.body; // Get new user data from the request body
  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  // Check for duplicate email
  const duplicateUser = users.find(user => user.email === newUser.email);
  if (duplicateUser) {
    return res.status(400).json({ error: 'Email already exists' });
  }
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(3000, () => console.log('Server is listening on port 3000'));
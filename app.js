const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Simple addition endpoint with intentional issues
app.post('/add', (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  
  // Missing input validation
  
  const result = num1 + num2;
  
  res.json({ result });
});

// Insecure endpoint with potential injection
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  
  // Simulating a database query with potential SQL injection
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  
  // Just for demo purposes
  res.json({ 
    query,
    user: {
      id: userId,
      name: 'Test User',
      email: 'test@example.com'
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
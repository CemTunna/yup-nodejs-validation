const express = require('express');
const app = express();
app.use(express.json());
const validation = require('./middleware/validationMiddleware');
const userSchema = require('./validations/userValidation');

app.post('/user', validation(userSchema), (req, res) => {
  res.json(req.body);
});

app.listen('3001', () => {
  console.log('server running');
});

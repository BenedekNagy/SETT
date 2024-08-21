const express = require('express');
const userRoutes = require('./routers/userRoutes');
const app = express();

const port = '3000';

app.use('/', userRoutes);

app.listen(port, async () => {
  console.log(`Connected to server port: ${port}`);
})




// pingpong.js
const express = require('express');
const app = express();

const port = process.env.PORT || 3003;

app.get('/ping', (req, res) => {
  res.send('Response from express server: PONG');
});

app.listen(port, () => {
  console.log(`Ping-pong app listening on port ${port}`);
});
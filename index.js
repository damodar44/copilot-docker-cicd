//Simple app whcih listen on port 3000 and responds with "Hello World"
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Docker CI/CD pipeline');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
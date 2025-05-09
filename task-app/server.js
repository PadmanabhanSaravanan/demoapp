const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;
const distPath = path.join(__dirname, 'dist/task-app');

app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'browser/index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Angular app running on port ${port}`);
});

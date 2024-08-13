const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('dist')); // Serve static files from the dist directory

app.use(require('./routes/htmlRoutes'));

app.listen(PORT, () =>
  console.log(`App listening on port ${PORT}!`)
);

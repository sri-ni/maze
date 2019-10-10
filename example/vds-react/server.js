/* eslint-disable no-console */

const express = require('express');
const compression = require('compression');
const fallback = require('express-history-api-fallback');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;
const ROOT = path.join(__dirname, 'build');

app.use(compression());
app.use(express.static(ROOT));
// send all requests to index.html so browserHistory in React Router works
app.use(fallback('index.html', { root: ROOT }));

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});

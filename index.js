const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use('/', routes);

const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

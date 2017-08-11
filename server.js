const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./mongodb/db'); // 连接到mongodb
const api = require('./routers/api');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'client/build')));


app.use('/api', api);

app.listen(3001, function() {
  console.log('sever running on port 3001');
});

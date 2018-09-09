const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();


var db = require('./db/models');
var routes = require('./api-routes/index');

app.use(express.static(path.join(__dirname, 'build')));

app.post('/dashboard', function (req, res) {
  console.log("Post has been retrieved!");
  console.log(req.body.headerText);
});

app.get('/dashboard', function (req, res) {
  res.render('./src/components/Dashboard/Dashboard');
});

app.listen(process.env.PORT || 8080);

routes(app, db)
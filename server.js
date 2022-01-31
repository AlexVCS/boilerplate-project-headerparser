require('dotenv').config();
var express = require('express');
var app = express(); 
var cors = require('cors');

const port = 3001;

app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/whoami", headerParser = (req, res, next) => {
  JSON.stringify(req.headers),
  next()
  }, function (req, res) {
    res.json({
      "ipaddress": req.header('host'),
      "language": req.header('accept-language'),
      "software": req.header('user-agent')
    })
  }
)

var listener = app.listen(port, function () {
  console.log(`Your app is listening on port ${port}`);
});
const PORT = process.env.PORT || 3000;
require('dotenv').config();
var express = require('express');
var app = express(); 
var cors = require('cors');

app.enable('trust proxy')
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


app.get("/api/whoami", function (req, res) {
    res.json({
      "ipaddress": req.ip,
      "language": req.header('accept-language'),
      "software": req.header('user-agent')
    })
  })

app.listen(PORT, function () {
  console.log(`Your app is listening on port ${PORT}`);
});
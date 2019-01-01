const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// This is 1st page we get 
app.get('/', function (req, res) {
  res.send('Page under construction.');
});

/* Single page api 
app.post('/login', function (req, res) { 
  // This is hardcore value we will fetch this value form db 
var email = 'shashwat.kumar@ksolves.com';
var password = '123456';
console.log(req.body)
console.log(req.body)

  if (!req.body.email || !req.body.password) {
    res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
  }
  if (req.body.email == email && req.body.password == password) {
    res.json({ success: true, msg: 'login successfully.' });
  } else {
    res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
  }
});*/
app.listen(3000);

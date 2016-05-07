var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var config      = require('./config');
var morgan      = require('morgan');
var twitter      = require('./twitter');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'jade');
app.use(morgan('dev'));

app.get('/', function(req, res){
  
  var filter = ['spotify', 'itunes'];
  twitter.tweets(14, filter, function(allTweets){
    res.json(allTweets);
  }); 
});

app.get('/login', function(req, res){
  res.json({ message: 'Logging in'});

});

app.get('/setup', function(req, res){
  res.json({ message: 'setting up here'});
});

app.get('/process', function(req, res){
  res.json({ message: 'processed'});
});

app.get('/results', function(req, res){
  res.json({ message: 'showing results' });
});


app.listen(8080);
console.log('corriendo en el 8080');

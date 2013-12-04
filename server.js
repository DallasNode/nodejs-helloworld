var express = require('express');
var _ = require('underscore');
var app = express();
var server = require('http').createServer(app);
var config = require('./lib/config');

app.set('view engine', 'ejs');
app.set('view options', { layout: false });
app.use('/public', express.static('public'));
app.use('/public', express.static('bower_components'));

app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: 'sooo secret' }));

app.use(app.router);

app.get('/', function (req, res) {
  res.render('index', { message: "hi" });
});

server.listen(process.env.PORT || config.port);

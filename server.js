var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var twitData = require('./twitData');
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

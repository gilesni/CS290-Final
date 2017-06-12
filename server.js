var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var twitData = require('./groups.json');
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res) {
    res.status(404)
    res.render('404Page')
});

var port = process.env.PORT || 3000
app.listen(port, function () {
    console.log("Server listening on port ", port);
});

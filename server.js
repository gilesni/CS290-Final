var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var twitData = require('./groups.json');
var sampleData = require('./sample.json');
var groupData = require('./groups.json');
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res, next) {
    var tempArgs = {
        Epost: sampleData
    }
    res.render('mainPage', tempArgs)
});

app.get('*', function (req, res) {
    res.status(404)
    res.render('404Page')
});

app.get('/groups/:group', function (req, res, next) {
	console.log("== url params for request:", req.params);
	var group = req.params.group;
	var grupData = groupData[group];
	if (grupData) {
		var templateArgs = {
			name: grupData.name,
			photo: grupData.photo,
			posts: grupData.posts
		}
		res.render('???', templateArgs);
	} else {
		next();
	}
});

var port = process.env.PORT || 3000
app.listen(port, function () {
    console.log("Server listening on port", port);
});

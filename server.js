var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var groupPosts = require('./groupPosts.json');
var groupData = require('./groupData.json');
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res, next) {
    next();
})

/
app.get('/:group', function (req, res, next) {
    console.log("== url params for request:", req.params);
    var group = req.params.group;
    var postData = groupPosts[group];
    if (postData) {
        var templateArgs = {
            groupPost: postData.posts,
            groupInfo: groupData,
            title: "CS 290 Final - " + group
        };
        res.render('mainPage', templateArgs);
    } else {
        next();
    }
});

app.get('/:groups/newMessage', function (req, res, next) {
    var group = groupPosts[req.params.groups];
    if (group) {
        if (req.body) {

            var newpost = {
                url: req.body.url,
                caption: req.body.text
            };
        };
        group.posts = groups.posts || [];

        group.posts.push(newpost);
        fs.writeFile('groupPosts.json', JSON.stringify(groupPosts), function (err) {
            if (err) {
                res.status(500).send("Unable to save post to \"database\".");
            } else {
                res.status(200).send();
            }
        });

    } else {
        res.status(400).send("Person post must have a URL.");
    }

});


app.get('*', function (req, res) {
    res.status(404).render('404Page');
});

var port = process.env.PORT || 3000
app.listen(port, function () {
    console.log("Server listening on port", port);
});

// load the things we need
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use("/public", express.static('./public/'));//Can access a static dierctory name public
// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// album page
app.get('/albums', function(req, res) {
  //console.log(req.query.id);
    res.render('pages/albums', {id : req.query.id});
});

app.listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

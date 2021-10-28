// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use("/public", express.static('./public/'));//Can access a statid dierctory na me public
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

app.listen(process.env.port || 8080); //Location of the website on the dev server
console.log('8080 is the magic port');

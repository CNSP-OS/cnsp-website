// server.js
// load the things we need
var express = require('express');
var app = express();
var marked = require("marked");
var fs = require('fs')
var md = function (filename) {
    var path = __dirname +"/views/md/" + filename;
    var include = fs.readFileSync (path, 'utf8');
    var html = marked (include);
    return html;
  };
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3332'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
	console.log("connection succeeded"); 
}) 
app.post('REDACTED', function(req,res){ 
// Redacted
db.collection('REDACTED').insertOne(data,function(err, collection){ 
		if (err) throw err; 
		console.log("Record inserted Successfully"); 
			
	}); 
		
	return res.redirect('REDACTED'); 
})
app.post('REDACTED', function(req,res){ 
// Redacted
db.collection('REDACTED').insertOne(data,function(err, collection){ 
		if (err) throw err; 
		console.log("Record inserted Successfully"); 
			
	}); 
		
	return res.redirect('REDACTED'); 
}) 
app.post('REDACTED', function(req,res){ 
// Redacted
db.collection('REDACTED').insertOne(data,function(err, collection){ 
		if (err) throw err; 
		console.log("Record inserted Successfully"); 
			
	}); 
		
	return res.redirect('REDACTED'); 
})
// set the view engine to ejs
app.set('view engine', 'ejs');
app.locals.mdpath = null;
app.locals.title = null;
app.locals.keywords = null;
app.locals.splashimage = null;
app.locals.description = null;
app.locals.headerclass = null;
app.locals.pagetitle = null;
app.locals.titlepic = null;
app.locals.scripts = null;
app.use(express.static("assets"));
// index page 
app.get('/', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/index');
});
app.get('/about/about_cnsp', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/about/about_cnsp');
});
app.get('/about/board', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/about/board_members');
});
app.get('/about/brand_resources', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/about/brand_resources');
});
app.get('/about/finance', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/about/finance');
});
app.get('/about/staff', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/about/staff_team');
});
app.get('/chapters', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/chapters/index', {"md": md});
});
app.get('/chapters/new', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/chapters/new-chapter');
});
app.get('/chapters/asia', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/chapters/asia/index', {"md": md});
});
app.get('/chapters/asia/india', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/chapters/asia/india/index', {"md": md});
});
app.get('/chapters/asia/india/delhi', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/chapters/asia/india/delhi/index', {"md": md});
});
app.get('/chapters/*', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/chapters/chapter404', {"md": md});
});
app.get('/contact', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/contact/contact_us');
});
app.get('/faq', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/contact/faq');
});
app.get('/support_desk', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/contact/support_desk');
});
app.get('/bylaws', function(req, res) {
    res.render('pages/legal/bylaws');
});
app.get('/privacypolicy', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/legal/privacypolicy');
});
app.get('/projects', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/projects/index');
});
app.get('/projects/new', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/projects/new-project');
});
app.get('/projects/awareness', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/projects/awareness/index');
});
app.get('/projects/code', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/projects/code/index');
});
app.get('/projects/documentation', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/projects/documentation/index');
});
app.get('/projects/research', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/projects/research/index');
});
app.get('/donate', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/donate');
});
app.get('/membership', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/membership');
});
app.get('/styling', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/tutorial/styling', {"md": md});
});
app.get('/content', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/tutorial/guidelines', {"md": md});
});
app.get('/search-results-page', function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('pages/search-results-page');
});

app.use(function(req, res) {
    res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.locals.four = req.url;
    res.status(404).render('pages/status/404');
  });
  
  // Handle 500
  app.use(function(err, req, res, next) {
      res.locals.url = req.protocol + '://' + req.get('host') + req.originalUrl;
      res.locals.rror = err
    res.status(500).render('pages/status/500');
  });

app.listen(80);
console.log('BITCH');

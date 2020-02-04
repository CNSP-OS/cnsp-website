// server.js
// load the things we need
var express = require('express');
var app = express();
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

// use res.render to load up an ejs view file
app.use(express.static("assets"));
// index page 
app.get('/', function(req, res) {
    res.locals.title = "CNSP - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/index');
});
app.get('/about/about_cnsp', function(req, res) {
    res.locals.title = "About CNSP - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/about/about_cnsp');
});
app.get('/about/board', function(req, res) {
    res.locals.title = "Board - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/about/board_members');
});
app.get('/about/brand_resources', function(req, res) {
    res.locals.title = "Brand Resources - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/about/brand_resources');
});
app.get('/about/finance', function(req, res) {
    res.locals.title = "Finance - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/about/finance');
});
app.get('/about/staff', function(req, res) {
    res.locals.title = "Staff - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/about/staff_team');
});
app.get('/chapters', function(req, res) {
    res.locals.title = "Chapters - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/chapters/index');
});
app.get('/chapters/new', function(req, res) {
    res.locals.title = "New Chapter - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/chapters/new-chapter');
});
app.get('/chapters/asia', function(req, res) {
    res.locals.title = "Asia - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/chapters/asia/index');
});
app.get('/chapters/asia/india', function(req, res) {
    res.locals.title = "India - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/chapters/asia/india/index');
});
app.get('/chapters/asia/india/delhi', function(req, res) {
    res.locals.title = "Delhi - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/chapters/asia/india/delhi/index');
});
app.get('/chapters/*', function(req, res) {
    res.locals.title = "Not Found - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/chapters/chapter404');
});
app.get('/contact', function(req, res) {
    res.locals.title = "Contact Us - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/contact/contact_us');
});
app.get('/faq', function(req, res) {
    res.locals.title = "FAQ - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/contact/faq');
});
app.get('/support_desk', function(req, res) {
    res.locals.title = "Support Desk - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/contact/support_desk');
});
app.get('/bylaws', function(req, res) {
    res.locals.title = "ByLaws - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/legal/bylaws');
});
app.get('/privacypolicy', function(req, res) {
    res.locals.title = "Privacy - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/legal/privacypolicy');
});
app.get('/projects', function(req, res) {
    res.locals.title = "Projects - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/projects/index');
});
app.get('/projects/new', function(req, res) {
    res.locals.title = "New Project - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/projects/new-project');
});
app.get('/projects/awareness', function(req, res) {
    res.locals.title = "Awareness Projects - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/projects/awareness/index');
});
app.get('/projects/code', function(req, res) {
    res.locals.title = "Development Projects - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/projects/code/index');
});
app.get('/projects/documentation', function(req, res) {
    res.locals.title = "Documentation Projects - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/projects/documentation/index');
});
app.get('/projects/research', function(req, res) {
    res.locals.title = "Research Projects - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/projects/research/index');
});
app.get('/donate', function(req, res) {
    res.locals.title = "Donate - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/donate');
});
app.get('/membership', function(req, res) {
    res.locals.title = "Membership - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/membership');
});
app.get('/search-results-page', function(req, res) {
    res.locals.title = "Search - Clear Net Security Project"; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.render('pages/search-results-page');
});

app.use(function(req, res) {
    res.locals.title = null;
    res.locals.description = null; 
    res.locals.keywords = null;
    res.locals.url = req.url;
    res.status(404).render('pages/status/404');
  });
  
  // Handle 500
  app.use(function(err, req, res, next) {
      console.log(err)
    res.locals.title = null; 
    res.locals.description = null; 
    res.locals.keywords = null;
    res.status(500).render('pages/status/500');
  });

app.listen(80);
console.log('BITCH');

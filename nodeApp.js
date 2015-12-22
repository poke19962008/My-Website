var express = require('express');
var fs = require('fs');

var content = require('./data/content.js').getContent;
var skills = require('./data/content.js').getSkills;

var app = express();

app.use(express.static(__dirname + "/public"));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/getContent', function(req, res){
  res.render('template.jade', {content: content});
});

app.get('/getSkills', function(req, res){
  res.render('skills_template.jade', { skills: skills });
});

app.get('/*', function (req, res){
	res.redirect('/404');
});

app.listen(3500, function(){
  console.log('Listening on port 3500');

});

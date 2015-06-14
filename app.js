var express = require("./node_modules/express");
var app = express();
var path = require("path");
var http = require("http");
var https = require("https");

    app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });
  
	app.use('/static', express.static('public'));
  
  
    app.get('/',function(req,res,next){
		res.send('website is under construction');
		});
		
	app.post('/create/movies',function(req,res,next){
		
		});	
	app.get('/get/movies',function(req,res,next){
	   
	   });
	   
	   app.put('update/movies',function(req,res,next){
		   
		   });
		   
	app.delete('delete/movies',function(req,res,next){
	
	});
	


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);

});

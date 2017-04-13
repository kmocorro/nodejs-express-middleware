/**
 * Dealing with routing, static and middleware
 * using express js
 * 
 * @ node.js cmd:
 * >npm init
 * >npm install express --save
 * 
 */

//look for express @ node module
var express = require('express');
//declare app as express function
var app = express();
//look for system files
var fs = require('fs');
//declare for port value
var port = process.env.PORT || 3000;


//use property =  middleware for this it's style.css
app.use('/assets', express.static(__dirname + '/public'));
//get property with callback function
app.get('/', function(req, res){
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
});
//another get
app.get('/:id', function(req, res){
    fs.createReadStream(__dirname + '/404.htm').pipe(res);
});

//event emitter, listen
app.listen(port);



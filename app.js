/////////// Foundation of Application ///////////

// require the dependencies you want to use
var express = require('express'), // require express so that we can utilize it as framework
    http = require('http'); // we will use this node module to create a server

var app = express(); // our app is defined as the express module

http.createServer(app).listen(3000); // create your first node server!
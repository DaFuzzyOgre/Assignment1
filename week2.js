var path = require("path");
var express = require("express");
var app = express();

var HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req,res){
    res.send("<a href='/about'>[About]</a><a href='/project'>[Project]</a><br />Welcome Ogre, Inc.<br /><footer>&copy;Ogre, Inc</footer>");
  });

// setup another route to listen on /about
app.get("/about", function(req,res){
    res.sendFile(path.join(__dirname,"/views/about.html"));
  });


app.get("/project", function(req,res){
  res.sendFile(path.join(__dirname,"/views/project.html"));
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);

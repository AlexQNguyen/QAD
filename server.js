var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
//Allows for JSON data to be read and passed back and forth
app.use(bodyParser.json({ extended: true }));
app.use(express.static(__dirname + "/public/dist"));


//////DataBase Stuff///
require('./server/config/mongoose.js');

///routes ///

var routes_setter = require('./server/config/routes.js');

routes_setter(app);

///server///
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

// SERVER-SIDE JAVASCRIPT
//currently not hooked up yet

// require express and other modules
var express = require('express'),
    app = express();
    bodyParser = require('body-parser');
    // _ = require("underscore");

// serve js and css files from public folder
app.use(express.static(__dirname + '/public'));

// configure bodyParser (for handling data)
app.use(bodyParser.urlencoded({extended: true}));


// ROUTES

// SERVING HTML FILE
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});





// set server to localhost:3000
app.listen(3000, function() {
  console.log('server started on localhost:3000');
});
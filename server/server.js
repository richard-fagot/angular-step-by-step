var express = require('express');
var app = express();
var fs = require("fs");

// Add headers for cross domain (avoid 'No Access-Control-Allow-Origin' issue)
// http://stackoverflow.com/questions/18310394/no-access-control-allow-origin-node-apache-port-issue
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/auth/:email', function (req, res) {
   // First read existing users.
   console.log(req.params.email);
   var auth = {"authenticated": false};

   if(req.params.email === "toto@ici.com") {
    auth.authenticated = true;
   }
   res.end(JSON.stringify(auth));
   /*fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
   });*/
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})
/* 
 * Server JS
 */

// import all our dependencies
var express  = require('express');
var mongoose = require('mongoose');
var app      = express();
var server   = require('http').Server(app);
var io       = require('socket.io')(server);


// tell express where to serve static files from
app.use( express.static( __dirname + '/public' ) );


// allow Cross Origin Resource Sharing (CORS)
app.all( '*', function( request, response, next ) {
  	response.header("Access-Control-Allow-Origin", "*");
  	response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  	response.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  	if ( request.method == 'OPTIONS' ) {
		request.status(200).end();
  	} else {
    	next();
  	}
});


/*======================ROUTES=========================*/

// route for our index file
app.get( '/', function(request, response) {
  // send the index.html in our public directory
  response.sendfile( 'index.html' );
} );


/*====================END ROUTES=======================*/









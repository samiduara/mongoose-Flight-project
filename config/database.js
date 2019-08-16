var mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost:/27017/flight',
     {useNewUrlParser: true, useCreateIndex: true}
 );
 var logger = require('morgan');
 
 // connect to the database with Mongoose
 require('./config/database');

 var mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/flights',
 	{useNewUrlParser: true, useCreateIndex: true});
 
 // shortcut to mongoose.connection object
 var db = mongoose.connection;
 
 db.on('connected', function() {
 	console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
 });
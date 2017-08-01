const mongoose = require( 'mongoose' );
mongoose.Promise = global.Promise;

mongoose.connect( 'mongodb://localhost/node-todo', {
  useMongoClient: true,
}, function( err ) {
  if ( err ) {
    console.log( 'Failed connecting to MongoDB!' );
  } else {
    console.log( 'You have connected to Mongo!' );
  }
} );

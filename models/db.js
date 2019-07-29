const mongoose = require( 'mongoose' );
mongoose.connect('mongodb://localhost/lib');

var db = mongoose.connection;

//CONNECTION EVENT
//When successfully connected
db.on('connected',function(){
    console.log('mongoose default connection open to');
    
});

//if connection throws an error
db.on('error',function(err){
    console.log('mongoose default connection error:'+err);
    
});

//when connection is disconnected
db.on('disconnected',function(){
    console.log('mongoose default connection disconnected');
    
});

//If the node process end ,close the mongoose connection
process.on('SIGINT',function(){
    db.close(function() {
        console.log('mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});
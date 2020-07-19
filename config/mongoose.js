const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/blogDB");

const db = mongoose.connection;

db.on('error',console.error.bind("error creating db"));

db.once('open',function(err){
    if(err){
        console.log('err opening db');
        return;
    }
    console.log("database setup succesful");
});

module.exports = db;
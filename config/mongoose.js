const mongoose = require('mongoose');
const {MONGOURI} =require('./keys')
mongoose.connect(MONGOURI);
//mongodb+srv://Ashish:u0Vz5gqJAg132u1P@cluster0.vhlf5.mongodb.net/Cluster0?retryWrites=true&w=majority
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;
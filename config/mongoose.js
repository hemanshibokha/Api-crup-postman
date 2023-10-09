const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/Api');
const database = mongoose.connection;
database.on('connected',(error)=>{
    if(error){
        console.log(error);
        return false;
    }
    console.log("Database Connected");
})
module.exports = database;
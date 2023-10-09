const mongoose = require('mongoose');
const tableSchema =  mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
})
const record = mongoose.model('user',tableSchema);
module.exports = record;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Business = new Schema({
    person_name : {
        required : true,
        type : String
    },
    company_name : {
        required : true,
        type : String
    },
    phone : {
        required : true,
        type : Number
    }
}, {
    collection : 'business'
})

module.exports = mongoose.model('business' , Business);


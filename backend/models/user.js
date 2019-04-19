var mongoose = require('mongoose');

var User = mongoose.model('User',{
    username :{
        type : String
    },
    password : {
        type : String
    }
},"User");

module.exports = {User};
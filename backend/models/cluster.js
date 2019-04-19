var mongoose = require('mongoose');

var Cluster = mongoose.model('Cluster',{
    clustername :{
        type : String
    },
    installeddate : {
        type : String
    },
    status : {
        type : String
    }
},"Cluster");

module.exports = {Cluster};
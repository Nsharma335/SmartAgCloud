var mongoose = require('mongoose');

var Cluster = mongoose.model('Cluster',{
    cluster_name :{
        type : String
    },
    created_date : {
        type : String
    },
    status : {
        type : String
    },
    field_type:{
        type: String
    },
    user_email:{
        type: String
    }

},"Cluster");

module.exports = {Cluster};
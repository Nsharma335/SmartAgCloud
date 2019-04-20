'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var port = 8080;
var app = express();
var cookieParser = require('cookie-parser');
var { User } = require('./models/user');
var { Cluster } = require('./models/cluster')
var { Node } = require('./models/node')
var { mongoose } = require('./db/mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

//require('./app/routes')(app);
// app.use(passport.initialize());
// app.use(passport.session());
// // Bring in defined Passport Strategy
// require('./passport')(passport);
// var requireAuth = passport.authenticate('jwt', { session: false });

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.post('/login', function (req, res) {
    var user = req.body.email;
    var password = req.body.password;
    console.log("email:", user + " password:", password);
    User.findOne({email: user}, function(err, result) {
        if (err) { /* handle err */ 
        console.log("error fetching data")
        res.status(400).json({
            success: false,
            message: 'error fetching data'

        });
        }
        if (result) {
            // we have a result
            console.log("found result")
            res.status(200).json({ success: true, rows: result });
        } else {
            // we don't
            //console.log("no results found")
            res.status(404).json({
                success: false,
                message: 'Cannot fetch details.'
            });
        }
    })
})
app.get('/getFarmerList', function (req, res) {
    console.log("Get Farmers list  " );
    User.find({
        role: 'Farmer'
    }  //success callback of finduser
    ,function (err, rows) {
                    if (err) {
                        console.log("failure callback 1")
                        res.status(401).json({
                            message: 'failed to fetch'
                        });
                    }
                    if (rows.length > 0) {
                        console.log("rows generated",rows.length)
                        console.log("rows data",rows)
                        res.status(200).json({
                            data:rows,
                            message: 'data fetched'
                        });
                    }
                    else {
                        console.log("failure callback 2")
                        res.status(400).json({
        
                            message: 'db access error'
                        });
                    }
                  
                });
});

app.get('/getClusterList', function (req, res) {
    console.log("Get Clusters list  " );
    Cluster.find({
        user_email: 'abhishek@gmail.com' 
        //user_email: 'based on selected farmer from getFarmerList (previous page)' 
        //  Here we wil pick the select cluster_id,cluster_name, location, status for a particular farmer
     }  //success callback of finduser
    ,function (err, rows) {
                    if (err) {
                        console.log("failure callback 1")
                        res.status(401).json({
                            message: 'failed to fetch'
                        });
                    }
                    if (rows.length > 0) {
                        console.log("rows generated",rows.length)
                        console.log("rows data",rows)
                        res.status(200).json({
                            data:rows,
                            message: 'data fetched'
                        });
                    }
                    else {
                        console.log("failure callback 2")
                        res.status(400).json({
        
                            message: 'db access error'
                        });
                    }
                  
                });
});



app.post('/addcluster', function (req, res) {
    console.log("adding clusters....")
   var clusterName= req.body.clusterName;
   var createdDate=req.body.createdDate;
   var status= req.body.status;
   var fieldType= req.body.fieldType;
   var user_email = req.body.email;
   console.log("user_email",user_email+"clus name",clusterName)
   console.log("createdDate",createdDate)
   console.log("status",status)
   console.log("cluster_type",fieldType)
   console.log("createdDate",createdDate)

   var newClusterdata = new Cluster({
   cluster_name: req.body.clusterName,
   created_date:req.body.createdDate,
    status:req.body.status,
    field_type: req.body.fieldType,
    user_email : req.body.email,
});
newClusterdata.save().then((cluster)=> {
    console.log("Property created : ", cluster);
   // successCallback()
    res.status(201).json({
        data:cluster,
        message: 'Cluster created'
    });
}, (err) => {
    console.log("Error Creating cluster");
    res.status(400).json({
        message: 'Cannot create cluster.'
    });
}), function (err) {
    console.log(err);
    res.status(401).json({
        message: 'connection error with db'
    });
  }
})



app.post('/addnode', function (req, res) {
    console.log("Adding nodes....")
   var nodeName= req.body.nodeName;
   var createdDate=req.body.createdDate;
   var status= req.body.status;
   //var cluster_id = req.params.cluster_id; ?? coming from params
   console.log("nodeName",nodeName)
   console.log("createdDate",createdDate)
   console.log("status",status)
   //console.log("cluster_id",cluster_id)  ?? ? coming from params


   var newNodedata = new Node({
   node_name: req.body.nodeName,
   created_date:req.body.createdDate,
   status:req.body.status,
   //?? cluster_id:req.params.cluster_id
    
});

newNodedata.save().then((node)=> {
    console.log("Property created : ", node);
   // successCallback()
    res.status(201).json({
        data:node,
        message: 'Node created'
    });
}, (err) => {
    console.log("Error Creating node");
    res.status(400).json({
        message: 'Cannot create node.'
    });
}), function (err) {
    console.log(err);
    res.status(401).json({
        message: 'connection error with db'
    });
  }
})



app.listen(3001, () => {
    console.log("Mongodb and backend server started");
})


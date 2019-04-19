'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var port = 8080;
var app = express();
var cookieParser = require('cookie-parser');
var { User } = require('./models/user');
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
        res.sendStatus(400).json({
            success: false,
            message: 'error fetching data'

        });
        }
        if (result) {
            // we have a result
            console.log("found result")
            res.sendStatus(200).json({ success: true, rows: result });
        } else {
            // we don't
            //console.log("no results found")
            res.sendStatus(404).json({
                success: false,
                message: 'Cannot fetch details.'
            });
        }
    }
    )
})




// collection.findOne({username: user}, function(err, result) {
//     if (err) { /* handle err */ }

//     if (result) {
//         // we have a result
//     } else {
//         // we don't
//     }
// }
// )
// User.findOne({username: user})
//     .then(item => {
//       console.log("item",item)
//     })
//     .catch(err => {
//     console.error("err",err)
//     })

app.get('/getProperty', function (request, response) {

    console.log("Get Property details of property id selected-  " + request.query.id);
    db.findProperty({
        id: request.query.id
    },  //success callback of finduser
        function (rows) {
            console.log(rows)
            response.status(200).json({ success: true, rows: rows });
        }, function (err) {
            console.log(err);
            response.status(401).json({
                success: false,
                message: 'Cannot fetch details.'
            });
        });
});


// app.post('/login',function(request, response){
//     db.findUser ({
//         email: request.email

//     }, function (row) {
//         var user = { email: row.email};
       
//         console.log("row email "+row.email + row.password)
//         crypt.compareHash(msg.password, row.password, function (err, isMatch) {
//             console.log("inside compare hash");
//             if (isMatch && !err) {
//                 console.log("is matched true")
//                var token = jwt.sign(user, config.secret, {
//                  expiresIn: 10080 // in seconds
//                });
               
//                 console.log("user found..",row)
//                 const resData = {
//                     authFlag : true,
//                     user : row,
//                    token: "Bearer "+token,
//                     status: 200
//                 }
//                 callback(err,resData)
                
//             }
//         else
//             {  console.log("inside err" ,err)
          
//               const resData={
//                   status: 403,
//                   message : "password did not match"
//               }
//                callback(err,resData)
           
//             }
//         },
//             function (err) {
//                 console.log(err);

//                 const resData={
//                     status: 401,
//                     message : "Authentication failed 2. User not found."
//                 }
//                 callback(err,resData)

//             });
//     },
//     function (err) {
//         console.log("not found neha->",err);
//         const resData={
//             status: 401,
//             message : "Authentication failed 2. User not found."
//         }
//         callback(err,resData)

//     });
// });




app.listen(3001, () => {
    console.log("Mongodb and backend server started");
})


require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//setting control for the correct use of APIs
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
//get methods
app.get('/getCities',function(req,res){
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            dbo.collection("Cities").find({}).toArray(function(err, result) {
                if (err) throw err;
                res.json({
                    "Response":2,
                    "Content":result
                });
                db.close();
            });
        });
    }catch(err){
        res.json({
            "response":1
        });
    }
});
app.get('/getRestaurant/:idRestaurant',function(req,res){
    var idn=req.params.idRestaurant;
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            Query={_id : parseInt(idn,10)};
            dbo.collection("Restaurant").find(Query).toArray(function(err, result) {
                if (err) throw err;
                res.json({
                    "Response":2,
                    "Content":result
                });
                db.close();
            });
        });
    }catch(err){
        res.json({
            "response":1
        });
    }
});
app.get('/getRestaurantPuntuation/:idRestaurant',function(req,res){
    var idn=req.params.idRestaurant;
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            Query={_id : parseInt(idn,10)};
            Query2 = {projection: {name:1}};
            dbo.collection("Restaurant").find(Query,Query2).toArray(function(err, result) {
                if (err) throw err;
                var restaurantName=result[0].name
                dbo.collection("Comments").find(Query).toArray(function(err, result) {
                    if (err) throw err;
                    var value=0;
                    if (result.length!=0){
                        for (i = 0; i < result.length; i++) {
                            value +=parseInt(result[i].puntuation,10);
                        }
                        value=value/result.length;
                    }
                    outValue={name:restaurantName,puntuation:value};
                    res.json({
                        "Response":2,
                        "Content":outValue
                    });
                    db.close();
                });
                db.close();
            });
        });
    }catch(err){
        res.json({
            "Response":1
        });
    }
});
app.get('/getImagesxRestaurant/:idRestaurant',function(req,res){
    var idn=req.params.idRestaurant;
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            Query={restaurant_id : parseInt(idn,10)};
            dbo.collection("Images").find(Query).toArray(function(err, result) {
                if (err) throw err;
                res.json({
                    "Response":2,
                    "Content":result
                });
                db.close();
            });
        });
    }catch(err){
        res.json({
            "Response":1
        });
    }
});
app.get('/getRestaurantsxCity/:idRestaurant',function(req,res){
    var idn=req.params.idRestaurant;
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            var Query={city_id : parseInt(idn,10)};
            //var query =  { city_id : 2 };
            //var query2 = {projection: {description:1,_id:0}};
            dbo.collection("Restaurant").find(Query).toArray(function(err, result) {
                if (err) throw err;
                res.json({
                    "Response":2,
                    "Content":result
                });
                db.close();
            });
        });
    }catch(err){
        res.json({
            "Response":1
        });
    }
});
app.get('/getPunctuationxRestaurant/:idRestaurant',function(req,res){
    var idn=req.params.idRestaurant;
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            var query =  { restaurant_id : parseInt(idn,10) };
            dbo.collection("Comments").find(query).toArray(function(err, result) {
                if (err) throw err;
                var value=0;
                if (result.length!=0){
                    for (i = 0; i < result.length; i++) {
                        value +=parseInt(result[i].puntuation,10);
                    }
                    value=value/result.length;
                }
                res.json({
                    "Response":2,
                    "Content":value
                });
                db.close();
            });
        });
    }catch(err){
        res.json({
            "Response":1
        });
    }
});
app.get('/getReviewsxRestaurant/:idRestaurant',function(req,res){
    var idn=req.params.idRestaurant;
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            var query =  { restaurant_id : parseInt(idn,10) };
            dbo.collection("Comments").find(query).toArray(function(err, result) {
                if (err) throw err;
                res.json({
                    "Response":2,
                    "Content":result
                });
                db.close();
            });
        });
    }catch(err){
        res.json({
            "Response":1
        });
    }
});
app.get('/getCity/:idCity',function(req,res){
    var idn=req.params.idRestaurant;
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            var query =  { _id : parseInt(idn,10) };
            dbo.collection("cities").find(query).toArray(function(err, result) {
                if (err) throw err;
                res.json({
                    "Response":2,
                    "Content":result
                });
                db.close();
            });
        });
    }catch(err){
        res.json({
            "Response":1
        });
    }
});
app.get('/getDecorationsxRestaurant/:idRestaurant',function(req,res){
    var idn=req.params.idRestaurant;
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            var query =  { restaurant_id : parseInt(idn,10) };
            dbo.collection("Decorations").find(query).toArray(function(err, result) {
                if (err) throw err;
                res.json({
                    "Response":2,
                    "Content":result
                });
                db.close();
            });
        });
    }catch(err){
        res.json({
            "Response":1
        });
    }
});
app.get('/getEventsxRestaurant/:idRestaurant',function(req,res){
    var idn=req.params.idRestaurant;
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            var query =  { restaurant_id : parseInt(idn,10) };
            dbo.collection("Events").find(query).toArray(function(err, result) {
                if (err) throw err;
                res.json({
                    "Response":2,
                    "Content":result
                });
                db.close();
            });
        });
    }catch(err){
        res.json({
            "Response":1
        });
    }
});
app.get('/getAggrementsxRestaurant/:idRestaurant',function(req,res){
    var idn=req.params.idRestaurant;
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            var query =  { restaurant_id : parseInt(idn,10) };
            dbo.collection("Agreement").find(query).toArray(function(err, result) {
                if (err) throw err;
                res.json({
                    "Response":2,
                    "Content":result
                });
                db.close();
            });
        });
    }catch(err){
        res.json({
            "Response":1
        });
    }
});
//put methods
app.put('/putUpdateRestaurant',function(req,res){
    var idn=req.params.idRestaurant;
    var newUpdatedRestaurant=req.body;
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            var identity={_id:parseInt(newUpdatedRestaurant._id,10)}
            var newValues={$set:{name:newUpdatedRestaurant.name,description:newUpdatedRestaurant.description,
            city_id:parseInt(newUpdatedRestaurant.city_id,10),telephone:newUpdatedRestaurant.telephone,email:newUpdatedRestaurant.email,
            address:newUpdatedRestaurant.address,schedule:newUpdatedRestaurant.schedule}};
            dbo.collection("Restaurant").updateOne(identity,newValues,function(err,res){
                if (err) throw err;
                db.close();
            });
            res.end(JSON.stringify({Response:2}));
        });
    }catch(err){
        res.end(JSON.stringify({Response:1}));
    }
});
//post methods
app.post('/postImage',function(req,res){
    var newImageData=req.body;
    var entries = {restaurant_id:parseInt(newImageData.restaurant_id,10),name:newImageData.name,url:newImageData.url};
    try{
        var MongoClient = require('mongodb');
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            dbo.collection("Images").insertOne(entries,function(err,res){
                if (err) throw err;
                db.close();
            });
            res.end(JSON.stringify({Response:2}));
        });
    }catch(err){
        res.end(JSON.stringify({Response:1}));
    }
});
app.post('/postRestaurant',function(req,res){
    var newRestaurantData=req.body;
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        var idn=0;
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            var mySort =  { _id:-1 };
            dbo.collection("Restaurant").find({},{projection: {_id:1}}).sort(mySort).toArray(function(err,result){
                if (err) throw err;
                idn=parseInt(result[0]._id,10);
                entries={_id:(idn+1),name:newRestaurantData.name,description:newRestaurantData.description,
                    city_id:parseInt(newRestaurantData.city_id,10),address:newRestaurantData.address,telephone:newRestaurantData.telephone,
                    email:newRestaurantData.email,schedule:newRestaurantData.schedule};
                dbo.collection("Restaurant").insertOne(entries,function(err,res){
                    if (err) throw err;
                });
                res.end(JSON.stringify({Response:2}));
                db.close();
            });
        });
    }catch(err){
        res.end(JSON.stringify({Response:1}));
    }
});
app.post('/postCity',function(req,res){
    var newCityData=req.body;
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        var idn=0;
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            var mySort =  { _id:-1 };
            dbo.collection("Cities").find({},{projection: {_id:1}}).sort(mySort).toArray(function(err,result){
                if (err) throw err;
                idn=parseInt(result[0]._id,10);
                entries={_id:(idn+1),name:newCityData.name};
                dbo.collection("Cities").insertOne(entries,function(err,res){
                    if (err) throw err;
                });
                res.end(JSON.stringify({Response:2}));
                db.close();
            });
        });
    }catch(err){
        res.end(JSON.stringify({Response:1}));
    }
});
app.post('/postReview',function(req,res){
    var newReviewData=req.body;
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        var idn=0;
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            var mySort =  { _id:-1 };
            dbo.collection("Cities").find({},{projection: {_id:1}}).sort(mySort).toArray(function(err,result){
                if (err) throw err;
                idn=parseInt(result[0]._id,10);
                entries={_id:(idn+1),restaurant_id:parseInt(newReviewData.restaurant_id,10),user_id:parseInt(newReviewData.user_id,10),
                    puntuation:parseInt(newReviewData.puntuation,10),coment:newReviewData.coment};
                dbo.collection("Cities").insertOne(entries,function(err,res){
                    if (err) throw err;
                });
                res.end(JSON.stringify({Response:2}));
                db.close();
            });
        });
    }catch(err){
        res.end(JSON.stringify({Response:1}));
    }
});
app.listen(process.env.PORT,()=>{
    console.log('Modulo activo',5000);
});

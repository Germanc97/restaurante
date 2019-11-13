require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fileUpload=require('express-fileupload');
const request = require('request');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//setting control for the correct use of APIs
//esta es una prueba de cambio
app.use('/static', express.static(__dirname + '/files'));
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
app.use(fileUpload({createParentPath:true,useTempFiles:true}));
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
                res.status(200).json({
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
app.get('/getper',function(req,res){
    try{
        request.get('http://181.50.100.167:4000/getNameUser?id=2',function(err,response,body){
            if (err) throw err;
            if(JSON.parse(body).response===2){
                console.log(JSON.parse(body).content.name);
            }
            res.status(200).json({
                "Response":2
            });
        })
        
    }catch(err){
        console.log(err);
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
app.get('/getRestaurants',function(req,res){
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            dbo.collection("Restaurant").find({}).toArray(function(err, result) {
                if (err) throw err;
                res.status(200).json({
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
                var entries = [{$match: { "restaurant_id": { $eq:parseInt(idn,10)}}},{$group: {_id:null, AvgPuntuation: {$avg:"$puntuation"}}},{ $project : { _id:0}}];
                dbo.collection("Comments").aggregate(entries).toArray(function(err, result) {
                    if (err) throw err;
                    var value=0;
                    if (!(result.length===0)){
                        value=Math.floor(result[0].AvgPuntuation);
                    }
                    outValue=[{name:restaurantName,puntuation:value}];
                    res.status(200).json({
                        "Response":2,
                        "Content":outValue
                    });
                    db.close();
                });
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
app.get('/getRestaurantsxCity/:idCity',function(req,res){
    var idn=req.params.idCity;
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
                res.status(200).json({
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
app.get('/getRestaurantNameAndUser/:idRestaurant',function(req,res){
    var idn=req.params.idRestaurant;
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            var Query={city_id : parseInt(idn,10)};
            var query2 = {projection: {name:1,email:1}};
            dbo.collection("Restaurant").find(Query,query2).toArray(function(err, result) {
                if (err) throw err;
                res.status(200).json({
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
            var entries = [{$match: { "restaurant_id": { $eq:1}}},{$group: {_id:null, AvgPuntuation: {$avg:"$puntuation"}}},{ $project : { _id:0}}];
            dbo.collection("Comments").aggregate(entries).toArray(function(err, result) {
                if (err) throw err;
                var value=result;
                console.log(result);
                outValue={puntuation:value};
                res.status(200).json({
                    "Response":2,
                    "Content":outValue
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
            var mySort =  { _id:-1 };
            var entries=[{$match: { "restaurant_id": { $eq:parseInt(idn,10)}}},{ $lookup:
                {
                  from: 'users',
                  localField: 'autor_id',
                  foreignField: 'id',
                  as: 'autor'
                }
              }];
            dbo.collection("Comments").aggregate(entries).sort(mySort).toArray(function(err, result) {
                if (err) throw err;
                res.status(200).json({
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
    var idn=req.params.idCity;
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            var query =  { _id : parseInt(idn,10) };
            dbo.collection("cities").find(query).toArray(function(err, result) {
                if (err) throw err;
                res.status(200).json({
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
                res.status(200).json({
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
                res.status(200).json({
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
                res.status(200).json({
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
            var n={};
            if (!(newUpdatedRestaurant.name === undefined)){
                n.name=newUpdatedRestaurant.name;
            }
            if (!(newUpdatedRestaurant.description === undefined)){
                n.description=newUpdatedRestaurant.description;
            }
            if (!(newUpdatedRestaurant.telephone === undefined)){
                n.telephone=parseInt(newUpdatedRestaurant.telephone,10);
            }
            if (!(newUpdatedRestaurant.email === undefined)){
                n.email=newUpdatedRestaurant.email;
            }
            if (!(newUpdatedRestaurant.address === undefined)){
                n.address=newUpdatedRestaurant.address;
            }
            if (!(newUpdatedRestaurant.schedule === undefined)){
                n.schedule=newUpdatedRestaurant.schedule;
            }
            var newValues={$set:n};
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
                idn=result.length;
                entries={_id:(idn+1),name:newRestaurantData.name,description:newRestaurantData.description,
                    city_id:parseInt(newRestaurantData.city_id,10),address:newRestaurantData.address,telephone:newRestaurantData.telephone,
                    email:newRestaurantData.email,schedule:newRestaurantData.schedule};
                dbo.collection("Restaurant").insertOne(entries,function(err,res){
                    if (err) throw err;
                });
                res.end(JSON.stringify({Response:(idn+1)}));
                db.close();
            });
        });
    }catch(err){
        res.end(JSON.stringify({Response:0}));
    }
});
app.post('/postPrueba',function(req,res){
    var route='server/files/';
    let file = req.files.archivo;
    let fileName = file.name.split('.')[0];
    if (!req.files || Object.keys(req.files).length === 0) { //si ningun archivo es detectado en la peticion que se envio
        res.end(JSON.stringify({Response:1}));
    }
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        var idn=0;
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            var mySort =  { _id:-1 };
            dbo.collection("Images").find({},{projection: {_id:1}}).sort(mySort).toArray(function(err,result){
                if (err) throw err;
                idn=result.length+1;
                idRestaurant=parseInt(req.body.restaurant_id,10);
                route=route.concat(idn.toString(),'.jpeg');
                var route1='http://181.50.100.167:5000/static/'
                route1=route1.concat(idn.toString(),'.jpeg')
                entries={_id:idn,restaurant_id:idRestaurant,name:req.body.name,url:route1};
                file.mv(route, (err) => {
                    if (err) throw err
                    dbo.collection("Images").insertOne(entries,function(err,res){
                        if (err) throw err;
                    });
                    res.end(JSON.stringify({Response:2}));
                    db.close();
                });
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
                idn=result.length;
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
            dbo.collection("Comments").find({},{projection: {_id:1}}).sort(mySort).toArray(function(err,result){
                if (err) throw err;
                idn=result.length;
                entries={_id:(idn+1),restaurant_id:parseInt(newReviewData.restaurant_id,10),autor_id:parseInt(newReviewData.autor_id,10),
                    puntuation:parseInt(newReviewData.puntuation,10),comment:newReviewData.comment};
                dbo.collection("Comments").insertOne(entries,function(err,res){
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
app.post('/postAgreement',function(req,res){
    var newAgreementData=req.body;
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        var idn=1;
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            var mySort =  { _id:-1 };
            dbo.collection("Agreement").find({},{projection: {_id:1}}).sort(mySort).toArray(function(err,result){
                if (err) throw err;
                idn=result.length;
                entries={_id:(idn+1),restaurant_id:parseInt(newAgreementData.restaurant_id,10),nameAgreement:newAgreementData.nameAgreement,
                    discount:parseInt(newAgreementData.discount,10),CutDate:newAgreementData.CutDate};
                dbo.collection("Agreement").insertOne(entries,function(err,res){
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
app.post('/postDecoration',function(req,res){
    var newDecorationsData=req.body;
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        var idn=0;
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            var mySort =  { _id:-1 };
            dbo.collection("Decorations").find({},{projection: {_id:1}}).sort(mySort).toArray(function(err,result){
                if (err) throw err;
                idn=result.length;
                entries={_id:(idn+1),restaurant_id:parseInt(newDecorationsData.restaurant_id,10),type:newReviewData.type,
                    description:newDecorationsData.description,price:parseInt(newDecorationsData.price,10)};
                dbo.collection("Decorations").insertOne(entries,function(err,res){
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
app.post('/postEvent',function(req,res){
    var newEventData=req.body;
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        var idn=0;
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            var mySort =  { _id:-1 };
            dbo.collection("Events").find({},{projection: {_id:1}}).sort(mySort).toArray(function(err,result){
                if (err) throw err;
                idn=result.length;
                entries={_id:(idn+1),restaurant_id:parseInt(newEventData.restaurant_id,10),type:newEventData.type,
                    name:newEventData.name,date:newEventData.date};
                dbo.collection("Events").insertOne(entries,function(err,res){
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

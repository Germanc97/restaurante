require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//get,put and post methods of the application definition
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
app.get('/getImagesxRestaurant/:idRestaurant',function(req,res){
    //cambiar
    var idn=req.params.idRestaurant;
    var sQuery="SELECT DISTINCT URImagen from restaurantesximagenes WHERE restaurantesximagenes.idrestaurante=";
    sQuery=sQuery.concat(sQuery,idn);
    try{
        var sqlite3=require('sqlite3').verbose();
        var dataBase=new sqlite3.Database('abc');
        dataBase.all(sQuery,function(err,rows){
            /*var result="";
            rows.forEach(function(row){
                result=result.concat(row.id,",",row.name,";","\n");
            });*/
            res.json({
                "Response": 2,
                "Content": rows
            });
        });
        dataBase.close();
    }catch(err){
        res.json({
            "response":1
        });
    }
})
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
            "response":1
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
            "response":1
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
            dbo.collection("Decoration").find(query).toArray(function(err, result) {
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
            "response":1
        });
    }
});
app.put('/putUpdateRestaurant/:idRestaurant',function(req,res){
    var idn=req.params.idRestaurant;
    var newUpdatedRestaurant=req.body;
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://dba:dba2019@181.50.100.167:27018/Restaurants";
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Restaurants");
            db.close();
            res.end({"Response":2});
        });
    }catch(err){
        res.end({"Response":1});
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
                idn=number(result[0]._id)
            });
            entries=[JSON.stringify({_id:(idn+1).toString(),name:newRestaurantData.name,description:newRestaurantData.description,
            city_id:newRestaurantData.city_id,address:newRestaurantData.address,telephone:newRestaurantData.telephone,
            email:newRestaurantData.email})];
            dbo.collection("Restaurant").insertMany(entries,function(err,res){
                if (err) throw err;
                db.close();
            });
            res.end({"Response":2});
        });
    }catch(err){
        res.end({"Response":1});
    }
});
app.listen(process.env.PORT,()=>{
    console.log('Modulo activo',5000);
});

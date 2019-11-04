//----------------------------------------------------------------------------------------
// Promedio de la puntuación de los comentario realizados para un restaurante
var entries = [{$match: { "restaurant_id": { $eq:1}}},{$group: {_id:null, AvgPuntuation: {$avg:"$puntuation"}}},{ $project : { _id:0}}]
dbo.collection("Comments").aggregate(entries)
//----------------------------------------------------------------------------------------

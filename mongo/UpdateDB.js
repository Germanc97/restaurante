// ----------------------------------------------------------------------------------------
// UPDATE - RESTAURANTES
// Se debe usar {$set:{}} cuando no se modifcarán todos los atributos
// En este caso se modifican todos los atributos excepto el _id (único)
var query = {city_id:2}
var update = {
	name : "Rest Prueba2", 
	description : "Muy lujoso", 
	city_id : 2, 
	address : "Lejos de aquí", 
	telephone : 12348756, 
	email : "rest2@yopmail.com",
 	schedule : "Lun-Dom 10:00AM - 12:00AM" }
dbo.collection("Restaurant").update(query,update);
// ----------------------------------------------------------------------------------------

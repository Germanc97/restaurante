// ----------------------------------------------------------------------------------------
// QUERY - CIUDADES DEL SISTEMA
// -- Busqueda de todas las ciudades del sistema
dbo.collection("Cities").find();
// ----------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------
// QUERY - RESTAURANTE POR CIUDAD
// -- Filtro de búsqueda para la colección Restaurant con el id de ciudad
var query =  { city_id : 1};
dbo.collection("Restaurant").find(query);
// ----------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------
// QUERY - INFORMACIÓN DEL RESTAURANTE 
// -- Filtro de búsqueda para la colección Restaurant con el id de ciudad mostrando solamente su descripcion
var query =  { city_id : 1 };
var query2 = {projection: { description:1, _id:0 }};
dbo.collection("Restaurant").find(query,query2);
// ----------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------
// QUERY - COMENTARIOS POR RESTAURANTE 
// -- Filtro de búsqueda para los comentarios de un respectivo restaurante
var query =  { restaurant_id : 1 };
dbo.collection("Comments").find(query);
// ----------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------
// QUERY - DECORACIÓN POR RESTAURANTE 
// -- Filtro de búsqueda para la decoración de un respectivo restaurante
var query =  { restaurant_id : 1 };
dbo.collection("Decoration").find(query);
// ----------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------
// QUERY - EVENTOS POR RESTAURANTE 
// -- Filtro de búsqueda para los eventos de un respectivo restaurante
var query =  { restaurant_id : 1 };
dbo.collection("Event").find(query);
// ----------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------
// QUERY - ACUERDOS POR RESTAURANTE 
// -- Filtro de búsqueda para los acuerdos de un respectivo restaurante
var query =  { restaurant_id : 1 };
dbo.collection("Agreement").find(query);
// ----------------------------------------------------------------------------------------



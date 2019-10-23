//----------------------------------------------------------------------------------------
// INSERT - COLECCIÓN 'RESTAURANT'
var entries = [{ _id : 1, 
  name : "Rest Prueba", 
  description : "Muy lujoso", 
  city_id : 1,
  address : "Cerca de aquí", 
  telephone : 1234567, 
  email : "rest@yopmail.com",
  schedule : "Lun-Dom 10:00AM - 12:00AM" 
}]
dbo.collection("Restaurant").insertMany(entries);
// ----------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------
// INSERT - COLECCIÓN 'COMMENTS'
var entries = [{_id:1,
  restaurant_id:1,
  autor_id:1,
  puntuation:3, 
  comment:"Muy normal"
}]
dbo.collection("Comments").insertMany(entries);
//----------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------
// INSERT - COLECCIÓN 'CITIES'
var entries = [{_id:1,
  name: "Cali"},
{_id:2,
  name: "Barranquilla"},
{_id:3,
  name: "Bogotá"
}]
dbo.collection("Cities").insertMany(entries);
//----------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------
// INSERT - COLECCIÓN 'AGREEMENT'
var entries = [{_id:1,
  restaurant_id: 1,
  nameAgreement: "Tarjeta Falabella",
  desdiscount: 10,
  cutoffDate: Date("2019-12-25")
}]
dbo.collection("Agreement").insertMany(entries);
//----------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------
// INSERT - COLECCIÓN 'DECORATION'
var entries = [{_id:1,
  restaurant_id: 1,
  type: "Cumpleaños",
  description: "Decoración de cumpleaños para mayor de edad, incluye ponqué"
}]
dbo.collection("Decoration").insertMany(entries);
//----------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------
// INSERT - COLECCIÓN 'EVENT'
var entries = [{_id:1,
  restaurant_id: 1,
  name: "Halloween-Noche de brujas",
  date: Date("2019-10-31"),
  type: "Fiesta"
}]
dbo.collection("Event").insertMany(entries);
//----------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------
// INSERT - COLECCIÓN 'IMAGES'
var entries = [{restaurant_id: 1,
  name: "Foto de noche",
  url: "C:/Allá"
}]
dbo.collection("Images").insertMany(entries);
//----------------------------------------------------------------------------------------
El usuario-restaurante probará cargar imágenes de su propio restaurante.
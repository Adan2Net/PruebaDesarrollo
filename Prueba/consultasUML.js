//TODO: Consultas con MongoDB
// Retornar al usuario con nombre de usuario “Frank_blog”. 
db.usuario.find({nombre_usuario: "Frank_blog”})

//  Retornar los usuarios llamados “Peter”. 
db.usuario.find({nombre: "Peter"})

//Contar el número de usuarios con CP= “39005”. 
db.usuario.find({direccion:{cp: "39005"}})

//Retornar a un usuario con número de teléfono: “111111111”.
db.usuario.find({telefono: "111111111"})

//Retornar nombre_usuario y cuenta_twitter, sin _id, de usuarios con CP igual o mayor que “39005”. 
db.usuario.find({direccion:{cp:{$gte: "39005"}}}, {nombre_usuario: 1, cuenta_twiter: 1, _id=0})
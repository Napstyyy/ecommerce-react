import { Sequelize } from 'sequelize'; //Sequelize se encarga de la conexion con la base de datos

//const db = new Sequelize('commerce', 'root', '', {
//    host:'localhost',
//    dialect:'mysql'
//});

//conexion a la base de datos conectada a un hosting gratis en linea
const db = new Sequelize('ecommerce','pulg4tx1','cristyan115',{
    host:'pulgatx.com.mialias.net',
    dialect: 'mysql'
})

export default db;
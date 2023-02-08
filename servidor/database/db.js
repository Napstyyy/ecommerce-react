import { Sequelize } from 'sequelize'; //Sequelize se encarga de la conexion con la base de datos

//conexion a la base de datos conectada a un hosting gratis en linea
const db = new Sequelize('ecommerce','root','root',{
    host:'localhost',
    dialect: 'mysql'
})

export default db;
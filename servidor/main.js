import Express from 'express';//Se importa express para uso futuro de creacion de la api
import cors from 'cors';//El intercambio de recursos de origen cruzado o CORS es un mecanismo que permite que se puedan solicitar recursos restringidos en una página web desde un dominio diferente del dominio que sirvió el primer recurso.
import db from './database/db.js';//Importando la base de datos
import productRoutes from './routes/routesProducts.js';///rutas de los productos
import userRoutes from './routes/routesUser.js';//rutas de los usuarios
import ProductModel from './models/ProductModel.js';//modelo de los productos
import {pay} from './routes/pay.js';//ruta para pagar
const app = Express();//la app se conecta con express


app.use(cors());//prevenir fallas de conexcion
app.use(Express.json());//permite obtener el paquete express en un json
app.use('/products', productRoutes);//permite obtener el paquete express en un json
app.use('/users', userRoutes);//se generalizan las rutas de los productso
app.use('/payment',pay)//se generalizan las rutas de los pagos


//se busca conectarse a la base de datos
try {
    db.authenticate()
    console.log('conexion exitosa a la bd');
} catch (error) {
    console.log(`el error de conexion fue ${error}`);
}

const PORT = process.env.PORT || 3001;//conexion al servidor backend

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);//info de donde esta corriendo el server
})

//usando el modelo de productos, encuentra a todos los productos y devuelve sus correspondientes atributos y se guarda en el objeto en products
const products = await ProductModel.findAll({
    attributes: ['id', 'stock', 'stockMin', 'productName']
})


let productsStock = {} //objeto para guardar el stock minmo de los productos
let productMinStock = {}//objeto para guardar el stock minimo de los productos

//para cada producto obtenido, 
products.forEach(product => {
    productsStock[product.dataValues.id] = product.dataValues.stock;//se le asigna el id correspondiente al producto y a su vez el valor del stock en forma de objeto
});
products.forEach(product => {
    productMinStock[product.dataValues.id] = {stockMin: product.dataValues.stockMin, productName: product.dataValues.productName};
});
console.log(productMinStock);
export {productsStock, productMinStock};///exportation de los objetos


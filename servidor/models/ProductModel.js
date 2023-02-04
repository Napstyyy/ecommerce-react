import db from "../database/db.js";//se importa la baase de datos que se usara a continuacion

import { DataTypes } from "sequelize"; //se importa el tipo de datos para poder relacionar el dato extraido de la base con el campo

const ProductModel = db.define ('inventories',{
    productName: {type: DataTypes.STRING},
    price: {type: DataTypes.NUMBER},
    description: {type: DataTypes.TEXT},
    img1: {type: DataTypes.TEXT},
    img2: {type: DataTypes.TEXT},
    img3: {type: DataTypes.TEXT},
    stockMax: {type: DataTypes.INTEGER},
    stockMin: {type: DataTypes.INTEGER},
    stock: {type: DataTypes.INTEGER}
});

export default ProductModel;
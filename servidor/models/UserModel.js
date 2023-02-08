import db from "../database/db.js";//se importa la baase de datos que se usara a continuacion

import { DataTypes } from "sequelize"; //se importa el tipo de datos para poder relacionar el dato extraido de la base con el campo

const UserModel = db.define ('users',{
    username: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    adress: {type: DataTypes.STRING},
    telephone: {type: DataTypes.INTEGER},
    email: {type: DataTypes.STRING}
});

export default UserModel;
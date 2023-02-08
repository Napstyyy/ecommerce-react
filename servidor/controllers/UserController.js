import UserModel from "../models/UserModel.js";

//gets all users
export const getAllUsers = async (req,res) => {
    try {
        const users  = await UserModel.findAll()
        res.json(users)
    } catch (error) {
        res.json({message: error.message})
    }
}

// crear un registro
export const createUser = async (req,res) => {
    try {
        await UserModel.create(req.body)
        res.json({
            'message': 'registro creado'
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}

//updates user info
export const updateUser = async (req,res) =>{
    try {
        await UserModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            'message': 'registro actualizado'
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}

//gets an specific user by its id
export const getUser = async (req,res) => {
    try {
       const user = await UserModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(user[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

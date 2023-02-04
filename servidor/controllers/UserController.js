import UserModel from "../models/UserModel.js";

export const getAllUsers = async (req,res) => {
    try {
        const Users  = await UserModel.findAll()
        res.json(Users)
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

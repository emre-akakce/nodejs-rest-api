import { createNewUser, getAllUsers } from "../db/userRepository"
import { UserModel } from "../models/user.model"

async function getUsers(req: any, res: any) {
    try {
        const users = await getAllUsers()
        res.status(200).json({message: 'Successful', users: users})
    } catch(e) {
        res.status(500).json({message: 'Could not get users'})
    }
}

async function createUser(req: any, res: any) {
   const age = req.body.age;
   const name = req.body.name;
   const email = req.body.email;

   const user: UserModel = {
        age: age,
        name:  name,
        email: email
   }

   try {
        const newUser = await createNewUser(user)
        res.status(200).json({message: 'User created', user: newUser})
   } catch(e) {
        res.status(500).json({message: 'Could not create user'})
   }
}


module.exports = {
    getUsers,
    createUser
}
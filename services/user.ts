import { createNewUser, getAllUsers, getUserInfo } from "../db/userRepository"
import { UserModel } from "../models/user.model"
import { generateAccessToken } from "../utils/helper"

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


async function login(req: any, res: any) {
    const email = req.body.email;
    //add hash
    const password = req.body.password

    try {
        const user = await getUserInfo(email, password)
        const token = generateAccessToken(user)
        res.status(200).json({message: 'Logged in', user: user, accessToken: token})
    } catch(e) {
        res.status(500).json({message: 'Could not log in'})
    }
}


module.exports = {
    getUsers,
    createUser,
    login
}
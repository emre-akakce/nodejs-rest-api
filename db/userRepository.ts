import { UserModel } from "../models/user.model"
import { db } from "../utils/db.server"

export async function createNewUser(user: UserModel) {
    const newPost = await db.user.create({
        data: {
            name: user.name,
            email: user.email,
            age: user.age
        }
    })

    return newPost
}

export async function getAllUsers() {
    const users = await db.user.findMany()
    return users
}
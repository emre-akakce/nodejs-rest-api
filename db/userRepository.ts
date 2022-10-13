import { UserModel } from "../models/user.model"
import { db } from "../utils/db.server"

export async function createUserRepository(user: UserModel) {
    const newPost = await db.user.create({
        data: {
            name: user.name,
            email: user.email,
            age: user.age
        }
    })

    return newPost
}
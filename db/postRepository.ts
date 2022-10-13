import { db } from "../utils/db.server";
import { PostModel } from "../models/post.model";

export async function createNewPost(post: PostModel) {
    const newPost = await db.post.create({
        data: {
            title: post.title,
            authorId: post.authorId,
            content: post.content
        }
    })

    return newPost
}

export async function getAllPosts() {
    const posts = await db.post.findMany({})
    return posts;
}
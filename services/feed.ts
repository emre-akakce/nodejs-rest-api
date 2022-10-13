import { PostModel } from "../models/post.model";
import { createNewPost, getAllPosts } from "../db/postRepository";

async function getPosts(req: any, res: any) {
    try {
        const posts = await getAllPosts()
        res.status(200).json({ posts: posts });
    } catch(e) {
        res.status(404).json({ message: 'Could not get posts'})
    }
}

async function createPost (req: any, res: any) {
    const title = req.body.title
    const content = req.body.content
    const userId = req.body.userId

    const post: PostModel = {
        title: title, 
        content: content,
        authorId: userId
    }

    try {
        await createNewPost(post)
        res.status(201).json({
            message: 'Post created successfuly',
            post: post
        })
    } catch(e) {
        res.status(404).json({
            message: 'Could not create post'
        })
    }
}

module.exports = {
    getPosts,
    createPost
}
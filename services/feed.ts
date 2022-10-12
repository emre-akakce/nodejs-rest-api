async function getPosts(req: any, res: any) {
    res.status(200).json({ posts: [{ title: 'First Post', content: 'This is the first post' }] });
}

async function createPost (req: any, res: any) {
    const title = req.body.title
    const content = req.body.content
    
    res.status(201).json({
        message: 'Post created successfuly',
        post: {id: new Date().toISOString(), title: title, content: content}
    })
}

module.exports = {
    getPosts,
    createPost
}
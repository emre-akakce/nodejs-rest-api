import { Post, PrismaClient, User } from '@prisma/client'
import { createPost, createPostRepository } from './db/postRepository'

const prisma = new PrismaClient({log: ["query"]})

async function main() {
/*     await prisma.user.deleteMany()
    const user = await prisma.user.create({
        data: {
            name: 'Kyle',
            email: "kyle@test.com",
            age: 27,
            userPreference: {
                create: {
                    emailUpdates: true
                }
            }
        },
        select: {
            name: true,
            userPreference: {select: {id: true}}
        }
    }) 

    const user = await prisma.user.findUnique({
        where: {
            email: "kyle@test.com"
        }
    })

    console.log(user)

    if (user !== null) {
        let post: Post = {
            id: '',
            title: '',
            authorId: '',
            favoritedById: null,
            content: '',
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now())
        }

        const newPost = await createPostRepository(user, post)
        console.log(newPost)
    }*/
}

main()
.catch(e => {
    console.log(e)
})
.finally(async () => {
    await prisma.$disconnect()
})
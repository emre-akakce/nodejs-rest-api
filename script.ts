import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({log: ["query"]})

async function main() {
    await prisma.user.deleteMany()
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

    console.log(user)
}

main()
.catch(e => {
    console.log(e)
})
.finally(async () => {
    await prisma.$disconnect()
})
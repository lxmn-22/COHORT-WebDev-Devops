import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

// creating user.
async function getUser() {
    const user = await client.user.findFirst({
        where: {
            id: 1
        },
        include: {
            todos: true
        }
    })
    console.log(user);
    
}

getUser();

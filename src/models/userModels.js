import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAll = async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true
        }
    })
    return users
}

export const getById = async (id) =>{
    const user = prisma.user.findUnique({
        where: {
            id
        }
    })
    return user
}

export const create = () => {

}
export default {
    getAll,
    create,
}
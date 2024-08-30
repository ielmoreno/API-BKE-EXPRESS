import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllUsers = async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true
        }
    })
    return users
}

export const getUserById = async (id) =>{
    const user = prisma.user.findUnique({
        where: {
            id
        },
        select:{
            id:true,
            name:true,
            email:true
        }
    })
    return user
}

export const createUser = async (user) => {
    const result = await prisma.user.create({
        // data:{
        //     name: user.name,
        //     email: user.email,
        //     pass: user.pass
        // }, ===
        data: user,
        select: {
            id:true,
            name:true,
            email:true
        }
    })
    return result
}

export const removeUser = async (id) =>{
    const user = prisma.user.delete({
        where: {
            id
        },
        select:{
            id:true,
            name:true,
            email:true
        }
    })
    return user
}

export const updateUser = async (user) => {
    const result = await prisma.user.update({
        where:{
            id: user.id
        },
        data: user,
        select: {
            id:true,
            name:true,
            email:true
        }
    })
    return result
}
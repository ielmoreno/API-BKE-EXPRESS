import { PrismaClient } from '@prisma/client'

export const getAllProds = async () => {

    const prods = await prisma.product.findMany({
        select: {
            id: true,
            name: true,
            preco: true
        }
    })
    return prods
}

export const getProdById = async (id) =>{
    const prod = await prisma.product.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            preco: true
        }
    })
    return prod
}

export const create = async (prod) => {
    const result = await prisma.product.create({
        data: prod,
        select: {
            id: true,
            name: true,
            preco: true
        }
    })
    return result
}

export const remove = async (id) =>{
    const prod = await prisma.product.delete({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            preco: true
        }
    })
    return prod
}

export const update = async (prod) =>{
    const prods = await prisma.product.update({
        where: {
            id: prod.id
        },
        data:{
            prod
        },
        select: {
            id: true,
            name: true,
            preco: true
        }
    })
    return prod
}
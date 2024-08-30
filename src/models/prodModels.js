import { PrismaClient } from '@prisma/client'

const getAllProds = async () => {

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

const createProd = async (prod) => {
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

export const removeProd = async (id) =>{
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

export const updateProd = async (prod) =>{
    const prod = await prisma.product.update({
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
import { PrismaClient } from '@prisma/client'

const getAll = async () => {

    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true
        }
    })
    return users
    return [
        {
            id: 1,
            name: "mouse",
            categoria: "informática",
            subcategoria: "acessórios"
        },
        {
            id: 2,
            name: "teclado",
            categoria: "informática",
            subcategoria: "acessórios"
        }
    ]
}

const create = () => {

}

export default {
    getAll,
    create,
}
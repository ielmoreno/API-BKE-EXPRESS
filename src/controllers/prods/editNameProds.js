import { updateProd } from "../../models/prodModels"

const editNameProds = async (req, res) => {
    const {id} = req.params
    const {name} = req.body

    const prod = {
        id: +id,
        name
    }

    const result = await updateProd(prod)

    if(!result){
        return res.status(401).json({
            error: "Erro ao editar o nome do produto"
        })
    }
    
    return res.json({
        success: "Nome do produto editado com sucesso",
        user: result
    })
}

export default editNameProds
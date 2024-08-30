import { updateProd } from "../../models/prodModels"

const editProds = async (req, res) => {
    const {id} = req.params
    const prod = req.body

    prod.id = +id

    const result = await updateProd(prod)

    if(!result){
        return res.status(401).json({
            error: "Erro ao editar produto"
        })
    }
    
    return res.json({
        success: "Produto editado com sucesso",
        user: result
    })
}

export default editProds
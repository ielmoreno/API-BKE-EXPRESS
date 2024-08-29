import { remove } from "../../models/userModels.js" 
const deleteUser = async (req, res) => {

    const {id} = req.params
    const user = await remove(+id)

    if(!user){
        return res.status(404).json({
            Error: "Usuário não encontrado"
        })
    }

    return res.json({
        message: "Usuário removido com sucesso!",
        user
    })
}

export default deleteUser
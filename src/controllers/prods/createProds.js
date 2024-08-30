const createProds = async (req, res) => {
    const prods = req.body

    const result  = await create(prods)

    if(!result){
        return res.status(500).json({
            error: "Erro ao criar produto"
        })
    }

    return res.json({
        success: "Produto criado com sucesso",
        user: result,
    })
}

export default createProds
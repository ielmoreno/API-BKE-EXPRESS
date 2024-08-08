import prodModel from "../../models/prodModels.js"

const prodsList = (req, res) => {

    const prods = prodModel.getAll()
    res.json(prods)
}

export default prodsList
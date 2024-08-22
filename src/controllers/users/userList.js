
import userModel from "../../models/userModels.js"

const userList = (req, res) => {

    const users = userModel.getAll()
    res.json(users)
}

export default userList
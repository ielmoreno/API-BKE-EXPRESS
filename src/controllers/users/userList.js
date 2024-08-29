
import {getAll} from "../../models/userModels.js"

const userList = (req, res) => {

    const users = getAll()
    res.json(users)
}

export default userList
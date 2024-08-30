
import { getAllUsers } from "../../models/userModels.js"

const userList = (req, res) => {

    const users = getAllUsers()
    res.json(users)
}

export default userList
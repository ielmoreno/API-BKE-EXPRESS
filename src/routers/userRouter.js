import express from "express"
import userList from '../controllers/users/userList.js'
import userById from '../controllers/users/userById.js'
import createUser from "../controllers/users/createUser.js"
import editUser from "../controllers/users/editUser.js"
import editNameUser from "../controllers/users/editNameUser.js"
import deleteUser from "../controllers/users/deleteUser.js"


const router = express.Router()

router.post('/', createUser)
router.get("/list", userList)
router.get('/:id', userById)
router.put('/:id', editUser)
router.patch('/:id', editNameUser)
router.delete('/:id', deleteUser)

export default router
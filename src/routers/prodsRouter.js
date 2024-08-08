import express from "express"
import prodsList from "../controllers/prods/prodsList.js"
import prodsById from "../controllers/prods/prodsById.js"
import createProds from "../controllers/prods/createProds.js"
import editProds from "../controllers/prods/editProds.js"
import editNameProds from "../controllers/prods/editNameProds.js"
import deleteProds from "../controllers/prods/deleteProds.js"

const router = express.Router()


router.get('/list', prodsList)
router.get('/', prodsById)
router.post('/', createProds)
router.put('/', editProds)
router.patch('/', editNameProds)
router.delete('/', deleteProds)

export default router
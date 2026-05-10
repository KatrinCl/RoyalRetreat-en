import express from 'express'
import { authAdmin } from '../middleware/authAdmin.js'
import upload from '../config/multer.js'
import { addHouse, listHouse, removeHouse } from '../controllers/houseController.js'

const houseRouter = express.Router()

houseRouter.post('/add/house', authAdmin, upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
]), addHouse)
houseRouter.post('/remove', authAdmin, removeHouse)
houseRouter.get('/list', listHouse)

export default houseRouter
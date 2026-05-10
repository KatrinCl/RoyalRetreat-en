import express from 'express'
import { authAdmin } from '../middleware/authAdmin.js'
import upload from '../config/multer.js'
import { addRoom, listRoom, removeRoom } from '../controllers/roomController.js'

const roomRouter = express.Router()

roomRouter.post('/add/room', authAdmin, upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
]), addRoom)
roomRouter.post('/remove', authAdmin, removeRoom)
roomRouter.get('/list', listRoom)

export default roomRouter
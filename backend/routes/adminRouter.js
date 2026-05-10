import express from 'express'
import { authAdmin } from '../middleware/authAdmin.js'
import { adminLogin, adminLogout, checkAdmin } from '../controllers/adminController.js'
import { allBookings, updateStatus } from '../controllers/bookingController.js'

const adminRouter = express.Router()

adminRouter.post('/login', adminLogin)
adminRouter.get('/logout', authAdmin, adminLogout)
adminRouter.get('/check', checkAdmin)
adminRouter.get("/get-all-bookings", authAdmin, allBookings)
adminRouter.post('/status', authAdmin, updateStatus)



export default adminRouter
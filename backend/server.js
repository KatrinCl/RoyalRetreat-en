import express from 'express'
import cors from 'cors'
import "dotenv/config"
import cookieParser from 'cookie-parser'
import userRouter from './routes/userRouter.js'
import bookingRouter from './routes/bookingRouter.js'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import path from 'path';
import adminRouter from './routes/adminRouter.js'
import roomRouter from './routes/roomRouter.js'
import houseRouter from './routes/houseRouter.js'


const app = express()

app.use(express.json())
app.use(cookieParser())

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174', 'https://royal-retreat-en-server.vercel.app', 'https://royal-retreat-en.vercel.app']

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use('/public', express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => res.send('API is working'))
app.use('/api/user', userRouter)
app.use('/api/bookings', bookingRouter)
app.use('/api/admin', adminRouter)
app.use('/api/room', roomRouter)
app.use('/api/house', houseRouter)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
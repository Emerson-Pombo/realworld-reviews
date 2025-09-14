import express from 'express'
import cors from 'cors'

import usersRouter from './routes/users.js'
import servicesRouter from './routes/services.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/health', (_req, res) => res.status(200).json({ status: 'ok' }))

app.use('/users', usersRouter)
app.use('/services', servicesRouter)

export default app
import { Router } from 'express'
import { models } from '../../store/postgres.js'
import UserService from '../../core/services/UserService.js'

const router = Router()

router.post('/', async (req, res, next) => {
    try {
        const svc = new UserService(models)
        const user = await svc.create(req.body)
        res.status(201).json(user)
    } catch (e) { next(e) }
})

router.get('/', async (_req, res, next) => {
    try {
        const svc = new UserService(models)
        const users = await svc.list()
        res.json(users)
    } catch (e) { next(e) }
})

// handler simples de erro para essa rota
router.use((err, _req, res, _next) => {
    const status = err.status || 500
    res.status(status).json({ error: err.message || 'Internal error' })
})

export default router
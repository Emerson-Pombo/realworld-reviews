import { Router } from 'express'
import { models } from '../../store/postgres.js'
import ServiceService from '../../core/services/ServiceService.js'

const router = Router()

router.post('/', async (req, res, next) => {
    try {
        const svc = new ServiceService(models)
        const service = await svc.create(req.body)
        res.status(201).json(service)
    } catch (e) { next(e) }
})

router.get('/', async (_req, res, next) => {
    try {
        const svc = new ServiceService(models)
        const services = await svc.list()
        res.json(services)
    } catch (e) { next(e) }
})

router.use((err, _req, res, _next) => {
    const status = err.status || 500
    res.status(status).json({ error: err.message || 'Internal error' })
})

export default router
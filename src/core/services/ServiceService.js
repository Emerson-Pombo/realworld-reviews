export default class ServiceService {
    constructor(models) {
        this.Service = models.Service
    }

    async create(data) {
        if (!data?.title || !data?.description) {
            const err = new Error('title and description are required')
            err.status = 400
            throw err
        }
        return this.Service.create(data)
    }

    async list() {
        return this.Service.findAll()
    }
}
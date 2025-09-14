export default class UserService {
    constructor(models) {
        this.User = models.User
    }

    async create(data) {
        // validação mínima aqui
        if (!data?.name || !data?.email) {
            const err = new Error('name and email are required')
            err.status = 400
            throw err
        }
        return this.User.create(data)
    }

    async list() {
        return this.User.findAll()
    }
}
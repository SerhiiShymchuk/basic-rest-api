import PostService from './postService.js'
class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body)
            res.status(200)
            return res.json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll()
            res.status(200)
            return res.json(posts)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params
            const post = await PostService.getOne(id)
            res.status(200)
            return res.json(post)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    async update(req, res) {
        try {
            const post = req.body
            const updatedPost = await PostService.update(post)
            return res.json(updatedPost)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id)
            return res.json(post)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

export default new PostController()
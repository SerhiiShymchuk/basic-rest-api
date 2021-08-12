import Post from './post.js'
class PostController {
    async create(req, res) {
        try {
            const { author, title, content, picture } = req.body
            const post = await Post.create({ author, title, content, picture })
            res.status(200)
            return res.json(post)
        } catch (error) {
            res.json(error)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await Post.find()
            res.status(200)
            return res.json(posts)
        } catch (error) {
            res.status(500)
            res.json(error)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params
            if (!id) res.status(400).json({message: 'такого поста не существует'})
            const post = await Post.findById(id)
            res.status(200)
            return res.json(post)
        } catch (error) {
            res.status(500)
            res.json(error)
        }
    }

    async update(req, res) {
        try {
            const post = req.body
            if (!post._id) res.status(400).json({message: 'такого поста не существует'})
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
            return res.json(updatedPost)
        } catch (error) {
            res.status(500)
            res.json(error)
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            if (!id) res.status(400).json({message: 'такого поста не существует'})
            const post = await Post.findByIdAndDelete(id)
            return res.json(post)
        } catch (error) {
            res.status(500)
            res.json(error)
        }
    }
}

export default new PostController
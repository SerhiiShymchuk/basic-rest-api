import Router from 'express'
import PostService from './postController.js'
const router = new Router()

router.get('/posts', PostService.getAll)
router.get('/posts/:id', PostService.getOne)
router.post('/posts', PostService.create)
router.put('/posts', PostService.update)
router.delete('/posts/:id', PostService.delete)

export default router
const express = require('express')

const router = express.Router()

const postsController = require('../../controllers/posts.controller')



router.get('/posts', postsController.get);
router.get('/posts/:id', postsController.getById);
router.post('/posts', postsController.create);
router.put('/posts/:id', postsController.update);
router.patch('/posts/:id/favorite', postsController.updateStatus);
router.delete('/posts/:id', postsController.remove);

module.exports = router
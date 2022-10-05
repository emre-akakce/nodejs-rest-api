const express = require('express')

const feedController = require("../controllers/feed")

const router = express.Router()
/**
 * @swagger
 * /feed/posts:
 *  get:
 *    tags:
 *      - posts
 *    description: Use to request all posts
 *    responses:
 *      '200':
 *        description: Got Posts
 */
router.get('/posts', feedController.getPosts)


/** 
* @swagger
* /feed/post:
*  post:
*     tags:
*       - posts
*     summary: Creates a new post.
*     consumes:
*       - application/json
*     parameters:
*       - in: body
*         name: post
*         description: The post to create.
*         schema:
*           type: object
*           required:
*             - title
*             - content
*           properties:
*             title:
*               type: string
*             content:
*               type: string
*     responses:
*       201:
*         description: Post created
*
*/
router.post('/post', feedController.createPost)

module.exports = router;
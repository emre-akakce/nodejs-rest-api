import express from "express";

const userService = require("../services/user")

const router = express.Router()


/**
 * @swagger
 * /users:
 *  get:
 *    tags:
 *      - users
 *    description: Use to request all users
 *    responses:
 *      '200':
 *        description: Got users
 */
router.get('', userService.getUsers)

/** 
* @swagger
* /users:
*  post:
*     tags:
*       - users
*     summary: Creates a new user.
*     consumes:
*       - application/json
*     parameters:
*       - in: body
*         name: user
*         description: The user to create.
*         schema:
*           type: object
*           required:
*             - name
*             - email
*             - age
*           properties:
*             name:
*               type: string
*             email:
*               type: string
*             age:
*               type: number
*     responses:
*       201:
*         description: User created
*
*/
router.post('', userService.createUser)

router.post('/login', userService.login)

module.exports = router
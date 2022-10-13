import jwt from 'jsonwebtoken';
require('dotenv').config();

export function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, 'TOKEN', (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

export function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5h' })
}
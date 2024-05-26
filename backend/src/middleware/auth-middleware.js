import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export function authMiddleware (req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ errors: 'forbiden' });
    req.username = decoded.username;
    req.id = decoded.id;
    next();
  })
}
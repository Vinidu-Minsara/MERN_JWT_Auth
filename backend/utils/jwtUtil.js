const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

function generateToken(user){
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role
    }
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
}

module.exports = { generateToken };
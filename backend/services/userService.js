const User = require('../models/user');
const bcrypt = require('bcrypt')
const { generateToken } = require('../utils/jwtUtil')

module.exports.createUser = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 12);
    const createdUser = new User({
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
        role: 'customer'
    });
    return await createdUser.save();
}

module.exports.loginUser = async (email, password) => {
    const existingUser = await User.findOne({ email });
    if (!existingUser){
        throw new Error('User not found');
    }
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid){
        throw new Error('Incorrect password');
    }
    return generateToken(existingUser);
}

module.exports.getAll = async () =>  {
    const users = await User.find().select('-password');
    return users;
}
const userService = require('../services/userService');

module.exports.signup = async (req, res, next) => {
    try{
        const userData = req.body;
        const user = await userService.createUser(userData);
        res.status(201).json({ user: user, message: 'User saved successfully' });
    }catch (err){
        console.log(err)
        res.status(500).json({ message: err.message });
    }
}

module.exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const token = await userService.loginUser(email, password);
        res.json({ token: token });
    }catch (err){
        res.status(401).json({ message: err.message });
    }
}

module.exports.getUsers = async (req, res, next) => {
    try {
        const users = await userService.getAll();
        res.json(users);
    }catch (err){
        res.status(500).json({ message: err.message });
    }
}
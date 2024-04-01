// Revisar todo

const User = require('../models/user.model');
const { createPass } = require('../utils/auth');
const jwt = require('jsonwebtoken');

const signup = async (req, res, next) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            res.status(400).json({ error: true, contenido: 'Usuario ya registrado' });
        }
        const passwordCrypt = createPass(req.body.password);
        const result = await User.create({
            username: req.body.name,
            email: req.body.email,
            password: passwordCrypt,

        });
        res.json({ error: false, contendio: result });
    } catch (error) {
        next(error)
    }
};

const login = async (req, res) => {
    res.json({
        token: jwt.sign({ user: req.user._id }, process.env.PASSPORT_SECRET, { expiresIn: '1d' }),
    });
};

const verify = async (req, res) => {
    res.json(req.user);
};

module.exports = {
    signup,
    login,
    verify
};
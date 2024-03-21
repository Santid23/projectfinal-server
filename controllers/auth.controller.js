// Revisar todo

const User = require('../models/user.model');
const { creaPass } = require('../utils/auth');
const jwt = require('jsonwebtoken');

const signup = async (req, res, next) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            res.status(400).json({ error: true, contenido: 'Usuario ya registrado' });
        }
        const passwordCrypt = creaPass(req.body.password);
        const result = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: passwordCrypt,
            avatar: req.body.avatar || undefined,
            role: req.body.role

        });
        res.json({ error: false, contendio: result });
    } catch (error) {
        next(error)
    }
};

const login = async (req, res) => {
    res.json({
        // MIRAR LO DE ADMIN
        token: jwt.sign({ user: req.user._id, role: 'Admin' }, process.env.SECRET_KEY, { expiresIn: '1d' }),
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
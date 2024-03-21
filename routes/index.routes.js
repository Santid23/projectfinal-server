const router = require('express').Router();
const competitionRoutes = require('./competition.routes');
const authRoutes = require('./auth.routes');

router.use('/competitions', competitionRoutes);
router.use('/auth', authRoutes);

module.exports = router
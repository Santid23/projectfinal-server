const { Router } = require('express');
const {
  getFavoriteCompetitions,
  likeCompetition,
  dislikeCompetition,
} = require('../controllers/user.controller');
const passport = require('passport');

const router = Router();

router.get(
  '/getFavoriteCompetitions',
  passport.authenticate('jwt', { session: false }),
  getFavoriteCompetitions
);
router.put(
  '/likeCompetition/:competition_id',
  passport.authenticate('jwt', { session: false }),
  likeCompetition
);
router.put(
  '/dislikeCompetition/:competition_id',
  passport.authenticate('jwt', { session: false }),
  dislikeCompetition
);

module.exports = router;
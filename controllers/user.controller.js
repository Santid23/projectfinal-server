const User = require('../models/user.model');

const getFavoriteCompetitions = async (req, res, next) => {
  try {
    const { _id: user_id } = req.user;
    const user = await User.findById(user_id).populate('favoriteCompetitions').exec();
    console.log(user);
    res.status(200).json(user.favoriteCompetitions);
  } catch (err) {
    next(err);
  }
};

const likeCompetition = async (req, res, next) => {
  try {
    const { _id: user_id } = req.user;
    const { competition_id } = req.params;

    const userUpdated = await User.findByIdAndUpdate(
      user_id,
      { $addToSet: { favoriteCompetitions: competition_id } },
      { new: true }
    );

    res.status(200).json(userUpdated);
  } catch (err) {
    next(err);
  }
};

const dislikeCompetition = async (req, res, next) => {
  try {
    const { _id: user_id } = req.user;
    const { competition_id } = req.params;

    const userUpdated = await User.findByIdAndUpdate(
      user_id,
      { $pull: { favoriteCompetitions: competition_id } },
      { new: true }
    );

    res.status(200).json(userUpdated);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getFavoriteCompetitions,
  likeCompetition,
  dislikeCompetition,
};

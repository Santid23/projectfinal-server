const { Types } = require('mongoose')
const Competition = require('../models/competition.model')

const listAllCompetitions = async (_req, res, next) => {
    try {
        const competitions = await Competition.find().sort({ createdAt: -1}).lean();
        res.status(200).json(competitions);
    } catch (err) {
        next(err);
    }
};

const getOneCompetition = async (req, res, next) => {
    try {
      const { competition_id } = req.params;
  
      if (!Types.ObjectId.isValid(competition_id)) {
        return res.status(400).json({ msg: 'Id competición invalida!' });
      }
  
      const competition = await Competition.findById(competition_id).select(
        '-createdAt -updatedAt'
      );
      if (!competition) {
        return res.status(404).json({ msg: 'Competición no encontrada!' });
      }
      res.status(200).json(competition);
    } catch (err) {
      next(err);
    }
  };
  
  const createOneCompetition = async (req, res, next) => {
    const {
      name,
      neighborhood,
      address,
      location,
      image,
      cuisine_type,
      operating_hours,
      reviews,
      //    MIRAR SI NO CONCUERDA ALGO
    } = req.body;
    try {
      if (!name || !neighborhood || !address || !location || !image) {
        return res.status(400).json({ msg: 'Please fill in all fields!' });
      }
  
      if (!cuisine_type || !operating_hours) {
        return res.status(400).json({ msg: 'Please fill in all fields!' });
      }
  
      await Competition.create({
        name,
        neighborhood,
        address,
        location,
        image,
        cuisine_type,
        operating_hours,
        reviews,
      });
  
      res.sendStatus(201);
    } catch (err) {
      next(err);
    }
  };
  
  const editOneCompetition = async (req, res, next) => {
    try {
      const { competition_id } = req.params;
      const {
        name,
        neighborhood,
        address,
        location,
        image,
        cuisine_type,
        operating_hours,
        reviews,
      } = req.body;
  
      if (!name || !neighborhood || !address || !location || !image) {
        return res.status(400).json({ msg: 'Please fill in all fields!' });
      }
  
      if (!cuisine_type || !operating_hours || !reviews) {
        return res.status(400).json({ msg: 'Please fill in all fields!' });
      }
  
      if (!Types.ObjectId.isValid(competition_id)) {
        return res.status(400).json({ msg: 'Id competición invalido!' });
      }
  
      const competition = await Competition.findByIdAndUpdate(
        competition_id,
        {
          name,
          neighborhood,
          address,
          location,
          image,
          cuisine_type,
          operating_hours,
          reviews,
        },
        { new: true }
      ).select('-createdAt -updatedAt');
  
      if (!restaurant) {
        return res.status(404).json({ msg: 'Competición no encontrada!' });
      }
  
      res.status(200).json(competition);
    } catch (err) {
      next(err);
    }
  };
  
  const deleteOneCompetition = async (req, res, next) => {
    try {
      const { competition_id } = req.params;
  
      if (!Types.ObjectId.isValid(competition_id)) {
        return res.status(400).json({ msg: 'Id competición invalido!' });
      }
      const competition = await Competition.findByIdAndDelete(competition_id);
      if (!competition) {
        return res.status(404).json({ msg: 'Competición no encontrada!' });
      }
      res.status(200).json({ msg: 'Se ha borrado correctamente la competición!' });
    } catch (err) {
      next(err);
    }
  };
  
  module.exports = {
    listAllCompetitions,
    getOneCompetition,
    createOneCompetition,
    editOneCompetition,
    deleteOneCompetition,
  };
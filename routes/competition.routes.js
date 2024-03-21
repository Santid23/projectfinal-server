const router = require('express').Router();
const {
    listAllCompetition,
    getOneCompetition,
    createOneCompetition,
    editOneCompetition,
    deleteOneCompetition,
} = require('../controllers/competition.controller');

router.get('/list', listAllCompetition);
router.get('/getOne/:competition_id', getOneCompetition);

router.get('/create', createOneCompetition);

router.put('/edit/:competition_id', editOneCompetition);

router.delete('/delete/:competition_id', deleteOneCompetition);

module.exports = router
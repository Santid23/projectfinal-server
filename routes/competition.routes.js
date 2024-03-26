const router = require('express').Router();
const {
    listAllCompetitions,
    getOneCompetition,
    createOneCompetition,
    editOneCompetition,
    deleteOneCompetition,
} = require('../controllers/competition.controller');

router.get('/list', listAllCompetitions);
router.get('/getOne/:competition_id', getOneCompetition);

router.post('/create', createOneCompetition);

router.put('/edit/:competition_id', editOneCompetition);

router.delete('/delete/:competition_id', deleteOneCompetition);

module.exports = router
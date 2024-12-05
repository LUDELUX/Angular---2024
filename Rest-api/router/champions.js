const express = require('express');
const router = express.Router();
const { championsController } = require('../controllers');
const { auth } = require('../utils');

router.get('/', championsController.getAllChampions);
router.get('/:id', championsController.getChampionDetails); 

router.post('/', auth(), championsController.createChampion); 
router.put('/:id', auth(), championsController.updateChampion); 
router.delete('/:id', auth(), championsController.deleteChampion); 

module.exports = router;
const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const championController = require('../controllers/championController');

router.get('/', championController.getAllChampions);
router.get('/:id', championController.getChampionById);

router.post('/', championController.createChampion);
router.put('/:id',  auth(), championController.editChampion);
router.delete('/:id',  auth(), championController.deleteChampion);
router.post('/:id/rate',  auth(), championController.rateChampion);

module.exports = router;

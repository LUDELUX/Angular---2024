const express = require('express');
const { isAuth } = require('../utils/middleware');
const championController = require('../controllers/championController');

const router = express.Router();

router.get('/', championController.getAllChampions);
router.get('/:id', championController.getChampionById);

router.post('/', isAuth, championController.createChampion);
router.put('/:id', isAuth, championController.editChampion);
router.delete('/:id', isAuth, championController.deleteChampion);
router.post('/:id/rate', isAuth, championController.rateChampion);

module.exports = router;
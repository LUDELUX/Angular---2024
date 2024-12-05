const express = require('express');
const championModel = require('../models/champion'); // Import your champion model
const router = express.Router();

// GET all champions
router.get('/', async (req, res) => {
  try {
    const champions = await championModel.find();
    res.status(200).json(champions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching champions', error: err });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const champion = await championModel.findById(req.params.id);
    if (!champion) {
      return res.status(404).json({ message: 'Champion not found' });
    }
    res.status(200).json(champion);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching champion', error: err });
  }
});

router.post('/', async (req, res) => {
  try {
    const newChampion = new championModel(req.body);
    await newChampion.save();
    res.status(201).json(newChampion);
  } catch (err) {
    res.status(500).json({ message: 'Error creating champion', error: err });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedChampion = await championModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedChampion) {
      return res.status(404).json({ message: 'Champion not found' });
    }
    res.status(200).json(updatedChampion);
  } catch (err) {
    res.status(500).json({ message: 'Error updating champion', error: err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedChampion = await championModel.findByIdAndDelete(req.params.id);
    if (!deletedChampion) {
      return res.status(404).json({ message: 'Champion not found' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: 'Error deleting champion', error: err });
  }
});

module.exports = router;
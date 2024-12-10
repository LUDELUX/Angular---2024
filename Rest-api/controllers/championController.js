const { championModel } = require('../models');

function getAllChampions(req, res, next) {
    championModel.find()
        .then(champions => {
            if (champions.length === 0) {
                return res.status(200).json({ message: 'No champions found' });
            }
            res.status(200).json(champions);
        })
        .catch(next);
}

function createChampion(req, res, next) {
    const { name, position, biography, photo } = req.body;
    
    championModel.create({ name, position,biography, photo})
    .then(champion => res.status(200).json(champion))
    .catch(next);
}

function getChampionById(req, res, next) {
    const { id } = req.params;
    championModel.findById(id)
        .then(champion => {
            if (!champion) {
                res.status(404).json({ message: 'Champion not found!' });
                return;
            }
            res.status(200).json(champion);
        })
        .catch(next);
}

function updateChampion(req, res, next) {
    const { id } = req.params;
    const { name, position, biography, photo } = req.body;

    championModel.findByIdAndUpdate(id, { name, position, biography, photo } )
        .then(updatedChampion => {
            if (!updatedChampion) {
                res.status(404).json({ message: 'Champion not found!' });
                return;
            }
            res.status(200).json(updatedChampion);
        })
        .catch(next);
}

function deleteChampion(req, res, next) {
    const { id } = req.params;

    championModel.findByIdAndDelete(id)
        .then(deletedChampion => {
            if (!deletedChampion) {
                res.status(404).json({ message: 'Champion not found!' });
                return;
            }
            res.status(200).json({ message: 'Champion successfully deleted!' });
        })
        .catch(next);
}

module.exports = {
    getAllChampions,
    getChampionById,
    createChampion,
    updateChampion,
    deleteChampion
};
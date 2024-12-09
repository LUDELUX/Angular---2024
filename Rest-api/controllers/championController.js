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

function createChampion(req, res, next) {
    const { name, photo, role, location, position } = req.body;
    const { _id: userId } = req.user;

    championModel.create({ name, photo, role, location, position, createdBy: userId })
        .then(champion => res.status(201).json(champion))
        .catch(next);
}

function editChampion(req, res, next) {
    const { id } = req.params;
    const { name, photo, role, location, position } = req.body;
    const { _id: userId } = req.user;

    championModel.findOneAndUpdate(
        { _id: id, createdBy: userId },
        { name, photo, role, location, position },
        { new: true, runValidators: true }
    )
        .then(champion => {
            if (!champion) {
                res.status(403).json({ message: 'Not authorized to edit this champion!' });
                return;
            }
            res.status(200).json(champion);
        })
        .catch(next);
}
function deleteChampion(req, res, next) {
    const { id } = req.params;
    const { _id: userId } = req.user;

    championModel.findOneAndDelete({ _id: id, createdBy: userId })
        .then(deleted => {
            if (!deleted) {
                res.status(403).json({ message: 'Not authorized to delete this champion!' });
                return;
            }
            res.status(200).json({ message: 'Champion deleted successfully!' });
        })
        .catch(next);
}

function rateChampion(req, res, next) {
    const { id } = req.params;
    const { rating } = req.body;
    const { _id: userId } = req.user;

    championModel.findByIdAndUpdate(
        id,
        { $push: { ratings: { userId, rating } } },
        { new: true }
    )
        .then(updatedChampion => res.status(200).json(updatedChampion))
        .catch(next);
}

module.exports = {
    getAllChampions,
    getChampionById,
    createChampion,
    editChampion,
    deleteChampion,
    rateChampion
};
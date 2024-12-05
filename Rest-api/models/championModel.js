const mongoose = require('mongoose');

const championSchema = new mongoose.Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    role: { type: String, required: true, enum: ['Assassin', 'Mage', 'Tank', 'Support', 'Marksman', 'Fighter'] },
    location: { type: String, required: true },
    position: { type: String, required: true },
    ratings: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            rating: { type: Number, min: 1, max: 5 }
        }
    ],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

const championModel = mongoose.model('Champion', championSchema);
module.exports = championModel;
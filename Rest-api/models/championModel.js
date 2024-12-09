const mongoose = require('mongoose');

const championSchema = new mongoose.Schema({
    name: { type: String, required: false },
    photo: { type: String, required: false },
    role: { type: String, required: false, enum: ['Assassin', 'Mage', 'Tank', 'Support', 'Marksman', 'Fighter'] },
    location: { type: String, required: false },
    position: { type: String, required: false },
    ratings: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            rating: { type: Number, min: 1, max: 5 }
        }
    ],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }
}, { timestamps: false });

const championModel = mongoose.model('Champion', championSchema);
module.exports = championModel;
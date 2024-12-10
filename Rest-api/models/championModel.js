const mongoose = require('mongoose');

const championSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    biography: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Champion', championSchema);
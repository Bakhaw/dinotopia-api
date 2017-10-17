const mongoose = require('mongoose');

const newDino = new mongoose.Schema({
    name: { type: String, required: true },
    size: { type: String, required: true },
    food: { type: String, required: true },
    image: {type: String}
}
);

module.exports = mongoose.model('Dino', newDino);

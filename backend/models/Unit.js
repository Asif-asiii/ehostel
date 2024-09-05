const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
    unitName: {
        type: String,
        required: true
    },
});

const Unit = mongoose.model('Unit', unitSchema);

module.exports = Unit;

const mongoose = require('mongoose');

const exSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        amount: {type: Number, required: true},
        category: {type: String, required: true},
        date: {type: String, required: true}
    },
    {timestamps: true},
);

module.exports = mongoose.model('expense',exSchema)
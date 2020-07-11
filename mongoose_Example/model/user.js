const { Schema, model } = require('mongoose');

const userSchema = users = new Schema({
    username: {
        type: String,
        unique: true, // Permite que no se repitan los username
        required: true // Permite que username sea esencial o necesario
    },
    password: {
        type: String
    },
    date: {
        type: Date,
        default: new Date()
    },
    name: String
});

module.exports = model('User', userSchema);
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Pode ser apenas 'user' ou 'admin'
        default: 'user'          // Por padrão, todo novo usuário será 'user'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);

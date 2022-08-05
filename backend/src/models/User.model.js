const mongoose = require('mongoose')

const User = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: String, default: 'client' },
    isActive: { type: Boolean, default: true },
    password: { type: String, required: true }
}, {
    timestamps: true,
    versionKey: false,
}
);

module.exports = mongoose.model('User', User);
const mongoose = require('mongoose')

const User = mongoose.Schema({
    
    email: { type: String, required: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    document: {type: Number, required: true},
    tel: {type: Number, required: true},
    role: {type: String, default: 'cliente'},
    isActive: { type: Boolean, default: true },
    password: { type: String, required: true }
}, {
    timestamps: true,
    versionKey: false,
}
);

module.exports = mongoose.model('User', User);
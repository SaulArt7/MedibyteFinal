const mongoose = require('mongoose')
const { Schema } = mongoose

const formSchema = new Schema(
    {
        fullName: {type: String, required: true},
        email: {type: String, required: true},
        topic: {type: String, required: true},
        message: {type: String, required: true},
        isActive: {type: Boolean, default: true},
        condition: {type: String, required: true},
        answer: {type: String, required: true}
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('Form', formSchema)
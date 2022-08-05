const mongoose = require('mongoose');
const { Schema } = mongoose;

// Construir el schema o la colección
const productSchema = new Schema(
        {
                name: { type: String, required: true },
                price: { type: Number, required: true },
                description: { type: String, default: "El usuario no añadió ninguna descripción" },
                stock: { type: Number, required: true },
                image: { type: String, required: true },
        },
        {
                timestamps: true,
                versionKey: false
        })

// Exportar el modelo(Colección)
module.exports = mongoose.model('Product', productSchema)
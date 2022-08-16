const mongoose = require('mongoose');
const { Schema } = mongoose;

// Construir el schema o la colección
const accessSchema = new Schema(
    {
        idWorker: { type: String, required: true },
        USUESTADO: { type: Number, required: true },
        nameWorker: { type: String, required: true, default: "Juan Villareal" },
        emailWorker: { type: String, required: true , default: "prueba@mail.com"},
        fechaHoraEvento: { type: Date },
        tipoEvento: { type: String, default: "EntradaDefecto" },
        accessGiven: { type: Boolean,  default: "Entrada"},
        madeAccess: { type: Boolean, default: "Correcto" }
    },
    {
        timestamps: true,
        versionKey: false
    })

// Exportar el modelo(Colección)
module.exports = mongoose.model('Access', accessSchema)
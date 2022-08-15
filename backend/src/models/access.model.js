const mongoose = require('mongoose');
const { Schema } = mongoose;

// Construir el schema o la colección
const accessSchema = new Schema(
    {
        idBiometric: { type: String, required: true, default: "777" },
        idWorker: { type: String, required: true },
        USUESTADO: { type: Number, required: true },
        USUDESCRI: { type: String, required: true, default: "Juan Villareal" },
        USUEMAIL: { type: String, required: true , default: "prueba@mail.com"},
        fechaHoraEvento: { type: Date },
        tipoEvento: { type: String, required: true, default: "EntradaDefecto" },
        accessGiven: { type: Boolean, required: true , default: "Entrada"},
        madeAccess: { type: Boolean, required: true, default: "Correcto" }
    },
    {
        timestamps: true,
        versionKey: false
    })

// Exportar el modelo(Colección)
module.exports = mongoose.model('Access', accessSchema)
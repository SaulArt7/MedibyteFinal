const mongoose = require('mongoose');
const { Schema } = mongoose;

// Construir el schema o la colección
const workerSchema = new Schema(
    {
        idBiometric: { type: String, required: true, default: "777" },
        idWorker: { type: Number, required: true },
        USUESTADO: { type: Number, required: true, default: 4 },
        nameWorker: { type: String, required: true, default: "Nombre por defecto" },
        emailWorker: { type: String, required: true, default: "prueba@mail.com" },
        typeWorker: { type: String, required: true, default: "Asistencial" },
        tituloWorker: { type: String, required: true, default: "Especialista" },
        grupoProfesionW: { type: String, required: true, default: "Cirugía General" },
        telefonoW: { type: Number, required: true, default: 3121367290 },
        isActive: { type: Boolean, required: true, default: true },
        servicioW: { type: String, required: true, default: 'Urgencias' }
    },
    {
        timestamps: true,
        versionKey: false
    })

// Exportar el modelo(Colección)
module.exports = mongoose.model('Worker', workerSchema)

// Modelo de Petición en Insomnia:
// {
// "idBiometric":"555", 
// "idWorker": 10, 
// "USUESTADO": 1, 
// "nameWorker":"Miguel Villamarín", 
// "emailWorker":"miguel@mail.com", 
// "typeWorker":"Asistencial", 
// "tituloWorker":"Especialista", 
// "grupoProfesionW":"Cirugía General",
// "telefonoW":3121367290, 
// "isActive":true, 
// "servicioW":"Urgencias"
// } 
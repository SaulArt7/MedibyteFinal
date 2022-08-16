const express = require('express')
const router = express.Router()
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Modelo que vamos a utilizar
const Cita = require('../models/Cliente.model') // Nuestro modelo de la colección

const { request, response } = require('express')
const { findOne } = require('../models/Product.model')

router.get("/get-all", async (request, response) => {

    const cita = await Cita.find() // find es un método 'model' que es de Monggose.
    // así como findByID(), Save() // Métodos de mongoose.
    return response.status(200).json({ cita })

})

// Crear una Cita
router.post("/create", async (request, response) => {
    try {
        const citaToSave = new Cita(request.body)
        await citaToSave.save()
        return response.status(201).json({ status: "La cita fue creada exitosamente", citaToSave })
        //if (res) --- y sino, el siguiente return, por si no existe.

    } catch (error) {
        console.log(error); // Se envía el error para verlo
        return response.status(400).json({ status: "Code error, no se pudo crear la Cita en la DB" })
    }
})


router.get("/:id", async (request, response) => {
    try {
        const id = request.params.id
        const user = await Cita.findById(id)
        return response.status(200).json({ user })

    } catch (error) {
        console.log("Error:", error)
        return response.status(400).json({ msg: "Code error" })
    }
})

// // Actualizar un documento de un Usuario:

router.put("/update-cita/:id", async (request, response) => {
    try {
        const id = request.params.id
        const body = request.body
        await Cita.findByIdAndUpdate(id, { $set: body })
        // aqui podemos guardarlo en constante para saber si fue actualizado o nó
        return response.status(200).json({ status: "Producto Actualizado" })
    } catch (error) {
        console.log("Error:", error)
        return response.status(400).json({ msg: "Code error" })
    }

})

// // Eliminar el documento del Usuario (El más fácil)

router.delete("/delete-cita/:id", async (request, response) => {
    try {
        const id = request.params.id
        await Cita.findByIdAndDelete(id) // Más exacto con Delete, y más rápida que findByIdAndRemove
        // aqui podemos guardarlo en constante para saber si fue actualizado o nó
        return response.status(200).json({ status: "Usuario Eliminado" })
    } catch (error) {
        console.log("Error:", error)
        return response.status(400).json({ msg: "Code error" })
    }

})

module.exports = router // Exporta un objeto con las funciones que creamos
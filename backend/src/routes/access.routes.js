const express = require('express')
const router = express.Router()
// const bcryptjs = require('bcryptjs')
// const jwt = require('jsonwebtoken')

// Modelo que vamos a utilizar
const Access = require('../models/access.model') // Nuestro modelo de la colección

const { request, response } = require('express')
const { findOne } = require('../models/access.model')

router.get("/get-all-accessP", async (request, response) => {
    try {
        const accessP = await Access.find() // find es un método de Monggose.
        // así como findByID(), Save() // Métodos de mongoose.
        return response.status(200).json({ accessP })
    } catch (error) {
        console.log("Error:", error)
        return response.status(400).json({ msg: "Error captado en try de ruta (backend) de obtener todos los accesos" })
    }
})

// Crear un Registro de Acceso
router.post("/create-access", async (request, response) => {
    try {
        const accessToSave = new Access(request.body)
        await accessToSave.save()
        return response.status(201).json({ status: "El accesso fue creado exitosamente", accessToSave })
        //if (res) --- y sino, el siguiente return, por si no existe.
    } catch (error) {
        console.log(error); // Se envía el error para verlo
        return response.status(400).json({ status: "Code error, no se pudo crear el Acceso en la DB" })
    }
})

router.get("/:id", async (request, response) => {
    try {
        const id = request.params.id
        const user = await Access.findById(id)
        return response.status(200).json({ user })

    } catch (error) {
        console.log("Error:", error)
        return response.status(400).json({ msg: "Error captado en try de ruta get con parámetro id" })
    }
})

router.get("/biometric/:idB", async (request, response) => {
    try {
        const idB = request.params.idB
        console.log(idB)
        console.log('Llega a esta línea');
        const user = await Access.find({"idBiometric":idB},{"idWorker":1,"USUDESCRI":1,"USUESTADO":1,"_id":0});
        return response.status(200).json({ user })

    } catch (error) {
        console.log("Error:", error)
        return response.status(400).json({ msg: "Error captado en try de ruta get con parámetro idB" })
    }
})


// // Actualizar un documento de un Usuario:

router.put("/update-access/:id", async (request, response) => {
    try {
        const id = request.params.id
        const body = request.body
        await Access.findByIdAndUpdate(id, { $set: body })
        // aqui podemos guardarlo en constante para saber si fue actualizado o nó
        return response.status(200).json({ status: "Accesso Actualizado" })
    } catch (error) {
        console.log("Error:", error)
        return response.status(400).json({ msg: "Error captado en try de ruta put para actualizar registro con parámetro id" })
    }
})

// // Eliminar el documento del Acceso (El más fácil)
router.delete("/delete-access/:id", async (request, response) => {
    try {
        const id = request.params.id
        await Access.findByIdAndDelete(id) // Más exacto con Delete, y más rápida que findByIdAndRemove
        // aqui podemos guardarlo en constante para saber si fue actualizado o nó
        return response.status(200).json({ status: "Acceso Eliminado" })
    } catch (error) {
        console.log("Error:", error)
        return response.status(400).json({ msg: "Error captado en try de ruta delete-access para eliminar registro con parámetro id" })
    }

})

// // Login
// router.post("/login", async (request, response) => {
//     try {
//         const inputMail = request.body.email
//         const inputPassword = request.body.password

//         // 1. Verificar si el Usuario existe:
//         let user = await User.findOne({ email: inputMail })

//         if (user) {
//             console.log('Usuario existe')
//             console.log(user)
//             const isEqual = await bcryptjs.compare(inputPassword, user.password)
//             console.log(isEqual)
//             if (isEqual) {
//                 console.log('Contraseña igual')
//                 user = user._doc
//                 delete user.password
//                 //Creación del token
//                 const token = jwt.sign({ user }, 'llavesecreta')
//                 return response.status(200).json({ status: 'Usuario Logeado', token })
//             }
//         }
//         return response.status(403).json({ status: "Credenciales incorrectas" })

//     } catch (error) {
//         console.log(error); // Se envía el error para verlo
//         return response.status(400).json({ status: "Code error" })
//     }
// })

module.exports = router // Exporta un objeto con las funciones que creamos
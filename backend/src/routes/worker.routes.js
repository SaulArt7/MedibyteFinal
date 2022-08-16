const express = require('express')
const router = express.Router()
// const bcryptjs = require('bcryptjs')
// const jwt = require('jsonwebtoken')

// Modelo que vamos a utilizar
const Worker = require('../models/worker.model')// Mi Modelo de la colección

const { request, response } = require('express')
const { findOne } = require('../models/worker.model')

router.get("/get-all-workers", async (request, response) => {
    try {
        const workers = await Worker.find() // find es un método de Monggose.
        // así como findByID(), Save() // Métodos de mongoose.
        return response.status(200).json({ workers })
    } catch (error) {
        console.log("Error:", error)
        return response.status(400).json({ msg: "Error captado en try de ruta (backend) de obtener todos los accesos" })
    }
})

// Crear un Registro de Worker
router.post("/create-worker", async (request, response) => {
    try {
        const workerToSave = new Worker(request.body)
        await workerToSave.save()
        return response.status(201).json({ status: "El worker fue creado exitosamente", workerToSave })
        //if (res) --- y sino, el siguiente return, por si no existe.
    } catch (error) {
        console.log(error); // Se envía el error para verlo
        return response.status(400).json({ status: "Code error, no se pudo crear el Acceso en la DB" })
    }
})

router.get("/:id", async (request, response) => {
    try {
        const id = request.params.id
        const worker = await Worker.findById(id)
        return response.status(200).json({ worker })

    } catch (error) {
        console.log("Error:", error)
        return response.status(400).json({ msg: "Error captado en try de ruta get con parámetro id" })
    }
})

router.get("/biometric/:idB", async (request, response) => {
    try {
        const idB = request.params.idB
        console.log(idB)
        // const worker = await Worker.find({ "idBiometric": idB }, { "idWorker": 1, "USUDESCRI": 1, "USUESTADO": 1, "_id": 0 });
        const worker = await Worker.find({ "idBiometric": idB });
        // console.log(worker[0].idWorker);
        if (worker[0]) {
            // console.log('Usuario recibido')
            // console.log(worker);        
            // console.log(typeof (worker));

            response.status(200).json({ "idBiometric": worker[0].idBiometric, "_id": worker[0]._id, "idworker": worker[0].idWorker, "USUESTADO": worker[0].USUESTADO, "nameWorker": worker[0].nameWorker, "emailWorker": worker[0].emailWorker, })

            //
            // Prueba con POST desde Backend del acceso:
            //
            const Access = require('../models/access.model')
            try {
                const accessToSave = new Access({ idWorker: worker[0].idWorker, USUESTADO: worker[0].USUESTADO, nameWorker: worker[0].nameWorker, emailWorker: worker[0].emailWorker, tipoEvento: "Entrada", accessGiven: true, madeAccess: true })
                await accessToSave.save()
                return;
                // response.status(201).json({ status: "El accesso fue creado exitosamente", accessToSave })
                //if (res) --- y sino, el siguiente return, por si no existe.
            } catch (error) {
                console.log(error); // Se envía el error para verlo
                // response.status(400).json({ status: "Code error, no se pudo crear el Acceso en la DB" })
            }
            //
            // Fin de Prueba con POST desde Backend del acceso:
            //            
        };
        return response.status(301).json({ worker })
        // if (worker == []) { 'Recibió array vacío' }
        // console.log(worker[0].idWorker);      
        // if (!worker.idWorker) {
        //     console.log('Usuario no recibido')
        //     return response.status(301).json({ worker })
        // };
    } catch (error) {
        console.log("Error:", error)
        return response.status(400).json({ msg: "Error captado en try de ruta get con parámetro idB" })
    }
})

// // Actualizar un documento de un Usuario:

router.put("/update-worker/:id", async (request, response) => {
    try {
        const id = request.params.id
        const body = request.body
        await Worker.findByIdAndUpdate(id, { $set: body })
        // aqui podemos guardarlo en constante para saber si fue actualizado o nó
        return response.status(200).json({ status: "Worker Actualizado" })
    } catch (error) {
        console.log("Error:", error)
        return response.status(400).json({ msg: "Error captado en try de ruta put para actualizar registro con parámetro id" })
    }
})

// // Eliminar el documento del Acceso (El más fácil)
router.delete("/delete-worker/:id", async (request, response) => {
    try {
        const id = request.params.id
        await Worker.findByIdAndDelete(id) // Más exacto con Delete, y más rápida que findByIdAndRemove
        // aqui podemos guardarlo en constante para saber si fue actualizado o nó
        return response.status(200).json({ status: "Acceso Eliminado" })
    } catch (error) {
        console.log("Error:", error)
        return response.status(400).json({ msg: "Error captado en try de ruta delete-worker para eliminar registro con parámetro id" })
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
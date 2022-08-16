const express = require('express')
const router = express.Router()
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Modelo que vamos a utilizar
const Product = require('../models/Product.model') // Nuestro modelo de la colección

const { request, response } = require('express')
const { findOne } = require('../models/Product.model')

router.get("/get-all", async (request, response) => {

    const products = await Product.find() // find es un método 'model' que es de Monggose.
    // así como findByID(), Save() // Métodos de mongoose.
    return response.status(200).json({ products })

    // try {
    //     const user = await User.find()
    //     return response.status(200).json({ user })
    // } catch (error) {

    //     console.log("Error:", error)
    //     return response.status(400).json({ msg: "Code error" })
    // }
})

// Crear un Producto
router.post("/create", async (request, response) => {
    try {
        const productToSave = new Product(request.body)
        await productToSave.save()
        return response.status(201).json({ status: "El producto fue creado exitosamente", productToSave })
        //if (res) --- y sino, el siguiente return, por si no existe.

    } catch (error) {
        console.log(error); // Se envía el error para verlo
        return response.status(400).json({ status: "Code error, no se pudo crear el Usuario en la DB" })
    }
})


router.get("/:id", async (request, response) => {
    try {
        const id = request.params.id
        const user = await Product.findById(id)
        return response.status(200).json({ user })

    } catch (error) {
        console.log("Error:", error)
        return response.status(400).json({ msg: "Code error" })
    }
})

// // Actualizar un documento de un Usuario:

router.put("/update-product/:id", async (request, response) => {
    try {
        const id = request.params.id
        const body = request.body
        await Product.findByIdAndUpdate(id, { $set: body })
        // aqui podemos guardarlo en constante para saber si fue actualizado o nó
        return response.status(200).json({ status: "Producto Actualizado" })
    } catch (error) {
        console.log("Error:", error)
        return response.status(400).json({ msg: "Code error" })
    }

})

// // Eliminar el documento del Usuario (El más fácil)

router.delete("/delete-product/:id", async (request, response) => {
    try {
        const id = request.params.id
        await Product.findByIdAndDelete(id) // Más exacto con Delete, y más rápida que findByIdAndRemove
        // aqui podemos guardarlo en constante para saber si fue actualizado o nó
        return response.status(200).json({ status: "Producto Eliminado" })
    } catch (error) {
        console.log("Error:", error)
        return response.status(400).json({ msg: "Code error" })
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
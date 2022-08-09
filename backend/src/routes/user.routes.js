const express = require('express')
const bcryptjs = require('bcryptjs')
const router = express.Router()
const jwt = require('jsonwebtoken')

// Modelo que vamos a utilizar
const User = require('../models/User.model')
const { request, response } = require('express')
const { findOne } = require('../models/User.model')

// Crear un usuario
router.post("/sign-up", async (request, response) => {
    try {
        
       // Colocar aquí la validación de que ya existe o no usuario con Email que se intenta registrar: Es un método find, a una constante.
       const isExist = await User.find({email: request.body.email})

       console.log(isExist)

       if(isExist.length > 0){
           return response.status(400).json({status: "El correo ya fue registrado"})
       }
        
        const password = await bcryptjs.hash(request.body.password, 10) // Dos parámetros    
        const user = User({ ...request.body, password })
        const res = await user.save()

        return response.status(201).json({ msg: "Usuario fue creado exitosamente" })
        //if (res) --- y sino, el siguiente return, por si no existe.

    } catch (error) {
        console.log(error); // Se envía el error para verlo
        return response.status(403).json({ status: "code error" })
    }
})

// Ejemplo de Datos para Json del Body en el request:
// {
// 	"username":"DayanaGil",
//   "name":"Dayana",
//   "lastName":"Gil A.",
//   "email":"dayagil@mail.com",
//   "password":"12345"
// }

router.get("/get-users", async (request, response) => {

    try {
        const user = await User.find()
        return response.status(200).json({ user })
    } catch (error) {

        console.log("Error:", error)
        return response.status(400).json({ msg: "Code error" })
    }
})

router.get("/:id", async (request, response) => {
    try {
        const id = request.params.id
        const user = await User.findById(id)
        return response.status(200).json({ user })

    } catch (error) {
        console.log("Error:", error)
        return response.status(400).json({ msg: "Code error" })
    }
})

// Actualizar un documento de un Usuario:

router.put("/update-user/:id", async (request, response) => {
    try {
        const id = request.params.id
        const body = request.body
        await User.findByIdAndUpdate(id, { $set: body })
        // aqui podemos guardarlo en constante para saber si fue actualizado o nó
        return response.status(200).json({ status: "Usuario Actualizado" })
    } catch (error) {
        console.log("Error:", error)
        return response.status(400).json({ msg: "Code error" })
    }

})

// Eliminar el documento del Usuario (El más fácil)

router.delete("/delete-user/:id", async (request, response) => {
    try {
        const id = request.params.id
        await User.findByIdAndRemove(id)
        // aqui podemos guardarlo en constante para saber si fue actualizado o nó
        return response.status(200).json({ status: "Usuario Eliminado" })
    } catch (error) {
        console.log("Error:", error)
        return response.status(400).json({ msg: "Code error" })
    }

})

// Login
router.post("/login", async (request, response) => {
    try {
        const inputMail = request.body.email
        const inputPassword = request.body.password

        // 1. Verificar si el Usuario existe:
        let user = await User.findOne({ email: inputMail }) // Trae registro de las actualizaciones del documento 

        if (user) {
            console.log('Usuario existe')
            console.log(user)
            const isEqual = await bcryptjs.compare(inputPassword, user.password)
            console.log(isEqual)
            // 2. Verificar si la contraseña es igual:
            if (isEqual) {
                console.log('Contraseña igual')
                data = user._doc // Porque el usuario trae data que no se usará, así accedemos sólo a nuestros datos, entonces trasnsformamos a un objeto plano Json.
                delete data.password
                //Creación del token
                const token = jwt.sign({data},'llavesecreta') // Se prefiere extensa, con carácteres especiales.
                return response.status(200).json({status: 'Usuario Logeado', token})
            }
            
            console.log('Contraseña Incorrecta')
            return response.status(403).json({status: "Contraseña Incorrecta"})
            
        }
        return response.status(403).json({status: "Usuario no existe"})
        
    } catch (error) {
        console.log(error); // Se envía el error para verlo por consola
        return response.status(400).json({ status: "Code error" })
    }
})
module.exports = router
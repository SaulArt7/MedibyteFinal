const express = require('express')
const router = express.Router()


//modelo de form
const Form =require ('../models/form.model')
const { request, response } = require('express')

//rutas
//obtener todas las solicitudes
router.get('/requests', async (request,response) => {
    const forms = await Form.find()
    return response.status(200).json({forms})
})

//crear solicitud
router.post('/create', async (request, response) => {

try {
    
    // crear el mensaje
    const newForm = new Form(request.body)
    await newForm.save()

    return response.status(201).json({status: "mensaje enviado exitosamente", newForm})

} catch (error) {
    console.log(error)
    return response.status(400).json({status: "code error" })
}



})

router.put('/update/:id', async (request, response) => {
    const id = request.params.id

    const updated = await Form.findByIdAndUpdate(id, {$set: request.body})
    return response.status(201).json({status: "formulario actualizado" })
})


router.delete('/delete/:id', async(request, response) => {
    const id = request.params.id
    await Form.findByIdAndDelete(id)
    response.status(200).json({status: "Formulario eliminado"})
})


module.exports = router
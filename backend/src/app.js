const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')



const app = express() // Constante para utilizar las funciones de express

dotenv.config() // Para traer las variables de entorno.
const port = process.env.PORT || 5001 // Constante para puerto desde .env o en 5001 (lo usará si no exite el archivo .env o no encuentra la variable) ***Confirmar

// Nuestro backend tiene tres partes principales:
// Conexión a la Base de datos
// Módulos que va usar express
// Rutas

app.use(morgan('dev')) // Para visualizar las peticiones que estamos haciendo
app.use(express.json()) // Para convertir las peticiones (request) que enviamos en el Body: enviamos objetos.
app.use(cors())
// app.use(cors({origin: {'http://localhost:4200'}})) // Para indicar desde que direcciones se pueden hacer peticiones a la API, si no ponemos ninguna: Permite todas.

require('./database.js')


const productRoutes=require('./routes/product.routes')
const userRoutes=require('./routes/user.routes')
const accessRoutes=require('./routes/access.routes')
const workerRoutes=require('./routes/worker.routes')

app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/accessP',accessRoutes)
app.use('/api/workers',workerRoutes)
app.use('/api/form', require('./routes/form'))


app.listen(port, () => {
    console.log('Api corriendo en el puerto', port)
})

// Módulos y Dependencias instaladas
// $ npm i express mongoose jsonwebtoken cors bcryptjs dotenv
const dotenv = require('dotenv')
const mongoose = require('mongoose')

// Uri de la Base de datos llega como: process.env.MONGO_ATLAS_DB para: 
// Conexión hacia la Base de datos
// Exportación

dotenv.config()
mongoose.connect(process.env.MONGO_ATLAS_DB,{useUnifiedTopology:true})
    .then(() => console.log('Conexion al Cluster con la DB definida fue exitosa'))
    .catch((error) => console.log('Error al conectarse a la DB', error));

// Exportación
module.exports = mongoose

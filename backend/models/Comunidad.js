const mongoose = require('mongoose');

const comunidadSchema = mongoose.Schema({
    calle: {
        type: String
    }, 
    cp: {
        type: String
    },  
    ng: {
        type: Number
    }, 
    coordenadas: {
        type: String
    }, 
    fechaCreacion:{
        type: Date,
        default:Date.now()
    }

})

module.exports = mongoose.model('Comunidades', comunidadSchema);

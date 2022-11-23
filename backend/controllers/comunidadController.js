const Comunidad = require("../models/Comunidad");


exports.crearComunidad = async (req, res) => {
    try {
        let comunidad;
        //Creamos nuestra comunidad

        comunidad = new Comunidad(req.body);
        await  comunidad.save();
        res.send( comunidad);
        
    } catch (error) {
        console.log(error);
        res.status(500).send(' Error') 
    }
}
exports.obtenerComunidades = async (req, res) =>{
    try {
        const comunidad = await Comunidad.find();
        res.json(comunidad);
        
    } catch (error) {
        console.log(error);
        res.status(500).send(' Error') 
        
    }
}
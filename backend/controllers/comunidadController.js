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

exports.actualizarComunidades = async(req, res) =>{
    try {
        const {calle, cp, ng, coordenadas} = req.body;
        let comunidad = await Comunidad.findById(req.params.id);
        if(!comunidad) {
            res.status(404).json({msh: 'No existe esta comunidad'})
        }
        comunidad.calle = calle;
        comunidad.cp = cp;
        comunidad.ng = ng;
        comunidad.coordenadas = coordenadas;

        comunidad = await Comunidad.findOneAndUpdate({_id:req.params.id},comunidad, {new: true} )
        res.json(comunidad);
        
    } catch (error) {
        console.log(error);
        res.status(500).send(' Error') 
        
    }
}
exports.obtenerComunidad = async(req, res) =>{
    try {
  
        let comunidad = await Comunidad.findById(req.params.id);
        if(!comunidad) {
            res.status(404).json({msh: 'No existe esta comunidad'})
        }
       
        res.json(comunidad);
        
    } catch (error) {
        console.log(error);
        res.status(500).send(' Error') 
        
    }
}

exports.filtrarComunidadesCp = async(req, res) =>{
    try {
        let comunidad = await Comunidad.find({"cp": {$regex: new RegExp(`^${req.params.cp}`)}});
       
       if(!comunidad){
        res.status(404).json({msh: 'No existe esta comunidad'})
       }
        res.json(comunidad);
        
    } catch (error) {
        console.log(error);
        res.status(500).send(' Error') 
        
    }
}


exports.eliminarComunidad = async(req, res) =>{
    try {
  
        let comunidad = await Comunidad.findById(req.params.id);
        if(!comunidad) {
            res.status(404).json({msh: 'No existe esta comunidad'})
        }

        await Comunidad.findOneAndRemove({_id:req.params.id})

        res.json({msg: 'Producto eliminado con exito'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send(' Error') 
        
    }
}



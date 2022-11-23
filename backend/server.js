const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
const bp = require('body-parser');
// const mongodb = require('mongodb');


//Creamos el servidor
const app = express();
//Conectamos a la base de datos
conectarDB();
app.use(express.json());
app.use(cors());
app.use('/api/comunidades', require('./routes/comunidad'));

app.listen(1234), () =>{
     console.log('Esto va que te cagas');
 };




//Antiguo, solo por si lo necesito.
// const uri = 'mongodb+srv://fatimauserdb: v5d6W5t6bijQc3BD @cluster0.mhcsgrc.mongodb.net/?retryWrites=true&w=majority';

// mongodb.MongoClient.connet(uri, {useUnifiedTopology: true}, function(err, data){
//     if(err)throw err;
//     let db = data.db('catubelos');
//     db.collection('nuevaComunidad').find({}).toArray(function(err, result){
//        nuevaComunidad = result;
//     })
// });


// const app = express();
// const corsOp = {
//     origin: 'http://localhost:4200',
//     optionSuccessStatus:200
// }



// const comuCats = [
//     {_id:'12585', calle:'lo que sea', cp: ' el 8', ng:'7'  },
//     {_id:'12558', calle:'sal ', cp: ' el 8', ng:'7' },
//     { _id:'125698', calle:'entra', cp: ' el 8', ng:'7' } 
// ]

// app.use(bp.json());
// const api = express.Router();

// api.use(cors());

// api.get('/comuCats', cors(corsOp),(req, res)=>{
//     res.json(comuCats);
// });

// api.post('/comuCat', cors(corsOp),(req, res)=>{
//     comuCats.push(req.body);
//     res.json(req.body);
// });

// app.use('/api', api);


// app.listen(1234);
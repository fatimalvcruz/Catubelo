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





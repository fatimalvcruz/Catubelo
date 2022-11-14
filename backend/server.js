const express = require('express');
const cors = require('cors');
const bp = require('body-parser');




const app = express();
const corsOp = {
    origin: 'http://localhost:4200',
    optionSuccessStatus:200
}



const comuCats = [
    {_id:'12585', coordenadas:'lo que sea'  },
    {_id:'12558', coordenadas:'otro lo que sea'  },
    { _id:'125698', coordenadas:'Este es otro' } 
]

app.use(bp.json());
const api = express.Router();

api.get('/comuCats', cors(corsOp),(req, res)=>{
    res.json(comuCats);
});

api.post('/comuCat', cors(corsOp),(req, res)=>{
    comuCats.push(req.body);
    res.sendStatus(200);
});

app.use('/api', api);


app.listen(1234);
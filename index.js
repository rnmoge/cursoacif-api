process.env.TZ = 'America/Sao_Paulo';

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const notFound = require('./middlewares/not-found');
const error = require('./middlewares/error');
const cors = require('./middlewares/cors');
const auth = require('./middlewares/auth');

const autenticacaoRoute = require('./core/autenticacao/route');
const clienteTipoRoute = require('./core/cliente_tipo/route');
const clienteRoute = require('./core/cliente/route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet()); // tira cabeçalhos do header, ajuda na segurança
app.use(cors);
//autenticacaoRoute(app);

//app.use(auth);

clienteTipoRoute(app);
clienteRoute(app);




app.get('/', (req, res)=>{
  res.status(200).json({
    ok:true
  })
});

app.get('/error', (req, res)=>{

  //throw new Error('erro')
  res.status(200).json({
    ok:true
  })
});


app.use(notFound);
app.use(error);
const port = process.env.PORT || 3333;

app.listen(port, ()=>{
  console.log(`API rodando na porta ${port}`);
})
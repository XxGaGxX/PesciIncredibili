var  Db = require('./dbcrud');
// var  ElencoClienti = require('./Clienti');
var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
  console.log('Server in funzione...')
  next();
});


router.route('/clienti').get((request, response) => {
  Db.getElencoClienti().then((data) => {
    response.json(data[0]);
  })
})

router.route('/clienti').post((request, response) => {
  let nuovoCliente = {...request.body}
  Db.aggiungiCliente(nuovoCliente).then((data) => {
    response.status(201).json(data);
  })
})

router.route('/cliente/:id').get((request, response) => {
  Db.getCliente(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/login/:email').get((request, response) => {
  Db.getLogin(request.params.email).then((data) => {
    response.json(data[0]);
  })
})

router.route('/catalogo').get((req,res) => {
  console.log("chiamato catalogo")
  Db.getCatalogo().then((data) => {
    res.json(data[0]);
  })
})



var  port = process.env.PORT || 8090;
app.listen(port);
console.log('Le API NEGOZIO sono in ascolto sulla porta ' + port);

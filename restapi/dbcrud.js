var  config = require('./dbconfig.js')
const  sql = require('mssql')

async  function  getElencoClienti() {
  try {
    let  pool = await  sql.connect(config);
    let  elenco = await  pool.request().query("SELECT * from Clienti");
    return  elenco.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getCliente(Id) {
  try {
    let  pool = await  sql.connect(config);
    let  film = await  pool.request()
    .input('id_cliente', sql.Int, Id)
    .query("SELECT * from Clienti where Id = @id_cliente");
    return  film.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  aggiungiCliente(cliente) {
  try {
    let  pool = await  sql.connect(config);
    let  nuovoFilm = await  pool.request()
    .input('Nome', sql.NVarChar, cliente.Nome)
    .input('Email', sql.NVarChar, cliente.Email)
    .input('Data', sql.Date, cliente.Data_iscrizione)
    .query('INSERT INTO Clienti (Nome, Email, Data_iscrizione) VALUES (@Nome, @Email, @Data)');
    return  nuovoFilm.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  getLogin(Email) {
  try {
    console.log("Daje")
    let  pool = await  sql.connect(config);
    let  cliente = await  pool.request()
    .input('email_cliente', sql.NVarChar, Email)
    .query("SELECT * from Clienti where Email = @email_cliente");
    return  cliente.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}


async function getCatalogo() {
  try{
    let pool = await sql.connect(config)
    let catalogo = await pool.request()
    .query("SELECT * FROM Catalogo")
    return catalogo.recordsets
  }catch(error){
    console.log(error);
  }
}

module.exports = {
  getElencoClienti:  getElencoClienti,
  getCliente:  getCliente,
  getLogin: getLogin,
  aggiungiCliente: aggiungiCliente,
  getCatalogo: getCatalogo
}

const { createWatchCompilerHost } = require("typescript");
var config = require("./dbconfig.js")
const sql = require("mssql")

async function getElencoClienti(){
    try{
        let pool = await sql.connect(config);
        let elenco = await pool.request().query("SELECT * FROM Clienti");

        return elenco.recordsets
    }catch (errore)
    {
        console.log(errore)
    }
}

async function getCliente(id){
    try{
        let pool = await sql.connect(config);
        let cliente = await pool.request()
        .input("id_cliente", sql.Int, id)
        .query(`SELECT * FROM Clienti WHERE id = @id_cliente`)
        return cliente.recordsets
    }catch(errore){
        console.log(errore)
    }
}

module.exports = {
    getElencoClienti : getElencoClienti,
    getCliente : getCliente
}
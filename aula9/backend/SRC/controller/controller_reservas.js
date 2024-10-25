const con = require('../connect/banco').con;

const create = (req, res) => {
    let cliente_id = req.body.cliente_id;
    let quarto_id = req.body.cliente_id;
    let data_reserva = req.body.data_reserva;
    let data_entrada= req.body.data_entrada;
    let data_saida= req.body.data_saida;
    let valor_total= req.body.valor_total;
    let statusReserva= req.body.statusReserva;
   

let query = 'INSERT INTO reserva (cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva) VALUES'
query += `('${cliente_id}', '${quarto_id}','${data_reserva}', '${data_entrada}', '${data_saida}', '${valor_total}', '${statusReserva}')`;
con.query(query, (err, result) => {
    if(err){
        res.status(500).json(err)
    } else{
        res.status(201).json(result)
    }
})

}

const read = (req, res) => {
    con.query('SELECT * FROM reserva', (err, result) => {
        if(err){
            res.status(500).json(err)
        } else{
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    let id = req.params.id;
    let reserva_id = req.body.reserva_id;
    let cliente_id = req.body.cliente_id;
    let quarto_id = req.body.quarto_id;
    let data_reserva = req.body.data_reserva;
    let data_entrada = req.body.data_entrada;
    let data_saida = req.body.data_saida;
    let valor_total = req.body.valor_total;
    let statusReserva = req.body.statusReserva;
 
}



const deletar = (req, res) => {
    let id = Number(req.params.id);
    con.query = ('DELETE FROM reserva WHERE reserva_id = ${id}' , (err,result) => {
        if(err){
            res.status(500).json(err)
        } else{
            res.status(201).json(result)
        }
    }
    )}

module.exports = {
    create,
    read,
    update,
    deletar
}
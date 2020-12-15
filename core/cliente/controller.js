const model = require('./model');

module.exports = {
  buscarTodos
}
async function buscarTodos(req, res){
  try {
    let result = await model.findAll({
      raw: true,
      attributes: ['id', 'id_cliente_tipo','nome', 'cep', 'rua', 'bairro', 'numero', 'cidade', 'uf']
    });
    res.status(200).json({
      content: result
    });

  } catch (error) {
    res.status(500).json({
      message: 'Erro',
      error
    })
  }
}
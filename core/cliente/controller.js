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

async function buscarPorId(req, res) {
  try {
      let result = await model.findByPk(+req.params.id, {
          raw: true,
          attributes: ['id', 'id_cliente_tipo','nome', 'cep', 'rua', 'bairro', 'numero', 'cidade', 'uf']
      });

      res.status(200).json({
          content: result
      });
  } catch (error) {
      res.status(500).json({
          message: 'Deu erro',
          error: error.message
      })
  }
}

async function inserir(req, res) {
  try {
      if(!req.body.nome)
          return res.status(406).json({message: 'O campo "nome" é obrigatório'})

      let result = await model.create({
        id_cliente_tipo: req.body.id_cliente_tipo,
        nome: req.body.nome,
        cep: req.body.cep,
        rua: req.body.rua,
        bairro: req.body.bairro,
        numero: req.body.numero,
        cidade: req.body.cidade,
        uf: req.body.uf, 
      });

      res.status(200).json({
          content: result
      });
  } catch (error) {
      res.status(500).json({
          message: 'Deu erro',
          error: error.message
      })
  }
}

async function alterar(req, res) {
  try {
      if(!req.body.nome)
          return res.status(406).json({message: 'O campo "nome" é obrigatório'})

      let result = await model.findByPk(+req.params.id);
      result.nome = req.body.nome;
      result.id_cliente_tipo = req.body.id_cliente_tipo;
      result.nome = req.body.nome;
      result.cep = req.body.cep;
      result.rua = req.body.rua;
      result.bairro = req.body.bairro;
      result.numero = req.body.numero;
      result.cidade = req.body.cidade;
      result.uf = req.body.uf;


      let save = await result.save();

      res.status(200).json({
          content: save
      });
  } catch (error) {
      res.status(500).json({
          message: 'Deu erro',
          error: error.message
      })
  }
}

async function remover(req, res) {
  try {
      let result = await model.findByPk(+req.params.id);
      result.destroy();

      res.status(200).json({
          content: {}
      });
  } catch (error) {
      res.status(500).json({
          message: 'Deu erro',
          error: error.message
      })
  }
}
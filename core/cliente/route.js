const controller = require('./controller');

module.exports = (app) => {
  
  app.get('/cliente', controller.buscarTodos);
  //app.get('/cliente/:id', controller.buscarPorId);
  //app.post('/cliente/', controller.inserir);
  //app.put('/cliente/:id', controller.alterar);
  //app.delete('/cliente/:id', controller.remover);

}
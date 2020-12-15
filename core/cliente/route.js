const controller = require('./controller');

module.exports = (app) => {
  
  app.get('/cliente', controller.buscarTodos);

}
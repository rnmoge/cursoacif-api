const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

  //const token = req.headers.authorization;

  console.log('token')
  const [, token] = req.headers.authorization.split(' ');
  console.log(token)

  if(!token) return res.status(401).json({message: 'Usuário nao autenticado'});

  
  jwt.verify(token, 'segredo', (err, decoded) => {
    if (err) {
      return res.status(401).json({message: 'Usuário nao autenticado'});
    }
    req.userId = decoded.id;   
  });
  
  
  
  next();
}
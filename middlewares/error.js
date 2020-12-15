module.exports = (error, req, res, next) => {
  res.status(500).json({
    error: 'Ocorreu um erro nao tratado',
    message: error.message
  });
  next();
}
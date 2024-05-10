const CustomError = (message, statusCode) => {
  //crea un error personalizado para usarlo en algun middleware
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

module.exports = {
  CustomError,
};

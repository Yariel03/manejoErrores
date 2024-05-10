const { CustomError } = require("./customError");

const error404 = (req, res, next) => {
  next(CustomError("Recurso no encontrado!", 404));
};

const validarId = (req, res, next) => {
  const { id } = req.query;
  if (id) {
    next(); //con el next doy paso al siguiente middleware como no tiene argumento,pasa a la siguiente funcion
  } else {
    next(CustomError("El id no existe", 400)); //aqui le pasamos el armumento de error por lo que va a saltar a buscar el middle de error
  }
};

//este es un manejador de errores la convencion para ser uno es (err, req, res, next)
const errorServidor = (err, req, res, next) => {
  res
    .status(err.statusCode || 500)
    .json({ error: err.message } || { error: "algo salio mal" });
};

module.exports = {
  error404,
  errorServidor,
  CustomError,
  validarId,
};

const createError = require("http-errors");
const INTERNAL_SERVER_ERROR = 500;

const errorHandler = function(err, req, res, next) {
  const errorStatus = err.status || INTERNAL_SERVER_ERROR;

  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.locals.message = err.message;

  res.status(errorStatus);
  next(createError(errorStatus));
};

module.exports = { errorHandler };

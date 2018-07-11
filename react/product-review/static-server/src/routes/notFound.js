const createError = require("http-errors");
const NOT_FOUND = 404;

const notFoundRouter = (req, res, next) => {
  next(createError(NOT_FOUND));
};

module.exports = { notFoundRouter };

const { Router } = require("express");

const { reviewRouter } = require("../review");
const { notFoundRouter } = require("./notFound");
const { errorHandler } = require("./errorsHandler");
const { ignoreFavIcon } = require("./ignoreFavIcon");

const router = Router();

router.use(reviewRouter);
router.use(errorHandler);
router.use(ignoreFavIcon);
router.use(notFoundRouter);

module.exports = { router };

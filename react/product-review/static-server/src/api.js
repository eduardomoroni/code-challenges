const express = require("express");
const { initializeAxios } = require("./axios");
const { router } = require("./routes");
const CORS = require("cors");

initializeAxios();
const app = express();

app.disable("etag");
app.disable("x-powered-by");
app.use(CORS());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

module.exports = app;

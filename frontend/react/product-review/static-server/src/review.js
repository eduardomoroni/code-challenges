const { Router } = require("express");
const Axios = require("axios");
const reviewRouter = Router();

let cache = new Map();

const getReviews = async pageNumber => Axios.get(`/reviews/${pageNumber}`);

const memoizedGetReviews = async pageNumber => {
  if (cache.has(pageNumber)) {
    return cache.get(pageNumber);
  }

  const response = await getReviews(pageNumber);
  cache.set(pageNumber, response);

  return response;
};

reviewRouter.get("/reviews/:pageNumber", async function(req, res, next) {
  const response = await memoizedGetReviews(req.params.pageNumber);
  res.status(response.status).json(response.data);
});

module.exports = { reviewRouter };

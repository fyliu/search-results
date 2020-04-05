const results = require("../data/movies.json");
var express = require("express");
var router = express.Router();

/* GET search results listing. */
router.get("/movies", function (req, res, next) {
  res.json(results);
});

module.exports = router;

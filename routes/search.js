const results = require("../data/movies.json");
var express = require("express");
var router = express.Router();

/* GET search results listing. */
router.get("/", function (req, res, next) {
  console.log(results);
  res.send(results);
});

module.exports = router;

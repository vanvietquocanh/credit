var express = require('express');
var router = express.Router();
var infoCompany = require("./infoCompany.js")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard', {infoCompany : infoCompany});
});

module.exports = router;
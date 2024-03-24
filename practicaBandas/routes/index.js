var express = require('express');
var router = express.Router();
//agrego mica:
let bandas= require('../db/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//agrego mica:
router.get('/', function(req,res){
  res.send(bandas)
});

module.exports = router;

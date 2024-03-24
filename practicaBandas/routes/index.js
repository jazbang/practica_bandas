var express = require('express');
var router = express.Router();
//agrego mica:
let bandas= require('../db/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//agrego mica:
router.get('/bandas', function(req,res){
  res.send(bandas)
});

router.get('/:idGenero', function(req, res){
  let idGenero = req.params.idGenero;
  let bandaId = [];

  for(let i=0; i< bandas.lista.length; i++){
    if (bandas.lista[i].genero == idGenero){
      bandaId.push(bandas.lista[i]);
    }
  }
  return res.send(bandaId);
});


module.exports = router;

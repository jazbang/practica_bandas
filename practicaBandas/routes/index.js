var express = require('express');
var router = express.Router();
//agrego mica:
let bandas= require('../db/index');
let bandasControlador= require('../controllers/bandasController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//agrego mica:
router.get('/bandas',bandasControlador.index);

//router.get('/:id', function(req, res){
// let id = req.params.id;
 // let bandaId = [];

 // for(let i=0; i< bandas.lista.length; i++){
 //   if (bandas.lista[i].id == id){
 //     bandaId.push(bandas.lista[i]);
 //   }
 // }
 // return res.send(bandaId);
// });


module.exports = router;

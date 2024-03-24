var express = require('express');
var router = express.Router();
let bandas= require('../db/index');

let controlador= {
    index:function(req,res){
        res.render('listadoBandas',{lista:bandas})
      }
}

module.exports=controlador;
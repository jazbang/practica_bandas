var express = require('express');
var router = express.Router();
let bandas= require('../db/index');

let controlador= {
    index:function(req,res){
        res.render('listadoBandas',{lista:bandas})
      }, 
      // agrego tomi
      filtrarPorId: function(req,res){
        const id = req.params.id;
        const datosFiltrados = [];
        for (let i = 0; i < bandas.lista.length; i++) {
          if (bandas.lista[i].id == id) {
            datosFiltrados.push(bandas.lista[i])
          }
        }
        res.render('detalleBandas',{lista: datosFiltrados})
      }
}

module.exports=controlador;
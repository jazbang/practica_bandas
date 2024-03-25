const express = require('express');
const router = express.Router();
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
      },
      filtrarPorGenero: function(req,res){
        let genero= req.params.genero;
        let filtrado= [];
        for (let i = 0; i < bandas.length; i++) {
          let minuscula= bandas.lista[i].genero.toLowerCase();
          let generoBanda = minuscula.replace(' ', '_');
          if (generoBanda == genero) {
            filtrado.push(bandas.lista[i])
          }
        }
        res.render('porGenero',{lista: filtrado, genero: genero})
      }
}

module.exports=controlador;
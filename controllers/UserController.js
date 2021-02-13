const express = require('express')
const router = express.Router();

module.exports = {
  login(req,res,next){
    res.render('login')
  },

  create(req,res,next){
    res.render('cadastro')
  },

  save(req,res,next){
    let senha = req.body.senha;
    let confSenha = req.body.confSenha;

    if(senha != confSenha){
      return res.render('cadastro',{validate: false})
    }


  }
}
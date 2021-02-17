const express = require('express')
const router = express.Router();
const valida = require('gerador-validador-cpf');
// const teste = valida.validate() 



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
      return res.render('cadastro',{validaSenha: false})
    }

    let validaCpf = valida.validate(req.body.cpf);
    console.log(validaCpf)


    /* Verificar como melhorar isso */
    if (validaCpf==false) {
      res.render('cadastro',{valiCpf: false});
    }

    console.log(req.body)

  }
}
const valida = require('gerador-validador-cpf');

const {User} = require('../models');
const bcrypt = require('bcrypt');


module.exports = {
  login(req,res,next){
    res.render('login')
  },

  create(req,res,next){
    res.render('cadastro')
  },

  async save(req,res,next){

    if(req.body.password != req.body.confPassword){
      return res.render('cadastro',{validaSenha: false})
    }else{
      req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

      req.body.confPassword = bcrypt.hashSync(req.body.confPassword, bcrypt.genSaltSync(10));
    }

    let validaCpf = valida.validate(req.body.cpf);
    //console.log(validaCpf)


    /* Verificar como melhorar isso */
    if (validaCpf==false) {
      res.render('cadastro',{valiCpf: false});
    }
    let infoEmail = ''

    if(req.body.infoEmail != undefined){
      infoEmail = "true"
    }else{
      infoEmail = "false"
    }

    let user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      cpf: req.body.cpf,
      gender: req.body.gender,
      infoEmail
    };

    await User.create(user)

    console.log(user)
   res.render('cadastro',{added:true});
  }
}
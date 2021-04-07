const {User} = require('../models');
const {Book }= require('../models')

module.exports = {
 async index(req,res){
    const userId = req.params.id;

    console.log(userId)

    const user = await User.findByPk(userId,{
      include:{
        association: 'books',
        attributes: ['title'],
        through:{
          attributes: []
        }
      }
    })

     console.log(user)
  // return res.json(user.books)

    //res.render('favorites')
  },

  // async create(req,res){
  //   const {}
  // }
}
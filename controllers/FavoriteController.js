const {User} = require('../models');
const {Book }= require('../models');
const {Favorite} = require('../models');

module.exports = {
 async index(req,res,next){
    const userId = req.params.id;

    console.log(userId)

    // const user = await User.findByPk(userId,{
    //   include:{
    //     association: 'books',
    //     attributes: ['title'],
    //     through:{
    //       attributes: []
    //     }
    //   }
    // })

    const user = await User.findByPk(userId)
     console.log(user)

    
    
  // return res.json(user.books)

    //res.render('favorites')
  },

  async create(req,res,next){
    let bookId = req.params.id
    bookId = parseInt(bookId)
    console.log(bookId)

    const userId = req.session.user
    console.log(userId.id);

    let favorite = {userId: userId.id,bookId};

    if(typeof userId != undefined){
      await Favorite.create(favorite);
    }


  }
}
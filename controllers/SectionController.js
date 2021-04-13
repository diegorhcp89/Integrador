const {Book} = require('../models');
const {Theme} = require('../models')

module.exports = {
  async produtos(req,res,next){
    let books = await Book.findAll();

    console.log(books)
    res.render('section',{user: req.session.user,themesAll: true, books});
  },

  async theme(req,res,next){

    let id = req.params.id;
    console.log(id)

    let theme = await Book.findAll({
      attributes: ['id','title','imgPath','description','price','themeId'],
      include:[
        {
          model: Theme,
          
          required: true
        }
      ],
      where:{
        themeId: id
      }
    });

    console.log(theme);

    res.render('section',{user: req.session.user,theme: true, theme});
  }
} 
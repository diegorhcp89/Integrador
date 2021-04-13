module.exports = (sequelize,DataTypes)=>{
  const Sale = sequelize.define('Sale',{
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    percent:{  
      type: DataTypes.DECIMAL,
      allowNull: false
    }, 
    book_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    tableName: 'sales'
  });
  Sale.associate = (models) => {
    Sale.belongsTo(models.Book, {as: 'book'})
  }

  return Sale;
};
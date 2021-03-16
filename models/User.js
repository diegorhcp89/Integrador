module.exports = (sequelize,DataTypes)=>{
  const User = sequelize.define('User',{
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    cpf: DataTypes.STRING,
    gender: DataTypes.STRING
  },{
    tableName: 'users'
  });

  return User;
};
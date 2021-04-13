module.exports = (sequelize,DataTypes)=>{
    const TypePay = sequelize.define('TypePay',{
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          cardId:{
            type: Sequelize.INTEGER,
            allowNull: true,
          },
          ticketId:{
            type: Sequelize.INTEGER,
            allowNull: true,
          }
    });
    return TypePay;
}
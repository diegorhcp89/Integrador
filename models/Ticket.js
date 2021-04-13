module.exports = (sequelize,DataTypes)=>{
    const Ticket = sequelize.define('Ticket',{
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          userId:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {model:'users',key:'id'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
    },{
        tableName: 'Ticket'
    });
    Ticket.associate = (models) => {
        Ticket.belongsTo(models.card, {as: 'cards'})
      }

      return Ticket;
    }
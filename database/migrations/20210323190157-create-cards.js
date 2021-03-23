'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.createTable('cards',{ 
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      number:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      expiration:{
        type: Sequelize.STRING,
        allowNull: false
      },
      cvv:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('cards');  
  }
};

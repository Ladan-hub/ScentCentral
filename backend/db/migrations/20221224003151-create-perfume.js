'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Perfumes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      numberAvailable: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      perfumeImgUrl: {
        type: Sequelize.STRING,
        allowNull: false
      },
      boutiqueId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'Boutiques'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Perfumes');
  }
};

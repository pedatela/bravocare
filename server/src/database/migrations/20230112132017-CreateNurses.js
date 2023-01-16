'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('nurses',
      {
        nurse_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        nurse_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        nurse_type: {
          type: Sequelize.STRING,
          allowNull: false,
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('nurses');
  }
};

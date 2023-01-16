'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('facilities',
      {
        facility_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        facility_name: {
          type: Sequelize.STRING,
          allowNull: false,
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('facilities');
  }
};

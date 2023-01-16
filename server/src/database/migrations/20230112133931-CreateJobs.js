'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('jobs',
      {
        job_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        facility_id: {
          type: Sequelize.INTEGER,
          references: { model: 'facilities', key: 'facility_id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true
        },
        nurse_type_needed: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        total_number_nurses_needed: {
          type: Sequelize.INTEGER,
          allowNull: false,
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('jobs');
  }
};

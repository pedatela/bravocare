'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('nurse_hired_jobs',
      {
        job_id: {
          type: Sequelize.INTEGER,
          references: { model: 'jobs', key: 'job_id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true
        },
        nurse_id: {
          type: Sequelize.INTEGER,
          references: { model: 'nurses', key: 'nurse_id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('nurse_hired_jobs');
  }
};

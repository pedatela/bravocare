'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('question_one_shifts',
      {
        shift_id: {
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
        shift_date: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
        start_time: {
          type: Sequelize.TIME(6),
          allowNull: false,
        },
        end_time: {
          type: Sequelize.TIME(6),
          allowNull: false,
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('question_one_shifts');
  }
};

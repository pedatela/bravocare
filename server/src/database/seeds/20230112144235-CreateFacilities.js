'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('facilities', [
      {
        facility_id: 100,
        facility_name: 'Facility A'
      },
      {
        facility_id: 101,
        facility_name: 'Facility B'
      },
      {
        facility_id: 102,
        facility_name: 'Facility C'
      },

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('facilities', null, {});
  }
};

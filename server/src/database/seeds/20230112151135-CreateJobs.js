'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('jobs', [
      {
        job_id: 200,
        facility_id: 100,
        nurse_type_needed: 'RN',
        total_number_nurses_needed: 1,
      },
      {
        job_id: 201,
        facility_id: 101,
        nurse_type_needed: 'LPN',
        total_number_nurses_needed: 1
      },
      {
        job_id: 202,
        facility_id: 100,
        nurse_type_needed: 'CNA',
        total_number_nurses_needed: 2
      },
      {
        job_id: 203,
        facility_id: 102,
        nurse_type_needed: 'LPN',
        total_number_nurses_needed: 2
      },
      {
        job_id: 204,
        facility_id: 102,
        nurse_type_needed: 'RN',
        total_number_nurses_needed: 2
      },
      {
        job_id: 205,
        facility_id: 100,
        nurse_type_needed: 'RN',
        total_number_nurses_needed: 3
      },
      {
        job_id: 206,
        facility_id: 101,
        nurse_type_needed: 'LPN',
        total_number_nurses_needed: 2
      },
      {
        job_id: 207,
        facility_id: 101,
        nurse_type_needed: 'CNA',
        total_number_nurses_needed: 1
      },
      {
        job_id: 208,
        facility_id: 100,
        nurse_type_needed: 'RN',
        total_number_nurses_needed: 1
      },
      {
        job_id: 209,
        facility_id: 102,
        nurse_type_needed: 'CNA',
        total_number_nurses_needed: 4
      },
      {
        job_id: 210,
        facility_id: 102,
        nurse_type_needed: 'LPN',
        total_number_nurses_needed: 3
      }

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('jobs', null, {});
  }
};

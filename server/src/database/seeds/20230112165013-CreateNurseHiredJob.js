'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('nurse_hired_jobs', [
      {
        job_id: 200,
        nurse_id: 1006,
      },
      {
        job_id: 201,
        nurse_id: 1003,
      },
      {
        job_id: 202,
        nurse_id: 1007,
      },
      {
        job_id: 203,
        nurse_id: 1004,
      },
      {
        job_id: 204,
        nurse_id: 1006,
      },
      {
        job_id: 204,
        nurse_id: 1008,
      },
      {
        job_id: 205,
        nurse_id: 1008,
      },
      {
        job_id: 206,
        nurse_id: 1003,
      },
      {
        job_id: 206,
        nurse_id: 1010,
      },
      {
        job_id: 207,
        nurse_id: 1005,
      },
      {
        job_id: 208,
        nurse_id: 1006,
      },
      {
        job_id: 209,
        nurse_id: 1001,
      },
      {
        job_id: 210,
        nurse_id: 1004,
      }

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('nurse_hired_jobs', null, {});
  }
};

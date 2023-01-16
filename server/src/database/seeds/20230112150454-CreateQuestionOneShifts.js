'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('question_one_shifts', [
      {
        shift_id: 1,
        facility_id: 100,
        shift_date: '2022-10-01',
        start_time: '07:00:00',
        end_time: '15:30:00',

      },
      {
        shift_id: 2,
        facility_id: 100,
        shift_date: '2022-10-01',
        start_time: '15:00:00',
        end_time: '23:00:00',

      },
      {
        shift_id: 3,
        facility_id: 100,
        shift_date: '2022-10-03',
        start_time: '15:00:00',
        end_time: '23:00:00',

      },
      {
        shift_id: 4,
        facility_id: 100,
        shift_date: '2022-10-03',
        start_time: '07:00:00',
        end_time: '19:00:00',

      },
      {
        shift_id: 5,
        facility_id: 101,
        shift_date: '2022-10-02',
        start_time: '23:00:00',
        end_time: '07:30:00',

      },
      {
        shift_id: 6,
        facility_id: 102,
        shift_date: '2022-10-03',
        start_time: '15:00:00',
        end_time: '23:30:00',
      }

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('question_one_shifts', null, {});
  }
};

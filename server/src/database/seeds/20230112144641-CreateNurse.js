'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('nurses', [
      {
        nurse_id: 1000,
        nurse_name: 'Kevin',
        nurse_type: 'CNA'
      },
      {
        nurse_id: 1001,
        nurse_name: 'Anne',
        nurse_type: 'CNA'
      },
      {
        nurse_id: 1002,
        nurse_name: 'Abby',
        nurse_type: 'RN'
      },
      {
        nurse_id: 1003,
        nurse_name: 'John',
        nurse_type: 'LPN'
      },
      {
        nurse_id: 1004,
        nurse_name: 'Thomas',
        nurse_type: 'LPN'
      },
      {
        nurse_id: 1005,
        nurse_name: 'Sam',
        nurse_type: 'CNA'
      },
      {
        nurse_id: 1006,
        nurse_name: 'Wesley',
        nurse_type: 'RN'
      },
      {
        nurse_id: 1007,
        nurse_name: 'Adam',
        nurse_type: 'CNA'
      },
      {
        nurse_id: 1008,
        nurse_name: 'Cory',
        nurse_type: 'RN'
      },
      {
        nurse_id: 1009,
        nurse_name: 'Robert',
        nurse_type: 'LPN'
      },
      {
        nurse_id: 1010,
        nurse_name: 'Mark',
        nurse_type: 'RN'
      },

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('nurses', null, {});
  }
};

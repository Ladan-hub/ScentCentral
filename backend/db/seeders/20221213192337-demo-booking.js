'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Bookings', [
      {
        boutiqueId: 66,
        userId: 9,
        startDate: '2023-01-04T10:00:00000Z',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boutiqueId: 66,
        userId: 10,
        startDate: '2023-01-04T11:00:00000Z',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boutiqueId: 66,
        userId: 11,
        startDate: '2023-01-04T13:00:00000Z',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boutiqueId: 70,
        userId: 9,
        startDate: '2023-01-04T12:00:00000Z',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boutiqueId: 70,
        userId: 10,
        startDate: '2023-04-04T11:00:00000Z',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boutiqueId: 70,
        userId: 10,
        startDate: '2023-02-04T10:00:00000Z',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Bookings', null, {});

  }
};

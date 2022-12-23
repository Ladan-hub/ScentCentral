'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Bookings', [
      {
        boutiqueId: 71,
        userId: 21,
        startDate: '2023-01-04T10:00:00000Z',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boutiqueId: 74,
        userId: 23,
        startDate: '2023-01-04T11:00:00000Z',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boutiqueId: 84,
        userId: 24,
        startDate: '2023-01-04T13:00:00000Z',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boutiqueId: 84,
        userId: 21,
        startDate: '2023-01-04T12:00:00000Z',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boutiqueId: 80,
        userId: 23,
        startDate: '2023-04-04T11:00:00000Z',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boutiqueId: 78,
        userId: 23,
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

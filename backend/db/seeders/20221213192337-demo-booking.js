'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Bookings', [
      {
        boutiqueId: 15,
        userId: 2,
        startDate: '2023-01-04T10:00:00000Z',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boutiqueId: 18,
        userId: 3,
        startDate: '2023-01-04T11:00:00000Z',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boutiqueId: 22,
        userId: 4,
        startDate: '2023-01-04T13:00:00000Z',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boutiqueId: 16,
        userId: 2,
        startDate: '2023-01-04T12:00:00000Z',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boutiqueId: 19,
        userId: 3,
        startDate: '2023-04-04T11:00:00000Z',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boutiqueId: 27,
        userId: 3,
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

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Bookings', [
      {
        boutiqueId: 1,
        userId: 2,
        startDate: '2023-01-04T10:00:00000Z',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boutiqueId: 1,
        userId: 3,
        startDate: '2023-01-04T11:00:00000Z',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boutiqueId: 2,
        userId: 2,
        startDate: '2023-01-04T13:00:00000Z',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boutiqueId: 2,
        userId: 3,
        startDate: '2023-01-04T12:00:00000Z',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Bookings', null, {truncate: true, cascade: true, restartIdentity: true });
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Reviews', [
        {
        content: "One of the most luxurious experiences I've ever had at a perfume boutique",
        boutiqueId: 4,
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Amazing customer service!",
        boutiqueId: 5,
        userId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Not a wide selection, but each and every available perfume is of highest quality!",
        boutiqueId: 6,
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Reviews', null, {});
 
  }
};

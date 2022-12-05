'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Reviews', [
      {
        content: "Parfums de Marley's NY boutoque is one of the best places to test scents and learn about customer service. Very inspiring.",
        stars: 4,
        userId: 1, 
        boutiqueId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Parfums de Marley's Dubai boutoque was my dream to visit. It did not dissapoint.",
        stars: 4,
        userId: 1, 
        boutiqueId: 33,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        content: "Unbelivable experience!",
        stars: 5,
        userId: 4, 
        boutiqueId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Parfums de Marley fragrances are so hyped! I only liked Sedley and Pegasus Exclusive, but other than that, I was dissapointed. I really enjoyed the service I received at the boutique tho.",
        stars: 3,
        userId: 4, 
        boutiqueId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};

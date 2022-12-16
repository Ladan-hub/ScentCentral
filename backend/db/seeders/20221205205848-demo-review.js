'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Reviews', [
      {
        content: "Parfums de Marley's NY boutoque is one of the best places to test scents and learn about customer service. Very inspiring.",
        userId: 9, 
        boutiqueId: 56,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Parfums de Marley's Dubai boutoque was my dream to visit. It did not dissapoint.",
        userId: 9, 
        boutiqueId: 37,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        content: "Unbelivable experience!",
        userId: 11, 
        boutiqueId: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Parfums de Marley fragrances are so hyped! I only liked Sedley and Pegasus Exclusive, but other than that, I was dissapointed. I really enjoyed the service I received at the boutique tho.",
        userId: 11, 
        boutiqueId: 56,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};

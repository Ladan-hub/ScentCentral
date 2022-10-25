'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Boutiques', [
        {
        name: 'PARFUMS DE MARLY BOUTIQUE',
        country: 'USA',
        city: 'New York',
        address: '805 Washington Street',
        priceRange: '$$$',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/files/PDM-NEWYORK-BOUTIQUE_880x680_crop_center.jpg',
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kilian Paris Boutique",
        country: "France",
        city: "Paris",
        address: "20 Rue Cambon, 75001",
        priceRange: "$$$",
        imageUrl: "https://www.bykilian.com/media/export/cms/Store%20Locator%20Update%20August%202019/1.%20paris.jpg",
        userId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Roja Parfums",
        country: "UK",
        city: "London",
        address: "51 Burlington Arcade",
        priceRange: "$$",
        imageUrl: "https://static01.nyt.com/images/2016/10/03/fashion/03dove-web02/03dove-web02-jumbo.jpg",
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Boutiques', null, {});
  }
};

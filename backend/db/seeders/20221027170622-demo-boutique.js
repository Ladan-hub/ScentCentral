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
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PARFUMS DE MARLY BOUTIQUE',
        country: 'France',
        city: 'Paris',
        address: '26 Rue Cambon',
        priceRange: '$$$',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/files/PDM-PARIS-BOUTIQUE_880x680_crop_center.jpg?v=1630168830',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PARFUMS DE MARLY BOUTIQUE',
        country: 'UAE',
        city: 'Dubai',
        address: 'Perfumery&Co, The Dubai Mall',
        priceRange: '$$$',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/files/PDM-DUBAI-BOUTIQUE_880x680_crop_center.jpg?v=1630168861',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kilian Boutique",
        country: "France",
        city: "Paris",
        address: "20 Rue Cambon, 75001",
        priceRange: "$$$$",
        imageUrl: "https://www.bykilian.com/media/export/cms/Store%20Locator%20Update%20August%202019/1.%20paris.jpg",
        userId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kilian Boutique",
        country: "USA",
        city: "New York",
        address: "804 Washington St",
        priceRange: "$$$$",
        imageUrl: "https://www.bykilian.com/media/export/cms/Store%20Locator%20Update%20August%202019/5.%20new%20york.jpg",
        userId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kilian Boutique",
        country: "UK",
        city: "London",
        address: "87-135 Brompton Rd",
        priceRange: "$$$$",
        imageUrl: "https://www.bykilian.com/media/export/cms/Store%20Locator%20Update%20August%202019/2.%20london%20harrods.jpg",
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
        imageUrl: "https://robbreport.com.my/wp-content/uploads/2018/06/FEAT_RajaDove_1.jpg",
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Roja Parfums",
        country: "UK",
        city: "Burlington",
        address: "Champagne Bollinger Burlington Bar",
        priceRange: "$$",
        imageUrl: "https://www.burlingtonarcade.com/wp-content/uploads/elementor/thumbs/Roja-Parfums-1-prnb65bmqsv61jfqp5el25xgqrj79ikcmdt699w43c.jpg",
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Guerlain",
        country: "France",
        city: "Paris",
        address: "68 Av. des Champs-Élysées, 75008",
        priceRange: "$$$",
        imageUrl: "https://www.tripsavvy.com/thmb/RJLKU-PyOwIDazLg-Ce17oqEIjk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-455716714-56a404c73df78cf772805ff4.jpg",
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Guerlain",
        country: "United Kingdom",
        city: "London",
        address: "356 rue Saint-Honoré",
        priceRange: "$$$",
        imageUrl: "https://i1.wp.com/www.theglassmagazine.com/wp/wp-content/uploads/2021/12/Pop-Up-4.jpg?w=1193&ssl=1.jpg",
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Acqua di Parma",
        country: "Italy",
        city: "Milan",
        address: "Via Gesù, 1",
        priceRange: "$$",
        imageUrl: "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Library-Sites-acquadiparmaLibrary/default/dwf5de9f9a/images/botiques/boutique_Milan.jpg?sw=559&q=85.jpg",
        userId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Acqua di Parma",
        country: "Italy",
        city: "Rome",
        address: "Piazza di Spagna, 27",
        priceRange: "$$",
        imageUrl: "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Library-Sites-acquadiparmaLibrary/default/dwbcd982d4/Roma11.jpg?sw=559&q=85.jpg",
        userId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Acqua di Parma",
        country: "France",
        city: "Paris",
        address: "6, Rue des Francs Bourgeois",
        priceRange: "$$",
        imageUrl: "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Library-Sites-acquadiparmaLibrary/default/dw5f45c780/images/botiques/store-paris.jpg?sw=559&q=85.jpg",
        userId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Acqua di Parma",
        country: "UAE",
        city: "Dubai",
        address: "Dubai Mall, Perfumery & Co New Fashion Avenue Extension,Level 2",
        priceRange: "$$",
        imageUrl: "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Library-Sites-acquadiparmaLibrary/default/dw6b0931ac/images/botiques/store-dubai.jpg?sw=559&q=85.jpg",
        userId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Boutiques', null, {});
  }
};

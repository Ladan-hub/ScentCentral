'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
   
      return queryInterface.bulkInsert('Perfumes', [
        {
        name: 'Layton',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/layton-bottle-125ml_1000x.jpg?v=1630170183.jpg',
        boutiqueId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Haltane',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/PDMHaltaneBPSWS1000x1000_1000x.jpg?v=1651758877.jpg',
        boutiqueId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sedley',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/sedley-bottle-125ml_1000x.jpg?v=1630169812.jpg',
        boutiqueId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Percival',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/percival-bottle-125ml_1000x.jpg?v=1648638352.jpg',
        boutiqueId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pegasus',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/pegasus-bottle-125ml_1000x.jpg?v=1630170590.jpg',
        boutiqueId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Herod',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/herod-bottle-125ml_1000x.jpg?v=1630170280.jpg',
        boutiqueId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Carlisle',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/carlisle-bottle-125ml_1000x.jpg?v=1630170690.jpg',
        boutiqueId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Oriana',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/oriana-bottle-75ml_1000x.jpg?v=1630839267.jpg',
        boutiqueId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Delina',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/delina-bottle-75ml_ecc14ec6-2401-4e39-8eaa-0649ed8adc5e_1000x.jpg?v=1629713645.jpg',
        boutiqueId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cassili',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/cassili-bottle-75ml_1000x.jpg?v=1644412397.jpg',
        boutiqueId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Athalia',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/athalia-bottle-75ml_1000x.jpg?v=1644412364.jpg',
        boutiqueId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Safanad',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/safanad-bottle-75ml_85591335-4a68-48d9-bd6f-1fa5629532f7_1000x.jpg?v=1630171879.jpg',
        boutiqueId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Angles Share',
        numberAvailable: 50,
        perfumeImgUrl: 'https://www.bykilian.com/media/images/products/833x968/kl_sku_N36E01_833x968_0.jpg',
        boutiqueId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Apple Brandy - On The Rocks',
        numberAvailable: 50,
        perfumeImgUrl: 'https://www.bykilian.com/media/images/products/833x968/kl_sku_N45101_833x968_0.jpg',
        boutiqueId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Black Phantom - Memento Mori',
        numberAvailable: 50,
        perfumeImgUrl: 'https://www.bykilian.com/media/images/products/833x968/kl_sku_N3EH01_833x968_0.jpg',
        boutiqueId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Intoxicated',
        numberAvailable: 50,
        perfumeImgUrl: 'https://www.bykilian.com/media/images/products/833x968/kl_sku_N3EE01_833x968_0.jpg',
        boutiqueId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Love, Don't be Shy",
        numberAvailable: 50,
        perfumeImgUrl: 'https://www.bykilian.com/media/images/products/833x968/kl_sku_N3E601_833x968_0.jpg',
        boutiqueId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rolling in Love",
        numberAvailable: 50,
        perfumeImgUrl: 'https://www.bykilian.com/media/images/products/833x968/kl_sku_N3EX01_833x968_0.jpg',
        boutiqueId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Vodka on the Rocks",
        numberAvailable: 50,
        perfumeImgUrl: 'https://www.bykilian.com/media/images/products/833x968/kl_sku_N3CY01_833x968_0.jpg',
        boutiqueId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Moonlight in Heaven",
        numberAvailable: 50,
        perfumeImgUrl: 'https://www.bykilian.com/media/images/products/833x968/kl_sku_N3CX01_833x968_0.jpg',
        boutiqueId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Elysium Pour Homme",
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0554/4702/7869/products/elysium-pour-homme-fragrance-roja-parfums-100ml-655654_1080x.jpg?v=1664883738.jpg',
        boutiqueId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Manhattan EDP",
        numberAvailable: 1,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0554/4702/7869/products/manhattan-fragrance-roja-parfums-100ml-513822_1080x.jpg?v=1665146827.jpg',
        boutiqueId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Apex EDP",
        numberAvailable: 0,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0554/4702/7869/products/apex-eau-de-parfum-fragrance-roja-parfums-100ml-803128_1080x.jpg?v=1664883785.jpg',
        boutiqueId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Enigma Pour Homme",
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0554/4702/7869/products/enigma-pour-homme-fragrance-roja-parfums-100ml-104056_1080x.jpg?v=1664883749.jpg',
        boutiqueId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Oceania",
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0554/4702/7869/products/oceania-fragrance-roja-parfums-100ml-510765_1080x.jpg?v=1664883832.jpg',
        boutiqueId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "A Midsummer Dream",
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0554/4702/7869/products/a-midsummer-dream-fragrance-roja-parfums-100ml-816049_1080x.jpg?v=1664883770.jpg',
        boutiqueId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Halfeti",
        numberAvailable: 50,
        perfumeImgUrl: 'https://www.penhaligons.com/cdn-cgi/image/fit=contain,width=800,quality=90/medias/sys_master/images/hd2/h88/9422129463326/9422129397790/9422129397790.png',
        boutiqueId: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Coveted Duchess Rose",
        numberAvailable: 50,
        perfumeImgUrl: 'https://www.penhaligons.com/cdn-cgi/image/fit=contain,width=800,quality=90/medias/sys_master/images/hc5/h41/9415389282334/9415389216798/9415389216798.png',
        boutiqueId: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Halfeti",
        numberAvailable: 50,
        perfumeImgUrl: 'https://www.penhaligons.com/cdn-cgi/image/fit=contain,width=800,quality=90/medias/sys_master/images/hd2/h88/9422129463326/9422129397790/9422129397790.png',
        boutiqueId: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Tragedy of Lord George",
        numberAvailable: 50,
        perfumeImgUrl: 'https://www.penhaligons.com/cdn-cgi/image/fit=contain,width=800,quality=90/medias/sys_master/images/h59/h1f/9498349895710/9498349830174/9498349830174.png',
        boutiqueId: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Artemisia",
        numberAvailable: 0,
        perfumeImgUrl: 'https://www.penhaligons.com/cdn-cgi/image/fit=contain,width=800,quality=90/medias/sys_master/images/h2f/h8a/9415081132062/9415081066526/9415081066526.png',
        boutiqueId: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cairo",
        numberAvailable: 50,
        perfumeImgUrl: 'https://www.penhaligons.com/cdn-cgi/image/fit=contain,width=800,quality=90/medias/sys_master/images/h0f/h07/9484545720350/9484545687582/9484545687582.png',
        boutiqueId: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Halfeti Leather",
        numberAvailable: 0,
        perfumeImgUrl: 'https://www.penhaligons.com/cdn-cgi/image/fit=contain,width=800,quality=90/medias/sys_master/images/haf/h7e/9522679808030/9522679742494/9522679742494.png',
        boutiqueId: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Layton',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/layton-bottle-125ml_1000x.jpg?v=1630170183.jpg',
        boutiqueId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Haltane',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/PDMHaltaneBPSWS1000x1000_1000x.jpg?v=1651758877.jpg',
        boutiqueId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sedley',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/sedley-bottle-125ml_1000x.jpg?v=1630169812.jpg',
        boutiqueId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Percival',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/percival-bottle-125ml_1000x.jpg?v=1648638352.jpg',
        boutiqueId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pegasus',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/pegasus-bottle-125ml_1000x.jpg?v=1630170590.jpg',
        boutiqueId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Herod',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/herod-bottle-125ml_1000x.jpg?v=1630170280.jpg',
        boutiqueId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Carlisle',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/carlisle-bottle-125ml_1000x.jpg?v=1630170690.jpg',
        boutiqueId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Oriana',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/oriana-bottle-75ml_1000x.jpg?v=1630839267.jpg',
        boutiqueId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Delina',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/delina-bottle-75ml_ecc14ec6-2401-4e39-8eaa-0649ed8adc5e_1000x.jpg?v=1629713645.jpg',
        boutiqueId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cassili',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/cassili-bottle-75ml_1000x.jpg?v=1644412397.jpg',
        boutiqueId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Athalia',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/athalia-bottle-75ml_1000x.jpg?v=1644412364.jpg',
        boutiqueId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Safanad',
        numberAvailable: 50,
        perfumeImgUrl: 'https://cdn.shopify.com/s/files/1/0555/6279/7250/products/safanad-bottle-75ml_85591335-4a68-48d9-bd6f-1fa5629532f7_1000x.jpg?v=1630171879.jpg',
        boutiqueId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Perfumes', null, {});
 
  }
};

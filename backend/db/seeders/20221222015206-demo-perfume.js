// "use strict";

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert(
//       'Perfumes',
//       [
//         {
//           name: "Layton",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/layton-bottle-125ml_1000x.jpg?v=1220119183.jpg",
//           boutiqueId: 71,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Haltane",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/PDMHaltaneBPSWS1000x1000_1000x.jpg?v=1221202726.jpg",
//           boutiqueId: 71,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Sedley",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/sedley-bottle-125ml_1000x.jpg?v=1220118812.jpg",
//           boutiqueId: 71,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Percival",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/percival-bottle-125ml_1000x.jpg?v=1248228352.jpg",
//           boutiqueId: 71,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Pegasus",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/pegasus-bottle-125ml_1000x.jpg?v=1220119180.jpg",
//           boutiqueId: 71,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Herod",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/herod-bottle-125ml_1000x.jpg?v=1220119280.jpg",
//           boutiqueId: 71,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Carlisle",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/carlisle-bottle-125ml_1000x.jpg?v=1220119180.jpg",
//           boutiqueId: 71,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Oriana",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/oriana-bottle-22ml_1000x.jpg?v=1220839216.jpg",
//           boutiqueId: 71,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Delina",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/delina-bottle-22ml_ecc14ec6-2401-4e39-8eaa-0249ed8adc5e_1000x.jpg?v=1219203245.jpg",
//           boutiqueId: 71,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Cassili",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/cassili-bottle-22ml_1000x.jpg?v=1244412397.jpg",
//           boutiqueId: 71,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Athalia",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/athalia-bottle-22ml_1000x.jpg?v=1244412324.jpg",
//           boutiqueId: 71,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Safanad",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/safanad-bottle-22ml_85181335-4a17-48d9-bd6f-1fa1629532f7_1000x.jpg?v=1220120828.jpg",
//           boutiqueId: 71,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Layton",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/layton-bottle-125ml_1000x.jpg?v=1220119183.jpg",
//           boutiqueId: 72,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Haltane",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/PDMHaltaneBPSWS1000x1000_1000x.jpg?v=1221202726.jpg",
//           boutiqueId: 72,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Sedley",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/sedley-bottle-125ml_1000x.jpg?v=1220118812.jpg",
//           boutiqueId: 72,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Percival",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/percival-bottle-125ml_1000x.jpg?v=1248228352.jpg",
//           boutiqueId: 72,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Pegasus",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/pegasus-bottle-125ml_1000x.jpg?v=1220119180.jpg",
//           boutiqueId: 72,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Herod",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/herod-bottle-125ml_1000x.jpg?v=1220119280.jpg",
//           boutiqueId: 72,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Carlisle",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/carlisle-bottle-125ml_1000x.jpg?v=1220119180.jpg",
//           boutiqueId: 72,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Oriana",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/oriana-bottle-22ml_1000x.jpg?v=1220839216.jpg",
//           boutiqueId: 72,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Delina",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/delina-bottle-22ml_ecc14ec6-2401-4e39-8eaa-0249ed8adc5e_1000x.jpg?v=1219203245.jpg",
//           boutiqueId: 72,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Cassili",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/cassili-bottle-22ml_1000x.jpg?v=1244412397.jpg",
//           boutiqueId: 72,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Athalia",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/athalia-bottle-22ml_1000x.jpg?v=1244412324.jpg",
//           boutiqueId: 72,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Safanad",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/safanad-bottle-22ml_85181335-4a17-48d9-bd6f-1fa1629532f7_1000x.jpg?v=1220120828.jpg",
//           boutiqueId: 72,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Layton",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/layton-bottle-125ml_1000x.jpg?v=1220119183.jpg",
//           boutiqueId: 73,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Haltane",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/PDMHaltaneBPSWS1000x1000_1000x.jpg?v=1221202726.jpg",
//           boutiqueId: 73,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Sedley",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/sedley-bottle-125ml_1000x.jpg?v=1220118812.jpg",
//           boutiqueId: 73,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Percival",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/percival-bottle-125ml_1000x.jpg?v=1248228352.jpg",
//           boutiqueId: 73,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Pegasus",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/pegasus-bottle-125ml_1000x.jpg?v=1220119180.jpg",
//           boutiqueId: 73,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Herod",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/herod-bottle-125ml_1000x.jpg?v=1220119280.jpg",
//           boutiqueId: 73,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Carlisle",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/carlisle-bottle-125ml_1000x.jpg?v=1220119180.jpg",
//           boutiqueId: 73,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Oriana",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/oriana-bottle-22ml_1000x.jpg?v=1220839216.jpg",
//           boutiqueId: 73,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Delina",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/delina-bottle-22ml_ecc14ec6-2401-4e39-8eaa-0249ed8adc5e_1000x.jpg?v=1219203245.jpg",
//           boutiqueId: 73,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Cassili",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/cassili-bottle-22ml_1000x.jpg?v=1244412397.jpg",
//           boutiqueId: 73,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Athalia",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/athalia-bottle-22ml_1000x.jpg?v=1244412324.jpg",
//           boutiqueId: 73,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Safanad",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0555/2128/2150/products/safanad-bottle-22ml_85181335-4a17-48d9-bd6f-1fa1629532f7_1000x.jpg?v=1220120828.jpg",
//           boutiqueId: 73,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Angles Share",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N36E01_833x917_0.jpg",
//           boutiqueId: 74,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Apple Brandy - On The Rocks",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N45101_833x917_0.jpg",
//           boutiqueId: 74,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Black Phantom - Memento Mori",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N3EH01_833x917_0.jpg",
//           boutiqueId: 74,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Intoxicated",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N3EE01_833x917_0.jpg",
//           boutiqueId: 74,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Love, Don't be Shy",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N3E191_833x917_0.jpg",
//           boutiqueId: 74,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Rolling in Love",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N3EX01_833x917_0.jpg",
//           boutiqueId: 74,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Vodka on the Rocks",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N3CY01_833x917_0.jpg",
//           boutiqueId: 74,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Moonlight in Heaven",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N3CX01_833x917_0.jpg",
//           boutiqueId: 74,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Angles Share",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N36E01_833x917_0.jpg",
//           boutiqueId: 75,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Apple Brandy - On The Rocks",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N45101_833x917_0.jpg",
//           boutiqueId: 75,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Black Phantom - Memento Mori",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N3EH01_833x917_0.jpg",
//           boutiqueId: 75,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Intoxicated",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N3EE01_833x917_0.jpg",
//           boutiqueId: 75,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Love, Don't be Shy",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N3E191_833x917_0.jpg",
//           boutiqueId: 75,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Rolling in Love",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N3EX01_833x917_0.jpg",
//           boutiqueId: 75,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Vodka on the Rocks",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N3CY01_833x917_0.jpg",
//           boutiqueId: 75,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Moonlight in Heaven",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N3CX01_833x917_0.jpg",
//           boutiqueId: 75,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Angles Share",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N36E01_833x917_0.jpg",
//           boutiqueId: 76,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Apple Brandy - On The Rocks",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N45101_833x917_0.jpg",
//           boutiqueId: 76,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Black Phantom - Memento Mori",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N3EH01_833x917_0.jpg",
//           boutiqueId: 76,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Intoxicated",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N3EE01_833x917_0.jpg",
//           boutiqueId: 76,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Love, Don't be Shy",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N3E191_833x917_0.jpg",
//           boutiqueId: 76,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Rolling in Love",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N3EX01_833x917_0.jpg",
//           boutiqueId: 76,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Vodka on the Rocks",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N3CY01_833x917_0.jpg",
//           boutiqueId: 76,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Moonlight in Heaven",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.bykilian.com/media/images/products/833x917/kl_sku_N3CX01_833x917_0.jpg",
//           boutiqueId: 76,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Elysium Pour Homme",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0554/4192/2718/products/elysium-pour-homme-fragrance-roja-parfums-100ml-221654_1080x.jpg?v=1164883228.jpg",
//           boutiqueId: 77,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Manhattan EDP",
//           numberAvailable: 1,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0554/4192/2718/products/manhattan-fragrance-roja-parfums-100ml-513822_1080x.jpg?v=1165141217.jpg",
//           boutiqueId: 77,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Apex EDP",
//           numberAvailable: 0,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0554/4192/2718/products/apex-eau-de-parfum-fragrance-roja-parfums-100ml-803128_1080x.jpg?v=1164883222.jpg",
//           boutiqueId: 77,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Enigma Pour Homme",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0554/4192/2718/products/enigma-pour-homme-fragrance-roja-parfums-100ml-104015_1080x.jpg?v=1164883249.jpg",
//           boutiqueId: 77,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Oceania",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0554/4192/2718/products/oceania-fragrance-roja-parfums-100ml-510265_1080x.jpg?v=1164883832.jpg",
//           boutiqueId: 77,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "A Midsummer Dream",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0554/4192/2718/products/a-midsummer-dream-fragrance-roja-parfums-100ml-811949_1080x.jpg?v=1164883209.jpg",
//           boutiqueId: 77,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Elysium Pour Homme",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0554/4192/2718/products/elysium-pour-homme-fragrance-roja-parfums-100ml-221654_1080x.jpg?v=1164883228.jpg",
//           boutiqueId: 78,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Manhattan EDP",
//           numberAvailable: 1,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0554/4192/2718/products/manhattan-fragrance-roja-parfums-100ml-513822_1080x.jpg?v=1165141217.jpg",
//           boutiqueId: 78,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Apex EDP",
//           numberAvailable: 0,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0554/4192/2718/products/apex-eau-de-parfum-fragrance-roja-parfums-100ml-803128_1080x.jpg?v=1164883222.jpg",
//           boutiqueId: 78,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Enigma Pour Homme",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0554/4192/2718/products/enigma-pour-homme-fragrance-roja-parfums-100ml-104015_1080x.jpg?v=1164883249.jpg",
//           boutiqueId: 78,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Oceania",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0554/4192/2718/products/oceania-fragrance-roja-parfums-100ml-510265_1080x.jpg?v=1164883832.jpg",
//           boutiqueId: 78,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "A Midsummer Dream",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://cdn.shopify.com/s/files/1/0554/4192/2718/products/a-midsummer-dream-fragrance-roja-parfums-100ml-811949_1080x.jpg?v=1164883209.jpg",
//           boutiqueId: 78,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Magnolia Infinita",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dwa94a9202/images/hi-res-1/ADPADP081333-100ML.master.1.H1.jpg?sw=1560&q=85.jpg",
//           boutiqueId: 81,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Colonia",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dwaa833fe1/images/hi-res-1/ADP009-100ML.master.1.H1.jpg?sw=1560&q=85.jpg",
//           boutiqueId: 81,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Lily Of The Valley",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw5c27cd9a/images/hi-res-1/ADPADP081121-100ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 81,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Camelia",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw722b32cb/images/hi-res-1/ADP81021-100ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 81,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Sakura",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dwbad65d32/images/hi-res-1/ADP81031-100ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 81,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Anarcia Di Capri",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw316f80a2/images/hi-res-1/ADP51901-22ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 81,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Fico Di Amalfi",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dwccb2f61b/images/hi-res-1/ADP51905-22ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 81,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Mirto Di Panarea",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw8adfc188/images/hi-res-1/ADP51907-22ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 81,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Mandorlo Di Sicilia",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw135e1dfb/images/hi-res-1/ADP51903-22ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 81,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Rosa Nobile",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw84e6394d/images/hi-res-1/ADP49001-50ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 81,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Peonia Nobile",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dwa5eb131c/images/hi-res-1/ADP40001-50ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 81,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Magnolia Nobile",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw57fa3457/images/hi-res-1/ADP41901-50ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 81,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Magnolia Infinita",
//           numberAvailable: 0,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dwa94a9202/images/hi-res-1/ADPADP081333-100ML.master.1.H1.jpg?sw=1560&q=85.jpg",
//           boutiqueId: 82,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Colonia",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dwaa833fe1/images/hi-res-1/ADP009-100ML.master.1.H1.jpg?sw=1560&q=85.jpg",
//           boutiqueId: 82,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Lily Of The Valley",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw5c27cd9a/images/hi-res-1/ADPADP081121-100ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 82,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Camelia",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw722b32cb/images/hi-res-1/ADP81021-100ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 82,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Sakura",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dwbad65d32/images/hi-res-1/ADP81031-100ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 82,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Anarcia Di Capri",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw316f80a2/images/hi-res-1/ADP51901-22ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 82,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Fico Di Amalfi",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dwccb2f61b/images/hi-res-1/ADP51905-22ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 82,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Mirto Di Panarea",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw8adfc188/images/hi-res-1/ADP51907-22ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 82,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Mandorlo Di Sicilia",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw135e1dfb/images/hi-res-1/ADP51903-22ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 82,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Rosa Nobile",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw84e6394d/images/hi-res-1/ADP49001-50ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 82,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Peonia Nobile",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dwa5eb131c/images/hi-res-1/ADP40001-50ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 82,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Magnolia Nobile",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw57fa3457/images/hi-res-1/ADP41901-50ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 82,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Magnolia Infinita",
//           numberAvailable: 0,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dwa94a9202/images/hi-res-1/ADPADP081333-100ML.master.1.H1.jpg?sw=1560&q=85.jpg",
//           boutiqueId: 83,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Colonia",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dwaa833fe1/images/hi-res-1/ADP009-100ML.master.1.H1.jpg?sw=1560&q=85.jpg",
//           boutiqueId: 83,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Lily Of The Valley",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw5c27cd9a/images/hi-res-1/ADPADP081121-100ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 83,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Camelia",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw722b32cb/images/hi-res-1/ADP81021-100ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 83,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Sakura",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dwbad65d32/images/hi-res-1/ADP81031-100ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 83,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Anarcia Di Capri",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw316f80a2/images/hi-res-1/ADP51901-22ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 83,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Fico Di Amalfi",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dwccb2f61b/images/hi-res-1/ADP51905-22ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 83,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Mirto Di Panarea",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw8adfc188/images/hi-res-1/ADP51907-22ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 83,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Mandorlo Di Sicilia",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw135e1dfb/images/hi-res-1/ADP51903-22ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 83,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Rosa Nobile",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw84e6394d/images/hi-res-1/ADP49001-50ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 83,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Peonia Nobile",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dwa5eb131c/images/hi-res-1/ADP40001-50ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 83,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Magnolia Nobile",
//           numberAvailable: 0,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw57fa3457/images/hi-res-1/ADP41901-50ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 83,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Magnolia Infinita",
//           numberAvailable: 0,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dwa94a9202/images/hi-res-1/ADPADP081333-100ML.master.1.H1.jpg?sw=1560&q=85.jpg",
//           boutiqueId: 84,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Colonia",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dwaa833fe1/images/hi-res-1/ADP009-100ML.master.1.H1.jpg?sw=1560&q=85.jpg",
//           boutiqueId: 84,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Lily Of The Valley",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw5c27cd9a/images/hi-res-1/ADPADP081121-100ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 84,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Camelia",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw722b32cb/images/hi-res-1/ADP81021-100ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 84,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Sakura",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dwbad65d32/images/hi-res-1/ADP81031-100ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 84,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Anarcia Di Capri",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw316f80a2/images/hi-res-1/ADP51901-22ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 84,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Fico Di Amalfi",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dwccb2f61b/images/hi-res-1/ADP51905-22ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 84,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Mirto Di Panarea",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw8adfc188/images/hi-res-1/ADP51907-22ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 84,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Mandorlo Di Sicilia",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw135e1dfb/images/hi-res-1/ADP51903-22ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 84,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Rosa Nobile",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw84e6394d/images/hi-res-1/ADP49001-50ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 84,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Peonia Nobile",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dwa5eb131c/images/hi-res-1/ADP40001-50ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 84,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Magnolia Nobile",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.acquadiparma.com/dw/image/v2/BDPB_PRD/on/demandware.static/-/Sites-adp-master-catalog/default/dw57fa3457/images/hi-res-1/ADP41901-50ML.master.1.H1.jpg?sw=800&q=90.jpg",
//           boutiqueId: 84,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "EPICES EXQUISES - EAU DE PARFUM",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dw205921c6/primary_packshot_3/2022/Fragrance/Absolus_Dorient/G014222_3346419142220_EPICES-EXQUISES-125ML.png?sw=500&sh=500.jpg",
//           boutiqueId: 80,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "SANTAL ROYAL - EAU DE PARFUM",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dw16f1c40b/primary_packshot_3/2022/Fragrance/Absolus_Dorient/G011637_3346419116322_S_ROYAL-78-EDP-VAPO-125ML.png?sw=500&sh=500.jpg",
//           boutiqueId: 80,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "OUD ESSENTIEL - EAU DE PARFUM",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dwe2e15b3e/primary_packshot_3/2022/Fragrance/Absolus_Dorient/G013224_3346419132245_OUD_ESS-78-EDP-VAPO-125ML.png?sw=500&sh=500.jpg",
//           boutiqueId: 80,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "CUIR INTENSE - EAU DE PARFUM",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dw053e041f/primary_packshot_3/2022/Fragrance/Absolus_Dorient/G013117_3346419131125_CUIR_INTENSE-78-EDP-VAPO-125ML.png?sw=500&sh=500.jpg",
//           boutiqueId: 80,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "PATCHOULI ARDENT - EAU DE PARFUM",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dw8f18d7eb/primary_packshot_3/2022/Fragrance/Absolus_Dorient/G014018_3346419140189_PATCHOULI-78-EDP-VAPO-125ML.png?sw=500&sh=500.jpg",
//           boutiqueId: 80,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "L'HOMME IDÉAL - EAU DE TOILETTE",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dw99206a98/primary_packshot_3/2022/Fragrance/Men_Repack/G030186_3346419301863_L'HOMME-IDEAL-14-EDT-VAPO-100ML.jpg?sw=500&sh=500.jpg",
//           boutiqueId: 80,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "L'HOMME IDÉAL - L'INTENSE - EAU DE PARFUM",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dw89aca0b7/primary_packshot_3/2022/Fragrance/Men_Repack/G013491_3346419134911_L'HOMME-IDEAL-74-INTENSE-EDP-VAPO-100ML.jpg?sw=500&sh=500.jpg",
//           boutiqueId: 80,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "VÉTIVER - EAU DE TOILETTE",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dwa4b639f3/primary_packshot_3/2022/Fragrance/Men_Repack/G030486_3346419304864_VETIVER%2022%20EDT%20VAPO%20100ML.jpg?sw=500&sh=500.jpg",
//           boutiqueId: 80,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "GUERLAIN HOMME - EAU DE PARFUM",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dwc8324b28/primary_packshot_3/2022/Fragrance/Men_Repack/G030492_3346419304925_GUERLAIN%20HOMME%2022%20EDP%20VAPO%20100ML.jpg?sw=500&sh=500.jpg",
//           boutiqueId: 80,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "HÉRITAGE - EAU DE PARFUM",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dw5ca44be2/primary_packshot_3/2022/Fragrance/Men_Repack/G030491_3346419304918_HERITAGE%2022%20EDP%20VAPO%20100ML.jpg?sw=500&sh=500.jpg",
//           boutiqueId: 80,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "LES COLOGNES - EAU DE COLOGNE IMPÉRIALE",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dw00e4fbbf/primary_packshot_3/2022/Fragrance/Colognes/G021205_3346419212059_EAU-90-IMP-EDC-VAPO-100ML.png?sw=500&sh=500.jpg",
//           boutiqueId: 80,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "LES COLOGNES - EAU DE GUERLAIN - EAU DE COLOGNE",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dw15f33205/primary_packshot_3/2022/Fragrance/Colognes/G024381_3346419243811_EAU-90-GUE-EDC-VAPO-100ML.png?sw=500&sh=500.jpg",
//           boutiqueId: 80,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "EPICES EXQUISES - EAU DE PARFUM",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dw205921c6/primary_packshot_3/2022/Fragrance/Absolus_Dorient/G014222_3346419142220_EPICES-EXQUISES-125ML.png?sw=500&sh=500.jpg",
//           boutiqueId: 78,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "SANTAL ROYAL - EAU DE PARFUM",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dw16f1c40b/primary_packshot_3/2022/Fragrance/Absolus_Dorient/G011637_3346419116322_S_ROYAL-78-EDP-VAPO-125ML.png?sw=500&sh=500.jpg",
//           boutiqueId: 78,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "OUD ESSENTIEL - EAU DE PARFUM",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dwe2e15b3e/primary_packshot_3/2022/Fragrance/Absolus_Dorient/G013224_3346419132245_OUD_ESS-78-EDP-VAPO-125ML.png?sw=500&sh=500.jpg",
//           boutiqueId: 78,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "CUIR INTENSE - EAU DE PARFUM",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dw053e041f/primary_packshot_3/2022/Fragrance/Absolus_Dorient/G013117_3346419131125_CUIR_INTENSE-78-EDP-VAPO-125ML.png?sw=500&sh=500.jpg",
//           boutiqueId: 78,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "PATCHOULI ARDENT - EAU DE PARFUM",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dw8f18d7eb/primary_packshot_3/2022/Fragrance/Absolus_Dorient/G014018_3346419140189_PATCHOULI-78-EDP-VAPO-125ML.png?sw=500&sh=500.jpg",
//           boutiqueId: 78,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "L'HOMME IDÉAL - EAU DE TOILETTE",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dw99206a98/primary_packshot_3/2022/Fragrance/Men_Repack/G030186_3346419301863_L'HOMME-IDEAL-14-EDT-VAPO-100ML.jpg?sw=500&sh=500.jpg",
//           boutiqueId: 78,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "L'HOMME IDÉAL - L'INTENSE - EAU DE PARFUM",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dw89aca0b7/primary_packshot_3/2022/Fragrance/Men_Repack/G013491_3346419134911_L'HOMME-IDEAL-74-INTENSE-EDP-VAPO-100ML.jpg?sw=500&sh=500.jpg",
//           boutiqueId: 78,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "VÉTIVER - EAU DE TOILETTE",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dwa4b639f3/primary_packshot_3/2022/Fragrance/Men_Repack/G030486_3346419304864_VETIVER%2022%20EDT%20VAPO%20100ML.jpg?sw=500&sh=500.jpg",
//           boutiqueId: 78,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "GUERLAIN HOMME - EAU DE PARFUM",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dwc8324b28/primary_packshot_3/2022/Fragrance/Men_Repack/G030492_3346419304925_GUERLAIN%20HOMME%2022%20EDP%20VAPO%20100ML.jpg?sw=500&sh=500.jpg",
//           boutiqueId: 78,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "HÉRITAGE - EAU DE PARFUM",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dw5ca44be2/primary_packshot_3/2022/Fragrance/Men_Repack/G030491_3346419304918_HERITAGE%2022%20EDP%20VAPO%20100ML.jpg?sw=500&sh=500.jpg",
//           boutiqueId: 78,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "LES COLOGNES - EAU DE COLOGNE IMPÉRIALE",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dw00e4fbbf/primary_packshot_3/2022/Fragrance/Colognes/G021205_3346419212059_EAU-90-IMP-EDC-VAPO-100ML.png?sw=500&sh=500.jpg",
//           boutiqueId: 78,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "LES COLOGNES - EAU DE GUERLAIN - EAU DE COLOGNE",
//           numberAvailable: 50,
//           perfumeImgUrl:
//             "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dw15f33205/primary_packshot_3/2022/Fragrance/Colognes/G024381_3346419243811_EAU-90-GUE-EDC-VAPO-100ML.png?sw=500&sh=500.jpg",
//           boutiqueId: 78,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
        
//       ],

//       {}
//     );
//   },

//   down: (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('Perfumes', null, {});
//   }
// }


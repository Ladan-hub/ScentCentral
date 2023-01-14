

"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Perfumes",
      [
        {
          name: "Layton",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.scentstore.com/wp-content/uploads/2017/08/Parfums-de-Marly-Layton-125ml-and-75ml-SHot-3-.jpg",
          boutiqueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Haltane",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://obsentum-prod.ams3.digitaloceanspaces.com/sylius_shop_product_original/0a/e7/63c793c247652ff2bd710959ed38.jpg",
          boutiqueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sedley",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://plummour.com/wp-content/uploads/2022/01/Parfums-de-marley-SEDLEY-EDP-125ml-4.jpg",
          boutiqueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Percival",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.giraofertas.com.br/wp-content/uploads/2022/06/Percival-Parfums-de-Marly-Eau-de-Parfum-04.jpg",
          boutiqueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pegasus",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://plummour.com/wp-content/uploads/2021/09/pegasus-lidestyle-2_800.jpg",
          boutiqueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Herod",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://plummour.com/wp-content/uploads/2021/09/herod-lifestyle_800x.jpg",
          boutiqueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Carlisle",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://cdn.shopify.com/s/files/1/2510/0104/products/Parfums-De-Marly-Carlisle-125ml-2.jpg?v=1602216617&width=1024.jpg",
          boutiqueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Oriana",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://fimgs.net/himg/o.rpiYrJqLGqU.jpg",
          boutiqueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Delina",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://plummour.com/wp-content/uploads/2022/07/DELINA-EXCLUSIF-edp-75ml-4.jpg",
          boutiqueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Athalia",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://cdn.shopify.com/s/files/1/0570/0688/2975/products/Athalia.jpg?v=1651644483.jpg",
          boutiqueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Safanad",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://plummour.com/wp-content/uploads/2021/11/Safanad-Parfums-de-Marly-75ml-edp-4.jpg",
          boutiqueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Layton",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.scentstore.com/wp-content/uploads/2017/08/Parfums-de-Marly-Layton-125ml-and-75ml-SHot-3-.jpg",
          boutiqueId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Haltane",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://obsentum-prod.ams3.digitaloceanspaces.com/sylius_shop_product_original/0a/e7/63c793c247652ff2bd710959ed38.jpg",
          boutiqueId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sedley",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://plummour.com/wp-content/uploads/2022/01/Parfums-de-marley-SEDLEY-EDP-125ml-4.jpg",
          boutiqueId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Percival",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.giraofertas.com.br/wp-content/uploads/2022/06/Percival-Parfums-de-Marly-Eau-de-Parfum-04.jpg",
          boutiqueId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pegasus",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://plummour.com/wp-content/uploads/2021/09/pegasus-lidestyle-2_800.jpg",
          boutiqueId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Herod",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://plummour.com/wp-content/uploads/2021/09/herod-lifestyle_800x.jpg",
          boutiqueId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Carlisle",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://cdn.shopify.com/s/files/1/2510/0104/products/Parfums-De-Marly-Carlisle-125ml-2.jpg?v=1602216617&width=1024.jpg",
          boutiqueId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Oriana",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://fimgs.net/himg/o.rpiYrJqLGqU.jpg",
          boutiqueId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Delina",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://plummour.com/wp-content/uploads/2022/07/DELINA-EXCLUSIF-edp-75ml-4.jpg",
          boutiqueId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Athalia",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://cdn.shopify.com/s/files/1/0570/0688/2975/products/Athalia.jpg?v=1651644483.jpg",
          boutiqueId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Safanad",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://plummour.com/wp-content/uploads/2021/11/Safanad-Parfums-de-Marly-75ml-edp-4.jpg",
          boutiqueId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Layton",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.scentstore.com/wp-content/uploads/2017/08/Parfums-de-Marly-Layton-125ml-and-75ml-SHot-3-.jpg",
          boutiqueId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Haltane",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://obsentum-prod.ams3.digitaloceanspaces.com/sylius_shop_product_original/0a/e7/63c793c247652ff2bd710959ed38.jpg",
          boutiqueId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sedley",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://plummour.com/wp-content/uploads/2022/01/Parfums-de-marley-SEDLEY-EDP-125ml-4.jpg",
          boutiqueId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Percival",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.giraofertas.com.br/wp-content/uploads/2022/06/Percival-Parfums-de-Marly-Eau-de-Parfum-04.jpg",
          boutiqueId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pegasus",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://plummour.com/wp-content/uploads/2021/09/pegasus-lidestyle-2_800.jpg",
          boutiqueId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Herod",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://plummour.com/wp-content/uploads/2021/09/herod-lifestyle_800x.jpg",
          boutiqueId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Carlisle",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://cdn.shopify.com/s/files/1/2510/0104/products/Parfums-De-Marly-Carlisle-125ml-2.jpg?v=1602216617&width=1024.jpg",
          boutiqueId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Oriana",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://fimgs.net/himg/o.rpiYrJqLGqU.jpg",
          boutiqueId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Delina",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://plummour.com/wp-content/uploads/2022/07/DELINA-EXCLUSIF-edp-75ml-4.jpg",
          boutiqueId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Athalia",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://cdn.shopify.com/s/files/1/0570/0688/2975/products/Athalia.jpg?v=1651644483.jpg",
          boutiqueId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Safanad",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://plummour.com/wp-content/uploads/2021/11/Safanad-Parfums-de-Marly-75ml-edp-4.jpg",
          boutiqueId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Angles Share",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p465332-av-05-zoom.jpg",
          boutiqueId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Apple Brandy - On The Rocks",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p475958-av-05-zoom.jpg",
          boutiqueId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Black Phantom - Memento Mori",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.temptalia.com/wp-content/uploads/2022/03/kilian_black-phantom-memento-mori_001_product.jpg",
          boutiqueId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Intoxicated",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.bykilian.com/media/images/products/833x968/kl_sku_N3EE01_833x968_4.jpg",
          boutiqueId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Love, Don't be Shy",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.musingsofamuse.com/wp-content/uploads/2021/02/love-dont-be-shy-extreme.jpg",
          boutiqueId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rolling in Love",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://m.kilian-paris.sa/media/images/products/387x450/kl_sku_N3WP01_387x450_1.jpg",
          boutiqueId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vodka on the Rocks",
          numberAvailable: 50,
          perfumeImgUrl: "https://fimgs.net/himg/o.TADekpmgLm3.png",
          boutiqueId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Moonlight in Heaven",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p429623-av-04-zoom.jpg",
          boutiqueId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Angles Share",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p465332-av-05-zoom.jpg",
          boutiqueId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Apple Brandy - On The Rocks",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p475958-av-05-zoom.jpg",
          boutiqueId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Black Phantom - Memento Mori",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.temptalia.com/wp-content/uploads/2022/03/kilian_black-phantom-memento-mori_001_product.jpg",
          boutiqueId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Intoxicated",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.bykilian.com/media/images/products/833x968/kl_sku_N3EE01_833x968_4.jpg",
          boutiqueId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Love, Don't be Shy",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.musingsofamuse.com/wp-content/uploads/2021/02/love-dont-be-shy-extreme.jpg",
          boutiqueId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rolling in Love",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://m.kilian-paris.sa/media/images/products/387x450/kl_sku_N3WP01_387x450_1.jpg",
          boutiqueId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vodka on the Rocks",
          numberAvailable: 50,
          perfumeImgUrl: "https://fimgs.net/himg/o.TADekpmgLm3.png",
          boutiqueId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Moonlight in Heaven",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p429623-av-04-zoom.jpg",
          boutiqueId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Angles Share",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p465332-av-05-zoom.jpg",
          boutiqueId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Apple Brandy - On The Rocks",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p475958-av-05-zoom.jpg",
          boutiqueId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Black Phantom - Memento Mori",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.temptalia.com/wp-content/uploads/2022/03/kilian_black-phantom-memento-mori_001_product.jpg",
          boutiqueId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Intoxicated",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.bykilian.com/media/images/products/833x968/kl_sku_N3EE01_833x968_4.jpg",
          boutiqueId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Love, Don't be Shy",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.musingsofamuse.com/wp-content/uploads/2021/02/love-dont-be-shy-extreme.jpg",
          boutiqueId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rolling in Love",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://m.kilian-paris.sa/media/images/products/387x450/kl_sku_N3WP01_387x450_1.jpg",
          boutiqueId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vodka on the Rocks",
          numberAvailable: 50,
          perfumeImgUrl: "https://fimgs.net/himg/o.TADekpmgLm3.png",
          boutiqueId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Moonlight in Heaven",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p429623-av-04-zoom.jpg",
          boutiqueId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Magnolia Infinita",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://theluxuryeditor.com/wp-content/uploads/2022/08/NEW-Acqua-di-Parma_MagnoliaInfinita_MoodImage-1.jpg",
          boutiqueId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Colonia",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p163604-av-01-zoom.jpg?imwidth=315.jpg",
          boutiqueId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lily Of The Valley",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://editorialist.com/wp-content/uploads/2022/02/Best-Lily-of-the-Valley-Fragrances_Featured-Secondary-Image.jpg",
          boutiqueId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Camelia",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://sokilondon.com/wp-content/uploads/2022/08/Camelia-Eau-de-Parfum-Acqua-di-Parma.png",
          boutiqueId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sakura",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://n.nordstrommedia.com/id/sr3/fd2b250a-fe49-44d1-a2d3-476372eb013f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196.jpg",
          boutiqueId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anarcia Di Capri",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p375388-av-15-zoom.jpg?imwidth=1224",
          boutiqueId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fico Di Amalfi",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://media.endclothing.com/media/catalog/product/a/c/acqua-di-parma-fico-di-amalfi-edt-natural-spray-_adp-57006_m7.jpg",
          boutiqueId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mirto Di Panarea",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-p8028713570070-1.jpg?v=1668834717.jpg",
          boutiqueId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mandorlo Di Sicilia",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p307803-av-15-zoom.jpg?imwidth=1224.jpg",
          boutiqueId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rosa Nobile",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://cdn.shopify.com/s/files/1/0593/1017/8440/products/acqua-di-parma-rosa-nobile-eau-de-parfum-100ml-no-color-3.jpg?v=1662546408.jpg",
          boutiqueId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Peonia Nobile",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p413669-av-01-zoom.jpg",
          boutiqueId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Magnolia Nobile",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://cdn.shopify.com/s/files/1/0593/1017/8440/products/acqua-di-parma-magnolia-nobile-eau-de-parfum-100ml-no-color-2.jpg?v=1662546407.jpg",
          boutiqueId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Magnolia Infinita",
          numberAvailable: 0,
          perfumeImgUrl:
            "https://theluxuryeditor.com/wp-content/uploads/2022/08/NEW-Acqua-di-Parma_MagnoliaInfinita_MoodImage-1.jpg",
          boutiqueId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Colonia",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p163604-av-01-zoom.jpg?imwidth=315.jpg",
          boutiqueId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lily Of The Valley",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://editorialist.com/wp-content/uploads/2022/02/Best-Lily-of-the-Valley-Fragrances_Featured-Secondary-Image.jpg",
          boutiqueId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Camelia",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://sokilondon.com/wp-content/uploads/2022/08/Camelia-Eau-de-Parfum-Acqua-di-Parma.png",
          boutiqueId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sakura",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://n.nordstrommedia.com/id/sr3/fd2b250a-fe49-44d1-a2d3-476372eb013f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196.jpg",
          boutiqueId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anarcia Di Capri",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p375388-av-15-zoom.jpg?imwidth=1224",
          boutiqueId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fico Di Amalfi",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://media.endclothing.com/media/catalog/product/a/c/acqua-di-parma-fico-di-amalfi-edt-natural-spray-_adp-57006_m7.jpg",
          boutiqueId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mirto Di Panarea",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-p8028713570070-1.jpg?v=1668834717.jpg",
          boutiqueId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mandorlo Di Sicilia",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p307803-av-15-zoom.jpg?imwidth=1224.jpg",
          boutiqueId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rosa Nobile",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://cdn.shopify.com/s/files/1/0593/1017/8440/products/acqua-di-parma-rosa-nobile-eau-de-parfum-100ml-no-color-3.jpg?v=1662546408.jpg",
          boutiqueId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Peonia Nobile",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p413669-av-01-zoom.jpg",
          boutiqueId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Magnolia Nobile",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://cdn.shopify.com/s/files/1/0593/1017/8440/products/acqua-di-parma-magnolia-nobile-eau-de-parfum-100ml-no-color-2.jpg?v=1662546407.jpg",
          boutiqueId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Magnolia Infinita",
          numberAvailable: 0,
          perfumeImgUrl:
            "https://theluxuryeditor.com/wp-content/uploads/2022/08/NEW-Acqua-di-Parma_MagnoliaInfinita_MoodImage-1.jpg",
          boutiqueId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Colonia",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p163604-av-01-zoom.jpg?imwidth=315.jpg",
          boutiqueId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lily Of The Valley",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://editorialist.com/wp-content/uploads/2022/02/Best-Lily-of-the-Valley-Fragrances_Featured-Secondary-Image.jpg",
          boutiqueId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Camelia",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://sokilondon.com/wp-content/uploads/2022/08/Camelia-Eau-de-Parfum-Acqua-di-Parma.png",
          boutiqueId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sakura",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://n.nordstrommedia.com/id/sr3/fd2b250a-fe49-44d1-a2d3-476372eb013f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196.jpg",
          boutiqueId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anarcia Di Capri",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p375388-av-15-zoom.jpg?imwidth=1224",
          boutiqueId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fico Di Amalfi",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://media.endclothing.com/media/catalog/product/a/c/acqua-di-parma-fico-di-amalfi-edt-natural-spray-_adp-57006_m7.jpg",
          boutiqueId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mirto Di Panarea",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-p8028713570070-1.jpg?v=1668834717.jpg",
          boutiqueId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mandorlo Di Sicilia",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p307803-av-15-zoom.jpg?imwidth=1224.jpg",
          boutiqueId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rosa Nobile",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://cdn.shopify.com/s/files/1/0593/1017/8440/products/acqua-di-parma-rosa-nobile-eau-de-parfum-100ml-no-color-3.jpg?v=1662546408.jpg",
          boutiqueId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Peonia Nobile",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p413669-av-01-zoom.jpg",
          boutiqueId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Magnolia Nobile",
          numberAvailable: 0,
          perfumeImgUrl:
            "https://cdn.shopify.com/s/files/1/0593/1017/8440/products/acqua-di-parma-magnolia-nobile-eau-de-parfum-100ml-no-color-2.jpg?v=1662546407.jpg",
          boutiqueId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Magnolia Infinita",
          numberAvailable: 0,
          perfumeImgUrl:
            "https://theluxuryeditor.com/wp-content/uploads/2022/08/NEW-Acqua-di-Parma_MagnoliaInfinita_MoodImage-1.jpg",
          boutiqueId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Colonia",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p163604-av-01-zoom.jpg?imwidth=315.jpg",
          boutiqueId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lily Of The Valley",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://editorialist.com/wp-content/uploads/2022/02/Best-Lily-of-the-Valley-Fragrances_Featured-Secondary-Image.jpg",
          boutiqueId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Camelia",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://sokilondon.com/wp-content/uploads/2022/08/Camelia-Eau-de-Parfum-Acqua-di-Parma.png",
          boutiqueId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sakura",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://n.nordstrommedia.com/id/sr3/fd2b250a-fe49-44d1-a2d3-476372eb013f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196.jpg",
          boutiqueId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anarcia Di Capri",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p375388-av-15-zoom.jpg?imwidth=1224",
          boutiqueId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fico Di Amalfi",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://media.endclothing.com/media/catalog/product/a/c/acqua-di-parma-fico-di-amalfi-edt-natural-spray-_adp-57006_m7.jpg",
          boutiqueId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mirto Di Panarea",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-p8028713570070-1.jpg?v=1668834717.jpg",
          boutiqueId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mandorlo Di Sicilia",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p307803-av-15-zoom.jpg?imwidth=1224.jpg",
          boutiqueId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rosa Nobile",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://cdn.shopify.com/s/files/1/0593/1017/8440/products/acqua-di-parma-rosa-nobile-eau-de-parfum-100ml-no-color-3.jpg?v=1662546408.jpg",
          boutiqueId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Peonia Nobile",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://www.sephora.com/productimages/product/p413669-av-01-zoom.jpg",
          boutiqueId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Magnolia Nobile",
          numberAvailable: 50,
          perfumeImgUrl:
            "https://cdn.shopify.com/s/files/1/0593/1017/8440/products/acqua-di-parma-magnolia-nobile-eau-de-parfum-100ml-no-color-2.jpg?v=1662546407.jpg",
          boutiqueId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Perfumes", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};


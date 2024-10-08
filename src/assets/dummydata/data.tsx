import { ProductData } from "../../interfaces/interface";


// product Data
export const productData: ProductData[] = [
  {
    id: 1,
    category: "Computers and Laptops",
    name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales. Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      { public_id: "test", url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png" },
      { public_id: "test", url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png" },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: { public_id: "test", url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png" },
      ratings: 4.2,
    },
    price: 1099,
    discount_price: 1049,
    ratings: 4,
    total_sell: 35,
    stock: 10,
    reviews: [] // Added empty reviews array
  },
  {
    id: 2,
    category: "Mobile and Tablets",
    name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales. Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      { public_id: "test2", url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" },
      { public_id: "test3", url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" },
    ],
    shop: {
      name: "Amazon Ltd",
      shop_avatar: { public_id: "test", url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png" },
      ratings: 4.2,
    },
    price: 1099,
    discount_price: 1049,
    ratings: 5,
    total_sell: 80,
    stock: 10,
    reviews: [] // Added empty reviews array
  },
  {
    id: 3, // Corrected ID to avoid duplicates
    category: "Computers and Laptops", // Fixed category name
    name: "MacBook pro M2 chipset 256gb ssd 8gb ram space gray color with apple 1 year warranty",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales. Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      { public_id: "test", url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png" },
      { public_id: "test", url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png" },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: { public_id: "test", url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png" },
      ratings: 4.2,
    },
    price: 1099,
    discount_price: 1049,
    ratings: 4,
    total_sell: 75,
    stock: 10,
    reviews: [] // Added empty reviews array
  },
  {
    id: 4,
    category: "Others",
    name: "New Fashionable Watch for men 2023 with multiple colors",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales. Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      { public_id: "test", url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1" },
      { public_id: "test", url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1" },
    ],
    shop: {
      name: "Shahriar Watch House",
      shop_avatar: { public_id: "test", url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png" },
      ratings: 4.2,
    },
    price: 100,
    discount_price: 79,
    ratings: 4,
    total_sell: 12,
    stock: 10,
    reviews: [] // Added empty reviews array
  },
  {
    id: 5,
    category: "Shoes",
    name: "New Trend shoes for gents with all sizes",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales. Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      { public_id: "test", url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg" },
      { public_id: "test", url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg" },
    ],
    shop: {
      name: "Alisha Shoes Mart",
      shop_avatar: { public_id: "test", url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png" },
      ratings: 4.2,
    },
    price: 120,
    discount_price: 89,
    ratings: 5,
    total_sell: 49,
    stock: 10,
    reviews: [] // Added empty reviews array
  },
  {
    id: 6, // Corrected ID to avoid duplicates
    category: "Music and Gaming",
    name: "Gaming Headphone Asus with multiple colors and free delivery",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales. Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      { public_id: "test", url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg" },
      { public_id: "test", url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg" },
    ],
    shop: {
      name: "Star Tech Limited",
      shop_avatar: { public_id: "test", url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png" },
      ratings: 4.2,
    },
    price: 150,
    discount_price: 129,
    ratings: 4,
    total_sell: 24,
    stock: 10,
    reviews: [] // Added empty reviews array
  },
];






// categories data
export const categoriesData: any = [
  {
    id: 1,
    title: "Computers and Laptops",
    subTitle: "",
    image_Url:
      "https://cdn.shopify.com/s/files/1/1706/9177/products/NEWAppleMacbookProwithM1ProChip14InchLaptop2021ModelMKGQ3LL_A_16GB_1TBSSD_custommacbd.jpg?v=1659592838",
  },
  {
    id: 2,
    title: "cosmetics and body care",
    subTitle: "",
    image_Url:
      "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-07/kosme1.png",
  },
  {
    id: 3,
    title: "Accesories",
    subTitle: "",
    image_Url:
      "https://img.freepik.com/free-vector/ordering-goods-online-internet-store-online-shopping-niche-e-commerce-website-mother-buying-babies-clothes-footwear-toys-infant-accessories_335657-2345.jpg?w=2000",
  },
  {
    id: 4,
    title: "Cloths",
    subTitle: "",
    image_Url:
      "https://www.shift4shop.com/2015/images/industries/clothing/clothing-apparel.png",
  },
  {
    id: 5,
    title: "Shoes",
    subTitle: "",
    image_Url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBQPQMVNRd6TtDkGs2dCri0Y-rxKkFOiEWw&usqp=CAU",
  },
  {
    id: 6,
    title: "Gifts",
    subTitle: "",
    image_Url:
      "https://w7.pngwing.com/pngs/295/410/png-transparent-christmas-gift-christmas-gift-gift-miscellaneous-ribbon-orange.png",
  },
  {
    id: 7,
    title: "Pet Care",
    subTitle: "",
    image_Url: "https://w7.pngwing.com/pngs/18/494/png-transparent-natural-pet-care-center-veterinarian-pet-shop-clinique-veterinaire-paw-prints-leaf-pet-apartment.png",
  },
  {
    id: 8,
    title: "Mobile and Tablets",
    subTitle: "",
    image_Url:
      "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mpwp3tua-apple-iphone-14-256gb-mavi-mpwp3tua-637986832343472449.jpg",
  },
  {
    id: 9,
    title: "Music and Gaming",
    subTitle: "",
    image_Url:
      "https://static.vecteezy.com/system/resources/previews/011/996/555/original/3d-black-headphone-illustration-ecommerce-icon-png.png",
  },
  {
    id: 10,
    title: "Others",
    subTitle: "",
    image_Url:
      "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
  },
];

export const footerProductLinks = [
  {
    name: "About us",
    link: "/about"
  },
  {
    name: "Careers",
    link: "/carrers"
  },
  {
    name: "Store Locations",
  },
  {
    name: "Our Blog",
  },
  {
    name: "Reviews",
  },
];

export const footercompanyLinks = [
  {
    name: "Game & Video",
  },
  {
    name: "Phone &Tablets",
  },
  {
    name: "Computers & Laptop",
  },
  {
    name: "Sport Watches",
  },
  {
    name: "Events",
  },
];

export const footerSupportLinks = [
  {
    name: "FAQ",
  },
  {
    name: "Reviews",
  },
  {
    name: "Contact Us",
  },
  {
    name: "Shipping",
  },
  {
    name: "Live chat",
  },
];

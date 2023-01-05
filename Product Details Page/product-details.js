// var faceData = [
//     {
//       name: "Nykaa All Day Matte Long Wear Liquid Foundation With Pump",
//       price: "₹419",
//       Keywords: "FEATURED",
//       image:
//         "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/3/5/35f92daNYKAC00000174_1.jpg",
//       discount_price: "₹599",
//       discount_percentage: "30% Off",
//       reviews: "3305",
//       shades: "15 Shades",
//       bonus: "Enjoy Free Gift",
//     },
//     {
//       name: "Maybelline New York Super Stay Full Coverage Foundation",
//       price: "₹639",
//       Keywords: "FEATURED\nBESTSELLER",
//       image:
//         "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/7/875be506902395685715.jpg",
//       discount_price: "₹799",
//       discount_percentage: "20% Off",
//       reviews: "29761",
//       shades: "9 Shades",
//     },
//     {
//       name: "Kay Beauty Hydrating Foundation",
//       price: "₹900",
//       Keywords: "FEATURED",
//       image:
//         "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/b/2bc84e88904330902640_1.jpg",
//       discount_price: "₹1200",
//       discount_percentage: "25% Off",
//       reviews: "5884",
//       shades: "20 Shades",
//     },
//     {
//       name: "Nykaa Cosmetics Prep Me Up! Face Primer",
//       price: "₹129",
//       Keywords: "BESTSELLER\nNEW",
//       image:
//         "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/n/y/nykac00000142_1.jpg",
//       reviews: "6030",
//       shades: "2 Sizes",
//       bonus: "Enjoy Free Gift",
//     },
//     {
//       name: "Maybelline New York Fit Me Matte+Poreless Liquid Foundation ...",
//       price: "₹503",
//       Keywords: "BESTSELLER",
//       image:
//         "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/3/536b16c6902395718338.jpg",
//       discount_price: "₹629",
//       discount_percentage: "20% Off",
//       reviews: "78481",
//       shades: "21 Shades",
//     },
//     {
//       name: "Maybelline New York Fit Me Matte+Poreless Liquid Foundation ...",
//       price: "₹244",
//       Keywords: "BESTSELLER",
//       image:
//         "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/d/8d9e16c6902395722434.jpg",
//       discount_price: "₹325",
//       discount_percentage: "25% Off",
//       reviews: "60273",
//       shades: "6 Shades",
//     },
//     {
//       name: "M.A.C Studio Fix Powder Plus Foundation",
//       price: "₹2950",
//       Keywords: "BESTSELLER",
//       image:
//         "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/3/c3bd29a773602010509_rv__1.jpg",
//       reviews: "10848",
//       shades: "38 Shades",
//       bonus: "Enjoy Free Gift",
//     },

// ];

var productDetailsArr = [
  {
    name: "Nykaa All Day Matte Long Wear Liquid Foundation With Pump",
    price: "₹419",
    Keywords: "FEATURED",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/3/5/35f92daNYKAC00000174_1.jpg",
    discount_price: "₹599",
    discount_percentage: "30% Off",
    reviews: "3305",
    shades: "15 Shades",
    bonus: "Enjoy Free Gift",
  },
];

localStorage.setItem("product-details", JSON.stringify(productDetailsArr));
//above activity happen inside product page

var productData = JSON.parse(localStorage.getItem("product-details"));

display(productData);

function display(productData){
    
    
}

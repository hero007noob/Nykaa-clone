var faceData = [
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

// localStorage.setItem("product-details", JSON.stringify(productDetailsArr));
//above activity happen inside product page

var productData = JSON.parse(localStorage.getItem("product-details"));

display(faceData);

function display(productData) {
  productData.forEach((elem, ind) => {
    var productImg = document.querySelector(".product-img");
    productImg.setAttribute("src", elem.image);

    var productName = document.querySelector(".product-details-section>h1");
    productName.textContent = elem.name;

    var productPrice = document.querySelector(".product-price");
    productPrice.textContent = elem.price;

    var productMrp = document.querySelector(".product-mrp");
    productMrp.innerHTML = ` <s> ${elem.discount_price} </s> `;

    var discountPercent = document.querySelector(".offer");
    discountPercent.textContent = elem.discount_percentage;

    var review = document.querySelector(".reviews");
    review.textContent = elem.reviews;
  });
}

var addWishList = document.querySelector(".add-wishlist");
var removeWishList = document.querySelector(".remove-wishlist");

addWishList.addEventListener("click", function () {
  addWishList.classList.add("disable-class");
  removeWishList.classList.remove("disable-class");
});

removeWishList.addEventListener("click", function () {
  addWishList.classList.remove("disable-class");
  removeWishList.classList.add("disable-class");
});

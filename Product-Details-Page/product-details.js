// this for reference
// var faceData = [
//   {
//     name: "Nykaa All Day Matte Long Wear Liquid Foundation With Pump",
//     price: "₹419",
//     Keywords: "FEATURED",
//     image:
//       "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/3/5/35f92daNYKAC00000174_1.jpg",
//     discount_price: "₹599",
//     discount_percentage: "30% Off",
//     reviews: "3305",
//     shades: "15 Shades",
//     bonus: "Enjoy Free Gift",
//   },
// ];

var productData = JSON.parse(localStorage.getItem("product-details")) || [];

var wishListArr = JSON.parse(localStorage.getItem("product-wishlist")) || [];
var bagArr = JSON.parse(localStorage.getItem("product-Bag")) || [];

display(productData);

function display(productData) {
  productData.forEach((elem, index) => {
    var productImg = document.querySelector(".product-img");
    productImg.setAttribute("src", elem.image);

    var productName = document.querySelector(".product-details-section>h1");
    productName.textContent = elem.name;

    //area;
    var productPrice = document.querySelector(".product-price");
    var productMrp = document.querySelector(".product-mrp");
    
    var discountValue = parseInt(elem.discount_price.match(/\d+/)[0]) || 0;
    var normalPrice =  parseInt(elem.price.match(/\d+/)[0]);
    
    
    // quantity feature 

    console.log(normalPrice, discountValue, 'hje');
    var qtyDrop = document.querySelector(".qty-drop-content");
    qtyDrop.addEventListener("change", function() {
      let totalQty = qtyDrop.value;
      
      if (totalQty == 1){

        productMrp.innerHTML = ` <s>₹ ${discountValue} </s> `;
        productPrice.textContent = " ₹"+normalPrice;


      }else if (totalQty == 2){

        let newPrice = normalPrice * 2;
        productPrice.textContent = " ₹"+newPrice;

        let newDiscount = discountValue*2;
        productMrp.innerHTML = ` <s>₹ ${newDiscount} </s> `;
      
      }else if (totalQty == 3){

        let newPrice = normalPrice * 3;
        productPrice.textContent = " ₹"+newPrice;

        let newDiscount = discountValue*3;
        productMrp.innerHTML = ` <s>₹ ${newDiscount} </s> `;


      }else if (totalQty == 4){

        let newPrice = normalPrice * 4;
        productPrice.textContent = " ₹"+newPrice;

        let newDiscount = discountValue*4;
        productMrp.innerHTML = ` <s>₹ ${newDiscount} </s> `;

      }else {
        let newPrice = normalPrice * 5;
        productPrice.textContent = " ₹"+newPrice;

        let newDiscount = discountValue*5;
        productMrp.innerHTML = ` <s>₹ ${newDiscount} </s> `;
      }
    })

    var discountPercent = document.querySelector(".offer");
    var percentageCheck = elem.discount_percentage || "";
    discountPercent.textContent = percentageCheck;

    var review = document.querySelector(".reviews");
    review.textContent = elem.reviews;  

    // heart icon change functionalities
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

    //functionalites remove and add to cart and bag
    // popup
    var removeWish = document.querySelector(".add-wishlist");
    removeWish.addEventListener("click", function () {
      removeWishlistPopup();

      //remove wishlist
      wishListArr.splice(index, 1);
      localStorage.setItem("product-wishlist", JSON.stringify(wishListArr));
    });

    var addwish = document.querySelector(".remove-wishlist");
    addwish.addEventListener("click", function () {
      addToWishlistPopup();

      wishListArr.push(elem);
      localStorage.setItem("product-wishlist", JSON.stringify(wishListArr));
    });

    var addToBagBtn = document.querySelector(".addToBagBtn");
    addToBagBtn.addEventListener("click", function () {
      if (addToBagBtn.textContent == "Added to Bag") {
        console.log("working already");
        alreadyAdded();
      } else {
        addBagPopup();
        addToBagBtn.textContent = "Added to Bag";

        bagArr.push(elem);
        localStorage.setItem("product-Bag", JSON.stringify(bagArr));
      }
    });
  });
}

function addBagPopup() {
  // popup
  let pop = document.getElementsByClassName("pop-up-alert")[0];
  pop.classList.add("pop");
  pop.classList.add("bgChange");
  let message = pop.querySelector(".pop-up-msg");
  message.textContent = "Product added to bag";

  setTimeout(() => {
    pop.classList.remove("pop");
  }, 2000);
}

function alreadyAdded() {
  // popup
  let pop = document.getElementsByClassName("pop-up-alert")[0];
  pop.classList.add("pop");
  pop.classList.add("bgChange");
  let message = pop.querySelector(".pop-up-msg");
  message.textContent = "Product already in bag";

  setTimeout(() => {
    pop.classList.remove("pop");
  }, 2000);
}

// popup msg otp sent to mail
function addToWishlistPopup() {

  let pop = document.getElementsByClassName("pop-up-alert")[0];
  pop.classList.add("pop");
  pop.classList.remove("bgChange");
  let message = pop.querySelector(".pop-up-msg");
  message.textContent = "Add to wishlist";
  console.log("working add");
  setTimeout(() => {
    pop.classList.remove("pop");
  }, 2000);
}

function removeWishlistPopup() {
  let pop = document.getElementsByClassName("pop-up-alert")[0];
  pop.classList.add("pop");
  pop.classList.remove("bgChange");
  let message = pop.querySelector(".pop-up-msg");
  message.textContent = "Remove wishlist";
  console.log("working remove");

  setTimeout(() => {
    pop.classList.remove("pop");
  }, 2000);
}



// var Data = [
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
//   {
//     name: "Maybelline New York Super Stay Full Coverage Foundation",
//     price: "₹639",
//     Keywords: "FEATURED\nBESTSELLER",
//     image:
//       "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/7/875be506902395685715.jpg",
//     discount_price: "₹799",
//     discount_percentage: "20% Off",
//     reviews: "29761",
//     shades: "9 Shades",
//   },
  
// ];

// localStorage.setItem("product-wishlist",JSON.stringify(Data))


var faceData = JSON.parse(localStorage.getItem("product-wishlist")) || [];
displaywish(faceData);

function displaywish(data) {
  document.querySelector(".whishlistbox").textContent = "";
  data.map(function (elem, index) {
    var maindiv = document.createElement("div");
    maindiv.setAttribute("class", "maindiv");
    var remove=document.createElement("button");
    remove.setAttribute("class","rmvbtn")
    remove.textContent="x"
    remove.addEventListener("click", function () {
      del(index);
    });
    var parentdiv = document.createElement("div");
    parentdiv.setAttribute("class", "parentdiv");

    var imgdiv = document.createElement("div");
    imgdiv.setAttribute("class", "imgdiv");

    var textdiv = document.createElement("div");
    textdiv.setAttribute("class", "textdiv");

    var bagdiv = document.createElement("div");
    bagdiv.setAttribute("class", "bagdiv");

    var img = document.createElement("img");
    img.src = elem.image;

    var title = document.createElement("p");
    title.textContent = elem.name;
    title.setAttribute("class", "font-product-item-title");

    var mrpdiv = document.createElement("div");
    mrpdiv.setAttribute("class", "mrpdiv");

    var mrp = document.createElement("p");
    mrp.textContent = "MRP";
    mrp.setAttribute("class", "font-product-item-MRP");

    var price = document.createElement("p");
    price.textContent = elem.price;
    price.setAttribute("class", "font-product-item-price");

    var reviewdiv = document.createElement("div");
    reviewdiv.setAttribute("class", "reviewdiv");

    var starsdiv = document.createElement("div");
    var starsimg1 = document.createElement("img");
    starsimg1.src = "./product-stars.svg";
    var starsimg2 = document.createElement("img");
    starsimg2.src = "./product-stars.svg";
    var starsimg3 = document.createElement("img");
    starsimg3.src = "./product-stars.svg";
    var starsimg4 = document.createElement("img");
    starsimg4.src = "./product-stars.svg";
    var starsimg5 = document.createElement("img");
    starsimg5.src = "./product-star-white.svg";
    starsdiv.setAttribute("class", "starsdiv");

    var review = document.createElement("p");
    review.textContent = elem.reviews;
    review.setAttribute("class", "font-product-item-MRP");

    var movetobag = document.createElement("button");
    var buy = document.createElement("button");
    buy.textContent = "Buy";
    movetobag.textContent = "Move To Bag";
    movetobag.setAttribute("class", "movetobag");
    buy.setAttribute("class", "buy");
    buy.addEventListener("click", function () {
      addtobuy(elem,index);
    });

    movetobag.addEventListener("click", function () {
      addtobag(elem, index);
    });
    starsdiv.append(starsimg1, starsimg2, starsimg3, starsimg4, starsimg5);
    imgdiv.append(img);
    reviewdiv.append(starsdiv, review);
    mrpdiv.append(mrp, price);
    textdiv.append(title, mrpdiv, reviewdiv);
    bagdiv.append(buy, movetobag);
    parentdiv.append(imgdiv, textdiv, bagdiv);
    maindiv.append(remove,parentdiv);
    document.querySelector(".whishlistbox").append(maindiv);
  });
}
// window.location.href = "../../address/address.html"

var buy= JSON.parse(localStorage.getItem("buy-list")) || [];
function addtobuy(item,index)
{
  buy.push(item);
  localStorage.setItem("buy-list",JSON.stringify(buy));
  faceData.splice(index,1);
  localStorage.setItem("product-wishlist",JSON.stringify(faceData))
  displaywish(faceData)
  window.location.href = "../../address/address.html"
}

var bag= JSON.parse(localStorage.getItem("product-Bag")) || [];
function addtobag(item,index)
{
  popUp();
  bag.push(item);
  localStorage.setItem("product-Bag",JSON.stringify(bag));
  faceData.splice(index,1);
  localStorage.setItem("product-wishlist",JSON.stringify(faceData))
  displaywish(faceData)
  
}
function del(index)
{
  faceData.splice(index,1);
  localStorage.setItem("product-wishlist",JSON.stringify(faceData))
  displaywish(faceData)
}

function popUp() {
  // put all code in if() if you need to run some validation
  let pop = document.getElementsByClassName("pop-up-alert")[0];
  let message = pop.querySelector("p");
  message.textContent = "Added to Bag";
  pop.classList.add("pop");
  setTimeout(() => {
    pop.classList.remove("pop");
  }, 3000);
}



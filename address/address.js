var demoData = [
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
  {
    name: "Maybelline New York Super Stay Full Coverage Foundation",
    price: "₹639",
    Keywords: "FEATURED\nBESTSELLER",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/7/875be506902395685715.jpg",
    discount_price: "₹799",
    discount_percentage: "20% Off",
    reviews: "29761",
    shades: "9 Shades",
  },
  {
    name: "Kay Beauty Hydrating Foundation",
    price: "₹900",
    Keywords: "FEATURED",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/b/2bc84e88904330902640_1.jpg",
    discount_price: "₹1200",
    discount_percentage: "25% Off",
    reviews: "5884",
    shades: "20 Shades",
  },
];
var coll = document.getElementsByClassName("collapsible");
var i;
let bagitems = document.getElementsByClassName("bagitems")[0];
let pricesection = document.getElementsByClassName("pricesection")[0];
addSideBarCartData(demoData);
addPriceDetails();
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
function addSideBarCartData(data) {
  data.forEach((item, index) => {
    addSideBarCartDataItem(item, index);
  });
}
function addSideBarCartDataItem(item, index) {
  let parentDiv = document.getElementsByClassName("bagitems")[0];
  if (!parentDiv) return;
  const itemDiv = `
  <div class="cart-item-parent" >
  <div class="sidebar-item">
  <div class="sidebar-item-top">
    <div class="sidebar-item-img-sec">
      <img
        src="${item.image}"
        alt=""
      />
    </div>
    <div class="sidebar-item-text-sec">
      <p class="font-sidebar-item-regular">
        ${item.name}
      </p>
      <p class="font-sidebar-item-small_pink">${item.bonus || " "}</p>
    </div> 
  </div>
  <div class="sidebar-item-bottom">
    <div class="sidebar-item-quantity-sec">
      <p class="font-sidebar-item-regular">
        Quantity : <span class="sidebar-item-quantity font-sidebar-item-regular"
          > 1</span
        >
        <img
          src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/down.svg"
          alt="down-arrow"
        />
      </p>
    </div>
    <div class="sidebar-item-price-sec">
      <p class="font-sidebar-item-discount">${item.discount_price || " "}</p>
      <p class="font-sidebar-item-price">${item.price}</p>
    </div>
  </div>
</div>
</div>`;
  parentDiv.innerHTML += itemDiv;
}
function addPriceDetails() {
  let priceDetailsDiv = document.getElementsByClassName("pricesection")[0];
  priceDetailsDiv.setAttribute("class", "sidebar-price-details");
  let title = document.createElement("p");
  title.textContent = "Price Details";
  title.setAttribute("class", "font-sidebar-price-details");
  let bagMrpDiv = document.createElement("div");
  let bagMrp = document.createElement("p");
  bagMrp.textContent = "Bag MRP ";
  bagMrpDiv.setAttribute("class", "font-sidebar-item-small");
  let bagItemCount = document.createElement("span");
  bagItemCount.textContent = "(15 items)";
  bagItemCount.setAttribute("class", "sidebar-bag-item-count");
  bagMrp.appendChild(bagItemCount);
  let bagMrpPrice = document.createElement("p");
  bagMrpPrice.textContent = "₹7147";
  bagMrpDiv.append(bagMrp, bagMrpPrice);
  let bagDiscountDiv = document.createElement("div");
  let bagDiscount = document.createElement("p");
  bagDiscount.textContent = "Bag Discount";
  let bagDiscountPrice = document.createElement("p");
  bagDiscountPrice.textContent = "₹1768";
  bagDiscountDiv.append(bagDiscount, bagDiscountPrice);
  bagDiscountDiv.setAttribute("class", "font-sidebar-item-small");
  let shippingDiv = document.createElement("div");
  let shipping = document.createElement("p");
  shipping.textContent = "Shipping";
  let shippingTooltip = document.createElement("span");
  shippingTooltip.innerHTML =
    "<img src = 'https://adn-static1.nykaa.com/media/wysiwyg/Payments/5TootltipInfo.svg' ></img>";
  shipping.appendChild(shippingTooltip);
  let shippingPrice = document.createElement("p");
  let shippingPriceText = document.createElement("span");
  shippingPriceText.textContent = "₹70";
  shippingPriceText.style.textDecoration = "line-through";
  let shippingFree = document.createElement("span");
  shippingFree.style.color = "green";
  shippingFree.textContent = "Free";
  shippingPrice.append(shippingPriceText, shippingFree);
  shippingDiv.append(shipping, shippingPrice);
  shippingDiv.setAttribute("class", "font-sidebar-item-small");
  let youPayDiv = document.createElement("div");
  let youPay = document.createElement("p");
  youPay.textContent = "You Pay";
  let youPayPrice = document.createElement("p");
  youPayPrice.textContent = "₹5379";
  youPayDiv.append(youPay, youPayPrice);
  youPayDiv.setAttribute("class", "font-sidebar-price-details");
  priceDetailsDiv.append(
    title,
    bagMrpDiv,
    bagDiscountDiv,
    shippingDiv,
    youPayDiv
  );
  // parentDiv.appendChild(priceDetailsDiv);
}
// console.log("syed");

// var warnmsg = document.querySelector(".Shipping-Button");
// warnmsg.addEventListener("click", function (e) {
//   e.preventDefault();
//   var adPincode = document.querySelector(".add-pincode").value;
//   var adFlat = document.querySelector(".add-flat").value;
//   var adArea = document.querySelector(".add-area").value;
//   var adName = document.querySelector("add-name").value;
//   var adPhone = document.querySelector("add-phone").value;
//   var VadPincode = false;
//   var VadFlat = false;
//   var VadArea = false;
//   var VadName = false;
//   var VadPhone = false;
//   var wpin = document.querySelector("address-pinwarning");
//   if (!adPincode) {
//     wpin.innerHTML = "This Feild is required";
//   } else if (!(adPincode.length == 6)) {
//     wpin.innerHTML = "Pincode must be of 6 digit. Enter valid pincode.";
//   } else {
//     wpin.innerHTML = "";
//     VadPincode = true;
//   }
//   var wflat = document.querySelector("address-flatwarning");
//   if (!adFlat) {
//     wflat.innerHTML = "This Feild is required.";
//   } else if (!(adFlat.length > 4)) {
//     wflat.innerHTML = "This Feild is required.";
//   } else {
//     wflat.innerHTML = "";
//     VadFlat = true;
//   }
//   var wArea = document.querySelector(".address-areawarning");
//   if (!adArea ) {
//     wArea.innerHTML = "This Feild is required.";
//   } else if (!(adArea .length > 4)) {
//     wArea.innerHTML = "This Feild is required.";
//   } else {
//     wArea.innerHTML = "";
//     VadArea  = true;
//   }
//   var wName = document.querySelector(".address-namewarning");
//   if (!adName ) {
//     wName.innerHTML = "This Feild is required.";
//   } else if (!(adName .length > 3)) {
//     wName.innerHTML = "This Feild is required.";
//   } else {
//     wName.innerHTML = "";
//     VadName  = true;
//   }
//   var wPhone= document.querySelector(".address-phonewarning");
//   if (!adPhone ) {
//     wPhone.innerHTML = "Enter 10 digit Mobile number.";
//   } else if (!(adPhone .length == 10)) {
//     wPhone.innerHTML = "Enter 10 digit Mobile number.";
//   } else {
//     wPhone.innerHTML = "";
//     VadPhone  = true;
//   }
// });

function changesymbol() {
  let symbolchanged = document.querySelectorAll(".toggleInsert");
  console.log("syed dgsdg");
  console.log(symbolchanged[1]);

  symbolchanged[1].setAttribute("class", "");
  if (num == 1) {
    symbolchanged[1].setAttribute("class", "fa-solid fa-toggle-on");
  } else {
    symbolchanged[1].setAttribute("class", "fa-solid fa-toggle-off");
  }
}

var list=JSON.parse(localStorage.getItem("address-list"))||[];
addingaddress();
function called(){
  var x={
    name:document.querySelector(".add-name").value,
    flat:document.querySelector(".add-flat").value,
    area:document.querySelector(".add-area").value,
    pincode:document.querySelector(".add-pincode").value,
    phone:document.querySelector(".add-phone").value,
    email:document.querySelector(".add-mail").value,
  }
  list.push(x);
  console.log(x);
  localStorage.setItem("address-list",JSON.stringify(list));
  addingaddress();
}

function addingaddress() {
  // document.querySelector(".Adding-new-add").textContent="";
  var x=JSON.parse(localStorage.getItem("address-list")) ||[];
  for (var i=0;i<x.length;i++)
  {
    var div= document.createElement("div");
    div.setAttribute("id","addnewaddress")
    var div1= document.createElement("div");
    var title = document.createElement("p");
    title.textContent=x[i].name;
    div1.append(title);
    var div2= document.createElement("div");
    var road = document.createElement("p");
    road.textContent=x[i].flat;
    road.setAttribute("class","font-address-description");
    div2.append(road);
    var div3= document.createElement("div");
    var local = document.createElement("p");
    local.textContent=x[i].area;
    local.setAttribute("class","font-address-description");
    var pin = document.createElement("p");
    pin.textContent=x[i].pincode;
    div3.append(local,pin);
    pin.setAttribute("class","font-address-description");
    var div4= document.createElement("div");
    var phn = document.createElement("p");
    phn.setAttribute("class","font-address-description");
    phn.textContent=x[i].phone;
    div4.append(phn);
    var div7= document.createElement("div");
    var div5= document.createElement("button");
    div5.textContent="Edit";
    div5.setAttribute("class","ad-edit");
    var div6= document.createElement("button");
    div6.textContent="Use this address";
    div6.setAttribute("class","ad-edit");
    div7.append(div5,div6);
    div7.setAttribute("class","buttonfunction");
    div.append(div1,div2,div3,div4,div7);
    document.querySelector(".Adding-new-add").append(div);
  }
  
}
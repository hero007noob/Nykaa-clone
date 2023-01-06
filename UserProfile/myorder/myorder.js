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
    
  ];
  var data=JSON.parse(localStorage.getItem("cart"))||[];
  displayProduct(faceData);
function displayProduct(doc) {
  document.querySelector(".orderdiv").innerHTML = " ";
  doc.map(function (x, ind) {
      
      let cart=document.querySelector(".orderdiv");
    
      cart.innerHTML +=`
      <div class="order">
      <div class="items">
      <div class="imgdiv">
          <img src="${x.image}" alt="">
      </div>
      <div class="namediv">
          <p>${x.name}</p>
          <p>${x.Keywords}</p>
          <p>${x.price}</p>
      </div>
      <div class="status">
          <p class="font-product-item-MRP">Status</p>
          <h3>In - Transit</h3>
      </div>
      <div class="deliverydiv">
          <p>Delivery Expected by</p>
          <h3>x Date xxxx</h3>
      </div>
      </div>
  </div>`
  });
}

document.querySelector("#cancelAll").addEventListener("click",change);

function change()
{
    let a=document.querySelector("#cancelAll").textContent
    console.log(a)
    if(a=="Cancel Order")
    {
        document.querySelector("#tracking").innerText="Order Cancelled";
        document.querySelector("#tracking").style.background="red";
        document.querySelector("#cancelAll").textContent="Order Again"
    }
    else{
        document.querySelector("#tracking").innerText="Track Status";
        document.querySelector("#tracking").style.background="rgb(241,165,24";
        document.querySelector("#cancelAll").textContent="Cancel Order"
    }
}
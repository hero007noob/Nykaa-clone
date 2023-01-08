window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  var nav2 = document.querySelector("#nav2");
  if (nav2) nav2.classList.toggle("sticky", window.scrollY > 0);
});
const right = document.querySelector("#nav1 div");
const left = document.querySelector("#nav1 ul");
let cartBtnClick = document.querySelector(".cartIcon-click");
cartBtnClick.addEventListener("click", openNav);
let text = document.createElement("div");
text.textContent = "0";
text.setAttribute("class", "cartItemNumText");
let cartItemCount = document.querySelector(".search");
if (cartItemCount) cartItemCount.appendChild(text);

function openNav() {
  console.log("test");
}

setUser();
function setUser() {
  let userPlaceholder = document.querySelector(".dropbtn>span");
  let userDetails = JSON.parse(this.localStorage.getItem("loggedInUser")) || {};
  console.log(userDetails);
  let loggedin = this.localStorage.getItem("loggedin") || "false";
  if (loggedin == "true" && userDetails) {
    userPlaceholder.textContent = userDetails.userName;
    // document.querySelector("#forPopup").textContent = " Log out";
    let signupbtn = document.querySelector(".nav-bar-signupbtn");
    if (signupbtn) signupbtn.style.display = "none";
    let dropdownBtn = document.querySelector(".dropdown");
    if (dropdownBtn) dropdownBtn.style.display = "initial";
    if (signupbtn)
      signupbtn.addEventListener("click", function () {
        window.location.href = "/Signup/signup.html";
      });
  } else {
    let dropdownBtn = document.querySelector(".dropdown");
    if (dropdownBtn) dropdownBtn.style.display = "none";
    let signupbtn = document.querySelector(".nav-bar-signupbtn");
    if (signupbtn) signupbtn.style.display = "initial";
    if (signupbtn)
      signupbtn.addEventListener("click", function () {
        window.location.href = "/Signup/signup.html";
      });
    // userPlaceholder.textContent = "User";
    document.querySelector("#forPopup").textContent = " Log in";
  }
}
window.addEventListener("storage", function () {
  setUser();
});
// function reportWindowSize() {
//   console.log("in", window.innerWidth);
//   console.log("out", screen.width);
//   if (right && left)
//     if (window.innerWidth < 1300) {
//       left.style.marginLeft = "0";
//       right.style.marginRigh = "0";
//     } else {
//       left.style.marginLeft = "60px";
//       right.style.marginRigh = "180px";
//     }
// }

// window.onresize = reportWindowSize;
// toDo implement icons goTo
// let smallIcont = document.getElementsByClassName("font-nav1-items");
// smallIcont[0].addEventListener("click", gotohome);
// for (let i = 0; i < smallIcont.length; i++) {
//   const element = smallIcont[i];
//   ;
// }
// function gotohome(e) {
//   console.log(e);
// }
document.querySelector(".small-home1").addEventListener("click", function () {
  window.location.href = "/index.html";
});
document.querySelector(".big-home1").addEventListener("click", function () {
  window.location.href = "/index.html";
});
document.querySelector(".small-home2").addEventListener("click", function () {
  window.location.href = "/index.html";
});
document
  .querySelector(".small-product1")
  .addEventListener("click", function () {
    window.location.href = "/ProductPage/BathProducts.html";
  });
document
  .querySelector(".small-product2")
  .addEventListener("click", function () {
    window.location.href = "/ProductPage/BathProducts.html";
  });
document.querySelector(".small-cart").addEventListener("click", function () {
  openNav();
});
document.querySelector(".small-profile").addEventListener("click", function () {
  window.location.href = "/UserProfile/myprofile/MyProfile.html";
});
let nav2items = document.getElementsByClassName("font-nav2-items");
for (const nav2item of nav2items) {
  nav2item.addEventListener("click", function () {
    window.location.href = "/ProductPage/BathProducts.html";
  });
}
let nav1items = document.getElementsByClassName("font-nav1-items");
for (const nav1item of nav1items) {
  nav1item.addEventListener("click", function () {
    window.location.href = "/index.html";
  });
}

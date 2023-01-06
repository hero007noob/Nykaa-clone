window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  var nav2 = document.querySelector("#nav2");
  if (nav2) nav2.classList.toggle("sticky", window.scrollY > 0);
});
const right = document.querySelector("#nav1 div");
const left = document.querySelector("#nav1 ul");
document.querySelector(".cartIcon-click").addEventListener("click", openNav);
function openNav() {
  console.log("test");
}
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

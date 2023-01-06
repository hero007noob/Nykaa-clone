document.querySelector("#popback").addEventListener("click", popback);
document.querySelector(".logout").addEventListener("click", popup);
var a = document.querySelector(".popup");
function popup() {
  a.classList.add("popback");
}
function popback() {
  a.classList.remove("popback");
}

checkPage();
// let allLists =
// for (const list of allLists) {
//   console.log(document.URL);
//   list.addEventListener("click", switchTab);
// }
function switchTab(event) {
  console.log(event.target);
}
function checkPage() {
  let pages = ["myprofile", "mywallet", "myorder", "mywishllist", "mypayment"];
  for (const num in pages) {
    if (document.URL.includes(pages[num])) {
      document
        .querySelectorAll(".profileList>li")
        [num].setAttribute("class", "switch-tab-border");
      document
        .querySelectorAll(".profileList>li>a")
        [num].setAttribute("class", "switch-tab-text");
    }
  }
}

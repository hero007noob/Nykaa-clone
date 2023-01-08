document.querySelector("#logoutPopback").addEventListener("click", popback);
document.querySelector(".logout").addEventListener("click", popup);
document.querySelector("#forPopup").addEventListener("click", popup);
var a = document.querySelector(".logoutPopup");
function popup() {
  a.classList.add("logoutPopback");
}
function popback() {
  a.classList.remove("logoutPopback");
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

document.querySelector("#logout1").addEventListener("click",logout)
document.querySelector("#logout2").addEventListener("click",logout)
function logout()
{
  localStorage.setItem("loggedin","false");
}
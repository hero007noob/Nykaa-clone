document.querySelector("#logoutPopback").addEventListener("click", popback);
document.querySelector("#forPopup").addEventListener("click", popup);
var a = document.querySelector(".logoutPopup");
function popup() {
  a.classList.add("logoutPopback");
}
function popback() {
  a.classList.remove("logoutPopback");
}
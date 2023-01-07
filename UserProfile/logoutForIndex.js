document.querySelector("#logoutPopback").addEventListener("click", popback);
let logoutBtn = document.querySelector("#forPopup");
logoutBtn.addEventListener("click", popup);
var a = document.querySelector(".logoutPopup");
function popup() {
  if (logoutBtn.textContent.includes(" Log out"))
    a.classList.add("logoutPopback");
  else {
  }
}
function popback() {
  a.classList.remove("logoutPopback");
}

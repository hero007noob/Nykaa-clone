// Create the button element
const button = document.createElement("div");

// Set the text content of the button
// button.textContent = "Click me";
button.setAttribute("class", "toggle-dark");
// button.style.backgroundColor = "white";
button.style.zIndex = "100";
button.style.color = "#ccc";
button.style.border = "none";
button.style.width = "40px";
button.style.height = "40px";
let icon = document.createElement("img");
icon.src = "/theme_fonts/white-mode.png";
icon.style.width = "100%";
button.appendChild(icon);
// #212121
// Set the button's position to fixed and top right
button.style.position = "fixed";
button.style.top = "0";
button.style.right = "100px";
button.style.marginRight = "20px";

// Append the button to the body
document.body.appendChild(button);

let darkmode = localStorage.getItem("darkmode") || false;
if (darkmode == "true") setDarkMode();
document
  .querySelector(".toggle-dark")
  .addEventListener("click", toggleDarkMode);
function setDarkMode() {
  document.body.classList.add("dark-mode");
}
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  let isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkmode", isDarkMode);
}

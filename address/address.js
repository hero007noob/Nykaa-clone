var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

console.log("syed");

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

function changesymbol(){
let symbolchanged = document.querySelectorAll(".toggleInsert");
console.log("syed dgsdg");
  console.log(symbolchanged[1]);
  
  symbolchanged[1].setAttribute("class", "");
  if (num==1)
  {
    symbolchanged[1].setAttribute("class", "fa-solid fa-toggle-on");
  }
  else{
    symbolchanged[1].setAttribute("class", "fa-solid fa-toggle-off");
  }
}


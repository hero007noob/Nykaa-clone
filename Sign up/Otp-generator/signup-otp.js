alert("OTP sent to your mail ");

var otpArr = JSON.parse(localStorage.getItem("otp")) || [];

var submitBtn = document.querySelector(".otp-box>button");
submitBtn.addEventListener("click", function () {
  var otpDigits = document.querySelectorAll(".otp-input-field>input");
  let otpString = "";

  for (let digits of otpDigits) {
    otpString += digits.value;
  }
  otpString = parseInt(otpString);

  if (otpMatch(otpString)) {
    alert("registration success");
    
    for (let digit of otpDigits){
      digit.value = "";
    }

  } else {
    alert("otp not valid");
  }
});

function otpMatch(otpString) {
  let matchElement = otpArr.find((elem) => otpString == elem.otp);

  return matchElement ? matchElement : false;
}

let inputFields = document.querySelectorAll(".otp-input-field>input");

for (let inputField of inputFields) {
  inputField.addEventListener("focus", function (event) {
    event.target.style.borderColor = "red";
  });
}

inputFields.forEach((inputField) => {
  inputField.addEventListener("blur", function (event) {
    event.target.style.borderColor = "e80070";
  });
});

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
    // alert("registration success");
    otpSuccessful();

    
    for (let digit of otpDigits){
      digit.value = "";
    }

  } else {
    // alert("otp not valid");
    otpUnsuccessful();
  }
});

// popup msg 
function otpSuccessful() {
  // put all code in if() if you need to run some validation
  let pop = document.getElementsByClassName("pop-up-alert")[0];
  let message = pop.querySelector("p");
  message.textContent = "Login Successful";
  pop.classList.add("pop");
  setTimeout(() => {
    pop.classList.remove("pop");
  }, 2000);
}


function otpUnsuccessful (){

  let pop = document.getElementsByClassName("pop-up-alert")[0];
  let message = pop.querySelector("p");
  message.textContent = "Login Failed please check your password";
  pop.classList.add("pop");
  setTimeout(() => {
    pop.classList.remove("pop");
  }, 2000);


}


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

window.onload = function () {

  // popup msg otp sent to mail
  otpSendToMail();

  function otpSendToMail() {
   
    let pop = document.getElementsByClassName("pop-up-alert")[0];
    setTimeout(() => {
      pop.classList.add("pop");
      let message = pop.querySelector(".pop-up-msg");
      message.textContent = "OTP sent to your mail ";
    }, 500);

    setTimeout(() => {
      pop.classList.remove("pop");
    }, 4000);
  }

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
      otpSuccessful();
      for (let digit of otpDigits) {
        digit.value = "";
      }
    } else {
      otpFailed();
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
};

function otpSuccessful() {
  let pop = document.getElementsByClassName("pop-up-alert")[0];
  pop.classList.add("pop");
  let message = pop.querySelector(".pop-up-msg");
  message.textContent = "Registration completed ";
  setTimeout(() => {
    pop.classList.remove("pop");
  }, 4000);
  localStorage.setItem("loggedin","true");
  setTimeout(() => {
    window.location.href="../../index.html"
  }, 4000);
  
}

function otpFailed() {
  let pop = document.getElementsByClassName("pop-up-alert")[0];
  pop.classList.add("pop");
  let message = pop.querySelector(".pop-up-msg");
  message.textContent = "Registration Failed";
  setTimeout(() => {
    pop.classList.remove("pop");
  }, 4000);
}

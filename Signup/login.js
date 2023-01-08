//password show and hide
var eyeIcon = document.querySelector("#togglePassword");
var eyeSlash = document.querySelector("#eye-slash-id");
var password = document.querySelector("#login-password");

eyeSlash.classList.add("hide-icon");

eyeIcon.addEventListener("click", function () {
  let type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  eyeSlash.classList.toggle("hide-icon");
  eyeIcon.classList.toggle("hide-icon");
});

eyeSlash.addEventListener("click", function () {
  let type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  eyeSlash.classList.toggle("hide-icon");
  eyeIcon.classList.toggle("hide-icon");
});

// form validation
var form = document.querySelector("#sign-up-form");
var validCredential = false;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let emailValid = false;
  var passwordValid = false;

  let emailOrPhone = document.querySelector("#email-input").value;

  let password = document.querySelector("#login-password").value;

  var emailWarningBox = document.querySelector(".email-warning");
  if (!emailOrPhone) {
    emailWarningBox.innerHTML = "Enter your email address or phone number";
  } else if (!validateEmail(emailOrPhone) && !validatePhone(emailOrPhone)) {
    emailWarningBox.innerHTML = "Enter valid email or phone number";
  } else {
    emailWarningBox.innerHTML = "";
    emailValid = true;
  }

  var passwordWarningBox = document.querySelector(".password-warning");
  if (!password) {
    passwordWarningBox.innerHTML = "Enter password";
  } else if (password.length < 6) {
    passwordWarningBox.innerHTML =
      "Your password must be at least 6 characters";
  } else {
    passwordWarningBox.innerHTML = "";
    passwordValid = true;
  }

  if (passwordValid && emailValid) {
    // if both email and password is valid we check inside the local storage;

    if (!verifyCredentials(emailOrPhone, password)) {
      loginFailedPopup();
    }
  }
});

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  var re = /^\d{10}$/;
  return re.test(phone);
}

var userCredentialArr = JSON.parse(localStorage.getItem("userCredentials"));

function verifyCredentials(emailOrPhone, password) {
  let credentialMatch = false;

  userCredentialArr.some((elem) => {
    if (
      (elem.email == emailOrPhone || elem.phonenumber == emailOrPhone) &&
      elem.password == password
    ) {
      LoginSuccessfulPopup(elem.userName);
      localStorage.setItem("loggedInUser", JSON.stringify(elem));
      credentialMatch = true;
      return credentialMatch;
    }
  });

  return credentialMatch;
}

function LoginSuccessfulPopup(username) {
  // put all code in if() if you need to run some validation
  let pop = document.getElementsByClassName("pop-up-alert")[0];
  let message = pop.querySelector(".pop-up-msg");
  message.textContent = "Welcome back " + username;
  pop.classList.add("pop");
  setTimeout(() => {
    pop.classList.remove("pop");
  }, 4000);
  localStorage.setItem("loggedin", "true");
  window.location.href = ".././index.html";
}

function loginFailedPopup() {
  let pop = document.getElementsByClassName("pop-up-alert")[0];
  let message = pop.querySelector(".pop-up-msg");
  message.textContent = "Login Failed please check your password";
  pop.classList.add("pop");
  setTimeout(() => {
    pop.classList.remove("pop");
  }, 4000);
}

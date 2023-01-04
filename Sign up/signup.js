//password show and hide
var eyeIcon = document.querySelector("#togglePassword");
var eyeSlash = document.querySelector("#eye-slash-id");
var password = document.querySelector("#signin-password");

console.log(eyeIcon, eyeSlash, password);

eyeSlash.classList.add("hide-icon");
eyeIcon.classList.add("hide-icon");

password.addEventListener("click", function () {
  eyeIcon.classList.remove("hide-icon");
});

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

var userCredentialArr =
  JSON.parse(localStorage.getItem("userCredentials")) || [];

// sign up form validation
var form = document.querySelector("#sign-up-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let userName = document.querySelector(".username").value;
  let email = document.querySelector(".email-input").value;
  let phonenumber = document.querySelector(".phonenumber-input").value;
  let password = document.querySelector("#signin-password").value;

  let validName = false;
  let validEmail = false;
  let validPhoneNumber = false;
  let validPassword = false;

  var nameWarningBox = document.querySelector(".username-warning");
  if (!userName) {
    nameWarningBox.innerHTML = "Enter your name";
  } else if (!(userName.length > 3)) {
    nameWarningBox.innerHTML = "Name must be atlest 4 characters";
  } else {
    nameWarningBox.innerHTML = "";
    validName = true;
  }

  var emailWarningBox = document.querySelector(".email-warning");
  if (!email) {
    emailWarningBox.innerHTML = "Enter your email address";
  } else if (!validateEmail(email)) {
    emailWarningBox.innerHTML = "Enter valid email address";
  } else {
    emailWarningBox.innerHTML = "";
    validEmail = true;
  }

  var phoneNumberBox = document.querySelector(".phonenumber-warning");
  if (!phonenumber) {
    phoneNumberBox.innerHTML = "Enter your phone number";
  } else if (!validatePhone(phonenumber)) {
    phoneNumberBox.innerHTML = "Please enter valid mobile number";
  } else {
    phoneNumberBox.innerHTML = "";
    validPhoneNumber = true;
  }

  var passwordWarningBox = document.querySelector(".password-warning");
  if (!password) {
    passwordWarningBox.innerHTML = "Enter password";
  } else if (!validatePassword(password)) {
    passwordWarningBox.innerHTML =
      "Your password must be at least 6 characters";
  } else {
    passwordWarningBox.innerHTML = "";
    validPassword = true;
  }

  // user details are valid store inside localStorage
  if (validName && validEmail && validPhoneNumber && validPassword) {
    var credentialObj = {
      userName: userName,
      email: email,
      phonenumber: phonenumber,
      password: password,
    };

    userCredentialArr.push(credentialObj);
    localStorage.setItem("userCredentials", JSON.stringify(userCredentialArr));

    alert("Create account successfully");
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

function validatePassword(password) {
  if (password.length < 6) {
    return false;
  }
  return true;
}

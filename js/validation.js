const firstName = document.getElementById("username");
const password = document.getElementById("password");
const comfirmpassword = document.getElementById("comfirm-password");
const email = document.getElementById("email");
const button = document.querySelector(".validate-btn");

// show error function
function showError(input, message) {
  //   const formcontrol = document.querySelector(".forms-controls");
  const formcontrol = input.parentElement.parentElement;
  const small = formcontrol.querySelector("small");
  small.innerText = message;
}
function showSuccess(input, message) {
  const formcontrol = input.parentElement.parentElement;
  const small = formcontrol.querySelector("small");
  small.innerText = message;
}
function isvalidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function passwordValidate(password) {
  const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return pass.test(password);
}

function validateUsername() {
  if (firstName.value === "") {
    showError(firstName, "Username is requried");
  } else {
    showSuccess(firstName, "");
  }
}

function validateEmail() {
  if (email.value === "") {
    showError(email, "Email is requried");
  } else if (!isvalidEmail(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email, "");
  }
}
function validatePassword() {
  if (password.value === "") {
    showError(password, "Password is requried");
  } else if (!passwordValidate(password.value)) {
    showError(
      password,
      "Password must contain  6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
    );
  } else {
    showSuccess(password, "");
  }
}
function validatePassword2() {
  if (comfirmpassword.value === "") {
    showError(comfirmpassword, "Comfirm password is requried");
  } else {
    showSuccess(comfirmpassword, "");
  }
}

button.addEventListener("click", function () {
  validateUsername();
  validateEmail();
  validatePassword();
  validatePassword2();
});

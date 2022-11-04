let nameError = document.getElementById("nameError");
let LastError = document.getElementById("LastError");
let EmailError = document.getElementById("EmailError");
const button = document.querySelector(".validate-btn");
let PaswordError = document.getElementById("PaswordError");
let ComfirmError = document.getElementById("ComfirmError");

function onClick(event) {
  event.preventDefault();
}

function validateUsername() {
  let name = document.getElementById("username").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";

    return false;
  }
  if (!name.match("([a-zA-Z]{3,30}s*)+")) {
    nameError.innerHTML = "Write your First name";
    return false;
  }
  nameError.innerHTML = " ";
  return true;
}
function validateLastname() {
  let lname = document.getElementById("lastname").value;
  if (lname.length == 0) {
    LastError.innerHTML = "Last name is required";
    return false;
  }
  if (!lname.match("[a-zA-Z]{3,30}")) {
    LastError.innerHTML = "Write your Last name";
    return false;
  }
  LastError.innerHTML = " ";
  return true;
}
function validateEmail() {
  let email = document.getElementById("email").value;
  if (email.length == 0) {
    EmailError.innerHTML = " Email is required";
    return false;
  }
  if (
    !email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    EmailError.innerHTML = " Email is invalid";
    return false;
  }
  EmailError.innerHTML = " ";
  return true;
}
function validatePassword() {
  let pass = document.getElementById("password").value;
  if (pass.length == 0) {
    PaswordError.innerHTML = "Password is required";
    return false;
  }
  if (
    !pass.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    PaswordError.innerHTML =
      "Password must contain  minimum of 8 characters which contain at least one numeric digit, one uppercase , one lowercase letter and a special character";

    return false;
  }
  PaswordError.innerHTML = " ";
  return true;
}
function validatePassword2() {
  let pass = document.getElementById("password").value;

  let pass2 = document.getElementById("comfirm-password").value;
  if (pass2.length == 0) {
    ComfirmError.innerHTML = "Password is required";
    return false;
  }
  if (pass != pass2) {
    ComfirmError.innerHTML = "Password must be the same";

    return false;
  }
  ComfirmError.innerHTML = " ";
  return true;
}
function isChecked() {
  if (document.getElementById("terms-service").checked) {
    return true;
  } else {
    return false;
  }
}

function validateForm() {
  if (
    !validateUsername() ||
    !validateLastname() ||
    !validateEmail() ||
    !validatePassword() ||
    !validatePassword2() ||
    !isChecked()
  ) {
    console.log("jake");

    document.getElementById("next-btn").disabled = true;
    return false;
  } else {
    console.log("wer");
    document.getElementById("next-btn").disabled = false;
    return true;
  }
}

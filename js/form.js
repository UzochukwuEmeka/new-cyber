const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress-line");
const formStep = document.querySelectorAll(".form-step");
const pogressSteps = document.querySelectorAll(".progress-step ");

const formElements = document.querySelectorAll("form .inner-form .form-step");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgessbar();
  });
});
prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgessbar();
  });
});

function updateFormSteps() {
  formStep.forEach((formstep) => {
    formstep.classList.contains("formstep-active") &&
      formstep.classList.remove("formstep-active");
  });
  formStep[formStepsNum]?.classList.add("formstep-active");
}

function updateProgessbar() {
  pogressSteps.forEach((pogressStep, idx) => {
    if (idx < formStepsNum + 1) {
      pogressStep.classList.add("progress-step-active");
    } else {
      pogressStep.classList.remove("progress-step-active");
    }
    const progressActive = document.querySelectorAll(".progress-step-active");

    progress.style.width =
      ((progressActive.length - 1) / (pogressSteps.length - 1)) * 100 + "%";
  });
}
// First form button removal
let firstFormElem = formElements[0].classList.contains("formstep-active");
let lastFormElem =
  formElements[formElements.length - 1].classList.contains("formstep-active");

if (firstFormElem) prevBtn.style.display = "none";

prevBtn.addEventListener("click", () => {
  firstFormElem = formElements[0].classList.contains("formstep-active");
  if (firstFormElem) prevBtn.style.display = "none";
});

nextBtn.addEventListener("click", () => {
  firstFormElem = formElements[0].classList.contains("formstep-active");
  lastFormElem =
    formElements[formElements.length - 1].classList.contains("formstep-active");

  if (!firstFormElem) prevBtn.style.display = "inline-block";
  if (lastFormElem) removeBtn();
});

function removeBtn() {
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
}

const input = document.getElementById("experience");
const wordscount = document.getElementById("wordscount");
const wordscounts = document.querySelector(".wordscounts");
const namea = document.getElementById("name");
const count = 200;

input.addEventListener("input", function () {
  wordscounts.style.display = "block";
  input.disabled = false;

  let words = input.value;
  let wordsTrim = words.replace(/\s+/g, " ").trim();
  let splitWord = wordsTrim.split(" ");
  if (splitWord[0] == "") {
    numberOfWords = 0;
  }
  let numberOfWords = splitWord.length;

  wordscount.innerHTML = numberOfWords;
  if (numberOfWords == count) {
    wordscount.innerHTML = "You have reach your limited amount of words";
    wordscount.style.color = "red";
    input.disabled = true;
  }
});

// const firstName = document.getElementById("username");
// const password = document.getElementById("password");
// const comfirmpassword = document.getElementById("comfirm-password");
// const email = document.getElementById("email");

// // validation color
// const green = "#4CAF50";
// const red = "#F44336";

// function validateFirstName() {
//   // check if empty
//   if (checkIfEmpty(firstName)) return;
//   // check for onlly letter
//   if (!checkIfOnlyLetters(firstName)) return;
//   return true;
// }

// function checkIfEmpty(field) {
//   if (isEmpty(field.value.trim())) {
//     // set field invalid
//     setInvalid(field, `${field.name}must not be empty`);
//     return true;
//   } else {
//     // set field vaild
//     setvalid(field);
//     return false;
//   }
// }

// function isEmpty(value) {
//   if (value === "") return true;
//   return false;
// }
// function setInvalid(field, message) {
//   field.className = "invalid";
//   field.nextElementSibling.innerHTML = message;
//   field.nextElementSibling.style.color = red;
// }
// function setvalid(field) {
//   field.className = "valid";
//   field.nextElementSibling.innerHTML = "";
//   field.nextElementSibling.style.color = green;
// }

// function checkIfOnlyLetters(field) {
//   if (/^[a-zA-Z ]+$/.test(field.value)) {
//     setvalid(field);
//     return true;
//   } else {
//     setInvalid(field, `${field.name} must contain only letters`);
//   }
// }

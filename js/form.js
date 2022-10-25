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
const namea = document.getElementById("name");

// input.addEventListener("input", () => {
//   var a = input.value.length;
//   var split = input.value.split("");
//   obj = {};
//   for (i = 0; i < split.length; i++) {
//     if (obj[split[i]] === undefined) {
//       obj[split[i]] = 1;
//     } else {
//       obj[split[i]]++;
//     }
//   }
//   var x = obj["dornel"];
//   if (x === undefined) {
//     console.log("err");
//   } else {
//     namea.innerHTML = `dornel : ${x} Times`;
//   }
//   demo.textContent = input.value.length + "/30";
//   if (a === 30) {
//     demo.style.color = "red";
//   } else {
//     demo.style.color = "green";
//   }
// });
input.addEventListener("input", function () {
  let words = input.value;
  let wordsTrim = words.replace(/\s+/g, " ").trim();
  let splitWord = wordsTrim.split(" ");
  if (splitWord[0] == "") {
    numberOfWords = 0;
  }
  let numberOfWords = splitWord.length;
  wordscount.innerHTML = numberOfWords;
});

"use strict";

const screenText = document.querySelector(".screen-text");
const btnNum = document.querySelectorAll(".button-num");
const resetBtn = document.querySelector(".reset-btn");
const equalsBtn = document.querySelector(".equals-btn");
const delBtn = document.querySelector(".del-btn");
const radioBtn = document.querySelectorAll(".radios");
const radios = document.getElementsByName("theme");
const htmlStyle = document.querySelector(".html");
const btnShow = document.querySelectorAll(".btn-show");
const btnOprt = document.querySelectorAll(".btn-oprt");

// display the button content on the screen
btnNum.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    let btnDisplay = btn.innerText;
    screenText.textContent += btnDisplay;
  });
});

// equals
equalsBtn.addEventListener("click", () => {
  let operation;
  if (screenText.textContent.includes("x")) {
    operation = screenText.textContent.replace("x", "*");
  } else {
    operation = screenText.textContent;
  }

  let evaluation = eval(operation);
  screenText.textContent = evaluation;
  if (screenText.textContent.length > 18) evaluation.toFixed(8);
});

// reset
resetBtn.addEventListener("click", () => {
  screenText.textContent = "";
});

// Del
delBtn.addEventListener("click", () => {
  screenText.textContent = screenText.textContent.slice(0, -1);
});

// Themes;
radioBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    if (i === 1) {
      htmlStyle.classList.add("dark");
    } else {
      htmlStyle.classList.remove("dark");
    }
  });
});

const doc = document.querySelector(".input");

doc.addEventListener("keydown", (e) => {
  e.target = "";
});

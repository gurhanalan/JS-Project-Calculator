"use strict";

// +++++++++++ VARIABLES

// Numbers
const btnNum0 = document.querySelector(".btn-number-0");
const btnNum1 = document.querySelector(".btn-number-1");
const btnNum2 = document.querySelector(".btn-number-2");
const btnNum3 = document.querySelector(".btn-number-3");
const btnNum4 = document.querySelector(".btn-number-4");
const btnNum5 = document.querySelector(".btn-number-5");
const btnNum6 = document.querySelector(".btn-number-6");
const btnNum7 = document.querySelector(".btn-number-7");
const btnNum8 = document.querySelector(".btn-number-8");
const btnNum9 = document.querySelector(".btn-number-9");

const numsArr = [
    btnNum0,
    btnNum1,
    btnNum2,
    btnNum3,
    btnNum4,
    btnNum5,
    btnNum6,
    btnNum7,
    btnNum8,
    btnNum9,
];

// Operants
const btnEqual = document.querySelector(".btn-equal");
const btnPlus = document.querySelector(".btn-plus");
const btnMinus = document.querySelector(".btn-minus");
const btnMultiply = document.querySelector(".btn-multiply");
const btnDivide = document.querySelector(".btn-divide");

const btnOperants = document.querySelectorAll(".btn-operant");
// Screens

const screenCurrent = document.querySelector(".screen-current");
const screenPrevious = document.querySelector(".screen-previous");

// Global Variables

let currValue = "";
let prevValue = "";
let operant = undefined;

// +++++++++++++ FUNCTIONS
function display() {
    screenCurrent.innerHTML = currValue;
    screenPrevious.innerHTML = prevValue;
}

function calculations(sign) {
    let result = 0;
    switch (sign) {
        case "+":
            break;

        default:
            break;
    }
}
// +++++++++++++ EVENT LISTENERS

for (let i = 0; i < numsArr.length; i++) {
    numsArr[i].addEventListener("click", () => {
        currValue = currValue + i;
        display();
    });
}

btnOperants.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(`${btn.innerHTML}`);
    });
});

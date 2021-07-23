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
const btnComma = document.querySelector(".btn-number-comma");

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

// Special Buttons
const btnAc = document.querySelector(".btn-ac");
const btnPlusMinus = document.querySelector(".btn-plusminus");
const btnDelete = document.querySelector(".btn-delete");

// Global Variables

let currValue = "";
let prevValueDisplay = ""; // used for display
let prevValue = undefined; // used to store
let operant = undefined;

// +++++++++++++ FUNCTIONS
function display() {
    if (currValue.length > 9) {
        screenCurrent.innerHTML = currValue.slice(0, 7) + "...";
    } else if (currValue.length === 0) {
        screenCurrent.innerHTML = currValue;
    } else {
        screenCurrent.innerHTML = Number(currValue).toLocaleString();
    }
    screenPrevious.innerHTML = prevValueDisplay;
}

function clearDisplay() {
    currValue = "";
    prevValue = "";
    prevValueDisplay = "";
    operant = undefined;
    display();
}

function append(num) {
    // Prevent num to start with 0
    if (currValue[0] === "0" && currValue[1] !== ".") {
        currValue = currValue.slice(1);
    }

    if (currValue.length <= 8) {
        currValue = currValue + num;
    }
    display();
}

function operants() {
    prevValue = currValue;
    prevValueDisplay = Number(currValue).toLocaleString() + " " + operant;
    currValue = "";

    display();
}

function calculations(sign) {
    if (!operant) return;
    let result = 0;
    switch (sign) {
        case "+":
            result = parseFloat(currValue) + parseFloat(prevValue);
            break;
        case "-":
            result = parseFloat(prevValue) - parseFloat(currValue);
            break;
        case "x":
            result = parseFloat(prevValue) * parseFloat(currValue);
            break;
        case "/":
            result = parseFloat(prevValue) / parseFloat(currValue);
            break;

        default:
            break;
    }

    prevValueDisplay =
        prevValueDisplay + " " + Number(currValue).toLocaleString();
    currValue = result + "";
    operant = undefined;
    display();
}
// +++++++++++++ EVENT LISTENERS

for (let i = 0; i < numsArr.length; i++) {
    numsArr[i].addEventListener("click", () => {
        append(i);
    });
}

btnOperants.forEach((btn) => {
    btn.addEventListener("click", () => {
        operant = btn.innerHTML;
        operants();
        console.log(`${btn.innerHTML}`);
    });
});

btnEqual.addEventListener("click", () => {
    calculations(operant);
});

btnAc.addEventListener("click", () => {
    clearDisplay();
});
btnDelete.addEventListener("click", () => {
    currValue = currValue.slice(0, -1);
    display();
});
btnPlusMinus.addEventListener("click", () => {
    let result = parseFloat(currValue) * -1;
    currValue = result + "";
    display();
});

btnComma.addEventListener("click", () => {
    if (!currValue.includes(".")) {
        currValue = currValue + ".";
    }
    display();
});

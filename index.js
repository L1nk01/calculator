const button = document.querySelectorAll(".button");
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");

const display = document.querySelector("#text");
const ac = document.querySelector("#ac");
const eq = document.querySelector("#eq");
const plusminus = document.querySelector("#plusminus")
const dot = document.querySelector("#dot")

var firstNumber = 0;
var secondNumber = 0;
var result = 0;
var dotFlag = false
var negativeFlag = false

for (let i = 0; i < button.length; i++) {

    // AC
    ac.addEventListener("click", () => {
        firstNumber = 0;
        secondNumber = 0;
        result = 0;
        dotCounter = 0;
        negativeFlag = false;
        display.textContent = "0";
    });

    // Negative numbers
    plusminus.addEventListener("click", () => {
        if (!negativeFlag) {
            let negativeNumber = "-" + display.textContent;
            display.textContent = negativeNumber;
            negativeFlag = true;
        } else {
            display.textContent = display.textContent.substring(1);
            negativeFlag = false;
        }
    });

    // Numbers
    number[i].addEventListener("click", () => {
        if (display.textContent === "0") {
            display.textContent = "";
        }
        display.innerHTML += number[i].textContent;
    });

    // Operators
    operator[i].addEventListener("click", () => {
        firstNumber = parseInt(display.textContent);
        display.textContent = 0
    })

    // Dot
    dot.addEventListener("click", () => {
        if (!dotCounter) {
            display.textContent += ".";
            dotCounter = true;
        }
    });
}
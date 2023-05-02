const container = document.querySelector("#keys");
const number = document.querySelectorAll(".number");
const display = document.querySelector("#text");

const ac = document.querySelector("#ac");
const eq = document.querySelector("#eq");
const plusminus = document.querySelector("#plusminus");
const dot = document.querySelector("#dot");
const percentage = document.querySelector("#percentage");

var firstNumber = 0;
var operator = "";
var secondNumber = 0;
var result = 0;

var dotFlag = false;
var negativeFlag = false;
var isSecondNumber = false;

keys.addEventListener("click", (event) => {

    // Numbers
    if (event.target.matches(".number")) {
        if (display.textContent === "0") {
            display.textContent = "";
        }
        display.textContent += event.target.textContent;
    }

    // Operators
    if (event.target.matches(".operator")) {

        if (!isSecondNumber) {
            firstNumber = parseInt(display.textContent);
            display.textContent = 0;
            isSecondNumber = true;
            operator = event.target.textContent;
        } else {
            secondNumber = parseInt(display.textContent);
        }
    }

    // AC
    if (event.target.matches("#ac")) {
        firstNumber = 0;
        secondNumber = 0;
        result = 0;
        dotCounter = 0;
        negativeFlag = false;
        isSecondNumber = false;
        display.textContent = "0";
    }

    // Negative numbers
    if (event.target.matches("#plusminus")) {
        if (!negativeFlag) {
            let negativeNumber = "-" + display.textContent;
            display.textContent = negativeNumber;
            negativeFlag = true;
        } else {
            display.textContent = display.textContent.substring(1);
            negativeFlag = false;
        }
    }

    // Dot
    if (event.target.matches("#dot")) {
        if (!dotCounter) {
            display.textContent += ".";
            dotCounter = true;
        }
    }
    
    // Percentage
    if (event.target.matches("#percentage")) {
        display.textContent = display.textContent / 100;
    }

    // Equal
    if (event.target.matches("#eq")) {
        secondNumber = parseInt(display.textContent);
        console.log(firstNumber, secondNumber, operator);
        switch (operator) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "x":
                result = firstNumber * secondNumber;
                break;
            case "÷":
                result = firstNumber / secondNumber;
                break;
        }
        display.textContent = result;
    }
});


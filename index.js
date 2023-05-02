const container = document.querySelector("#keys");
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

// Flags
var dotFlag = false;
var negativeFlag = false;
var isSecondNumber = false;
var firstEqual = true;

keys.addEventListener("click", (event) => {

    // Numbers
    if (event.target.matches(".number")) {
        if (display.textContent === "-0") {
            display.textContent = "-";
        } else if (display.textContent === "0") {
            display.textContent = "";
        }

        display.textContent += event.target.textContent;
    }

    // Operators
    if (event.target.matches(".operator")) {

        if (!isSecondNumber) {
            firstNumber = parseFloat(display.textContent);

            if (firstNumber % 1 === 0) {
                firstNumber = parseInt(firstNumber);
            }

            display.textContent = 0;
            isSecondNumber = true;
            operator = event.target.textContent;
        } else {
            secondNumber = parseFloat(display.textContent);
            display.textContent = "0";

            if (secondNumber % 1 === 0) {
                secondNumber = parseInt(secondNumber);
            }

            switch (operator) {
                case "+":
                    firstNumber += secondNumber;
                    break;
                case "-":
                    firstNumber -= secondNumber;
                    break;
                case "*":
                    firstNumber *= secondNumber;
                    break;
                case "÷":
                    firstNumber /= secondNumber;
                    break;
            }
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
        firstEqual = true;
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
        isSecondNumber = false;

        if (firstEqual) {
            secondNumber = parseFloat(display.textContent);
            firstEqual = false;
        }

        if (secondNumber % 1 === 0) {
            secondNumber = parseInt(secondNumber);
        }

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

        if (firstEqual) {
            secondNumber = firstNumber;
        }

        firstNumber = result;

        if (result % 1 !== 0) {
            result = result.toFixed(4);
        }
        display.textContent = result;
    }
});


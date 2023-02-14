const button = document.querySelectorAll(".button")
const display = document.querySelector("#text");

const ac = document.querySelector("#ac");

var firstNumber = 0;
var secondNumber = 0;
var result = 0;

// Operator Flags
var sum = false;
var sub = false;
var mult = false;
var div = false;

// First and second value flags
isFirst = false;
isSecond = false;

// Check if any number or operator has been pressed
firstPress = false;
operatorPress = false;

// The whole calculation algorythm
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
        if (isFirst === true) {
            display.innerHTML = 0;
            isFirst = false;
        }

        // Removes the 0 from the display when you input any number and converts
        // the AC button text to C.
        if (firstPress === false) {
            display.innerHTML = display.innerHTML.slice(1);
            ac.innerHTML = "C";
            firstPress = true;
        }

        // A variable to allocate the numbers that will be shown on the display
        let numbers = button[i].textContent;

        // A filter so that the operator button symbols don't get typed in the display
        // when you press them.
        if (button[i].classList.contains("operator") === false) {
            display.innerHTML += numbers;
        }
        
        // Operator press detector
        if (button[i].classList.contains("operator") === true) {
            firstNumber = display.textContent;
            switch (button[i].textContent) {
                case "+":
                    secondNumber = display.textContent;
                    sum = true;
                    isFirst = true;
                    firstPress = false;
                    break;
                case "-":
                    secondNumber = display.textContent;
                    sub = true;
                    isFirst = true;
                    firstPress = false;
                    break;
                case "x":
                    secondNumber = display.textContent;
                    mult = true;
                    isFirst = true;
                    firstPress = false;
                    break;
                case "÷":
                    secondNumber = display.textContent;
                    div = true;
                    isFirst = true;
                    firstPress = false;
                    break;
                case "=":
                    // Here at the end I put the secondNumber before the firstNumber because if
                    // I put it the other way JS detects it af it was the other way around.
                    if (sum === true) {
                    result = parseInt(secondNumber) + parseInt(firstNumber);
                    sum = false;
                    } else if (sub === true) {
                        result = parseInt(secondNumber) - parseInt(firstNumber);
                        sub = false;
                    } else if (mult === true) {
                        result = (parseInt(secondNumber) * parseInt(firstNumber));
                        mult = false;
                    } else if (div === true) {
                        result = parseInt(secondNumber) / parseInt(firstNumber);
                        div = false;
                    }
                    display.innerHTML = result;
                    break;
            }      
        }
    });
}

// Clear button
ac.addEventListener("click", () => {
    display.innerHTML = 0;
    ac.innerHTML = "AC";
    firstNumber = 0;
    secondNumber = 0;
    firstPress = false;
});
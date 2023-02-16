const button = document.querySelectorAll(".button")
const display = document.querySelector("#text");

const ac = document.querySelector("#ac");
const eq = document.querySelector("#eq");

var firstNumber = 0;
var secondNumber = 0;
var result = 0;

// Operator Flags
var sum = false;
var sub = false;
var mult = false;
var div = false;
var per = false;

// First and second value flags
isFirst = false;
isSecond = false;

// Check if any number or operator has been pressed
firstPress = false;
operatorPress = false;
dotCheck = false;

// The whole calculation algorythm
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {

        // Checks if the number being inputted is the first or the second
        // to reset the display when the second value is about to be inputted.        
        if (isFirst === true) {
            display.innerHTML = 0;
            isFirst = false;
        }

        // Removes the 0 from the display when you input any number and converts
        // the AC button text to C. ✅
        if (firstPress === false) {
            display.innerHTML = display.innerHTML.slice(1);
            ac.innerHTML = "C";
            firstPress = true;
        }

        // A variable to allocate the numbers that will be shown on the display ✅
        let numbers = button[i].textContent;

        // A filter so that the operator button symbols don't get typed in the display
        // when you press them. ✅
        if (button[i].classList.contains("equal") === false) {
            if (button[i].classList.contains("operator") === false) {
                display.innerHTML += numbers;
            } else {

                if (per === false) {
                    firstNumber = display.textContent;
                    per = true;
                    isFirst = false;
                }

                isFirst = true;
                firstPress = false;

                switch (button[i].textContent) {
                    case "+":
                        sum = true;
                        break;
                    case "-":
                        sub = true;
                        break;
                    case "x":
                        mult = true;
                        break;
                    case "÷":
                        div = true;
                        break;
                    case "%":
                        display.textContent = display.textContent / 100;
                        firstNumber = display.textContent;
                        firstPress = true;
                        break;
                }
            }       
        }
    });
}

// Clear button ✅
ac.addEventListener("click", () => {
    display.innerHTML = 0;
    ac.innerHTML = "AC";
    firstNumber = 0;
    secondNumber = 0;
    result = 0;
    firstPress = false;
    per = false;});

// Equal button ✅
eq.addEventListener("click", () => {
                
    secondNumber = display.textContent;

    // Here at the end I put the secondNumber before the firstNumber because if
    // I put it the other way JS detects it af it was the other way around.
    if (sum === true) {
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        sum = false;
    } else if (sub === true) {
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        sub = false;
    } else if (mult === true) {
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
        mult = false;
    } else if (div === true) {
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
        div = false;
    }
    per = false;
    isFirst = true;
    firstPress = true;
    display.innerHTML = result;
});
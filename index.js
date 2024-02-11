function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, operator, num2) {
    if (operator === "+")
        return add(num1, num2);
    if (operator === "-")
        return subtract(num1, num2);
    if (operator === "*")
        return multiply(num1, num2);
    if (operator === "/")
        return divide(num1, num2);
}

var num1;
var operator;
var num2;

function populateDisplay(value) {
    var display = document.querySelector(".display-text");
    var currentDisplay = display.textContent;
    display.textContent = currentDisplay + value;
}

function clearDisplay() {
    var display = document.querySelector(".display-text");
    display.textContent = "";
}

var buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        populateDisplay(e.target.innerHTML);
    })
})

var clear = document.querySelector(".clear-button");
clear.addEventListener("click", () => {
    clearDisplay();
})

// TODO: Add calculator functionality when "=" is pressed
// TODO: function validateOperation() : checks validity of operation
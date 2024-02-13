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

function validateEquation(equation) {
    var eqnArray = equation.split("");
    if (eqnArray[1] === "/" && eqnArray[2] === "0") {
        return 0;
    }
    return 1;
}

function computeResult(equation) {
    if (validateEquation(equation) !== 1) {
        return null;
    }
    var eqnArray = equation.split(/[+-/*]/); // e.g. 40+3 returns ["40", "3"]
    for (var i=0; i<eqnArray.length; i++) {
        equation = equation.replace(eqnArray[i], ""); // find the operator selected by user
    }
    switch (equation) {
        case "+":
            return parseFloat(eqnArray[0]) + parseFloat(eqnArray[1]);
        case "-":
            return parseFloat(eqnArray[0]) - parseFloat(eqnArray[1]);
        case "*":
            return parseFloat(eqnArray[0]) * parseFloat(eqnArray[1]);
        case "/":
            return parseFloat(eqnArray[0]) / parseFloat(eqnArray[1]);
    }
}

var buttons = document.querySelectorAll(".btn");
var operators = ["+", "-", "*", "/"];
var operatorsUsed = 0;
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (operators.includes(e.target.innerHTML)) {
            operatorsUsed++;
            if (operatorsUsed >= 2) {
                var eqn = document.querySelector(".display-text");
                var result = Math.round(computeResult(eqn.innerHTML) * 100) / 100;
                clearDisplay();
                populateDisplay(result);
            }
        } 
        populateDisplay(e.target.innerHTML);
    })
})

var equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    var eqn = document.querySelector(".display-text");
    var result = Math.round(computeResult(eqn.innerHTML) * 100) / 100;
    clearDisplay();
    populateDisplay(result);
    operatorsUsed = 0;
})

var clear = document.querySelector(".clear-button");
clear.addEventListener("click", () => {
    clearDisplay();
    operatorsUsed = 0;
})
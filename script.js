const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const equalButton = document.querySelector('#equal');
const decimalButton = document.querySelector('#decimal');
const inputScreen = document.querySelector('#input');
const lastOperationScreen = document.querySelector('#lastOperation');


numberButton.forEach((button) =>
    button.addEventListener('click', () => insertNumber(button.textContent))
)

function insertNumber(number) {
    if (inputScreen.textContent === '0')
        resetScreen()
    inputScreen.textContent += number
}

function resetScreen() {
    inputScreen.textContent = ''
}



//MATHS
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator == "+") {
        return add(a, b)
    } else if (operator == "-") {
        return subtract(a, b)
    } else if (operator == "*") {
        return multiply(a, b)
    } else if (operator == "/") {
        return divide(a, b)
    } else {
        
    }
}
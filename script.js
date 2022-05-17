let firstNum = '';
let secondNum = '';
let currentOperation = '';
let clearScreenFlag = false;

const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const decimalButton = document.querySelector('#decimal');
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#clear');
const inputScreen = document.querySelector('#input');

numberButton.forEach((button) =>
    button.addEventListener('click', () => logNumber(button.textContent))
)

operatorButton.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
)

clearButton.addEventListener('click', clear);
equalButton.addEventListener('click', calculate);
decimalButton.addEventListener('click', addDecimal)

function logNumber(number) {
    if (inputScreen.textContent === '0' || clearScreenFlag)
        clearScreen()
    inputScreen.textContent += number
}

function clear() {
    inputScreen.textContent = '0'
    firstNum = '';
    secondNum = '';
    currentOperation = '';
}

function clearScreen() {
    inputScreen.textContent = '';
    clearScreenFlag = false;
}

function addDecimal() {
    if (clearScreenFlag) clearScreen();
    if (inputScreen.textContent === '')
        inputScreen.textContent = '0';
    if (inputScreen.textContent.includes('.')) return
    inputScreen.textContent += '.'
}

function setOperation(operator) {
    if (currentOperation !== '') calculate();
    firstNum = inputScreen.textContent;
    currentOperation = operator;
    clearScreenFlag = true;
}

function calculate() {
    if (currentOperation === '' || clearScreenFlag) return
    if (currentOperation === '/' && inputScreen.textContent === '0') {
        alert("Division by 0!")
        return
    }
    secondNum = inputScreen.textContent
    inputScreen.textContent = roundResult(operate(currentOperation, firstNum, secondNum))
    currentOperation = '';
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
}


//MATHS!🤓
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
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case "+":
            return add(a, b);
         case "-":
            return subtract(a, b)
         case "*":
            return multiply(a, b)
         case "/":
            return divide(a, b)
         default:
            return null
    }
}

// function setOperation(operator) {
//     if (evaluated) {
//         evaluated = false;
//         currentOperation = '';
//     }
//     if (!storedOperand) {
//         storedOperand = currentOperand;
//         currentOperation = operator
//         currentOperand = '';
//     } else if (storedOperand && !operator) {
//         currentOperation = operator;
//         updateScreen(storedOperand);
//         currentOperand = '';
//     } else if (!currentOperand && currentOperation) {
//         currentOperation = operator;
//     } else {
//         storedOperand = operate(currentOperation, storedOperand, currentOperand);
//         updateScreen(storedOperand);
//         currentOperand = '';
//         currentOperation = operator;
//     }
// }

// function evaluate() {
//     if (currentOperand, currentOperation, storedOperand) {
//         storedOperand = operate(currentOperation, storedOperand, currentOperand);
//         evaluated = true;
//         updateScreen(storedOperand);
//     }
// }


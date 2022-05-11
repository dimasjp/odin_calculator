const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const equalButton = document.querySelector('#equal');
const decimalButton = document.querySelector('#decimal');
const clearButton = document.querySelector('#clear');
const inputScreen = document.querySelector('#input');

let currentNum = '';
let storedNum = '';
let currentOperation = '';
let evaluated = false;

numberButton.forEach((button) =>
    button.addEventListener('click', () => logNumber(button.textContent))
)

operatorButton.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
)

clearButton.addEventListener('click', clear);
equalButton.addEventListener('click', evaluate);

function logNumber(number) {
    if (evaluated) {
        resetCalc();
    }
    if (currentNum === '0') {
        currentNum = '';
    }
    currentNum += number;
    updateScreen(currentNum);
}

function updateScreen(input) {
    if (input === 'Infinity') {
        inputScreen.textContent = "ERROR";
    } else {
        inputScreen.textContent = input;
    }
}

function clear() {
    if (!currentNum || currentNum === '0' || evaluated) {
        resetCalc();
    } else {
        currentNum = '0';
        updateScreen(currentNum);
    }
}

function resetCalc() {
    currentNum = '0';
    storedNum = '';
    currentOperation = '';
    evaluated = false;
    updateScreen(currentNum);
}

function setOperation(operator) {
    if (evaluated) {
        evaluated = false;
        currentOperation = '';
    }
    if (!storedNum) {
        storedNum = currentNum;
        currentOperation = operator
        currentNum = '';
    } else if (storedNum && !operator) {
        currentOperation = operator;
        updateScreen(storedNum);
        currentNum = '';
    } else if (!currentNum && currentOperation) {
        currentOperation = operator;
    } else {
        storedNum = operate(currentOperation, storedNum, currentNum);
        updateScreen(storedNum);
        currentNum = '';
        currentOperation = operator;
    }
}

function evaluate() {
    if (currentNum, currentOperation, storedNum) {
        storedNum = operate(currentOperation, storedNum, currentNum);
        evaluated = true;
        updateScreen(storedNum);
    }
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
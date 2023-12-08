let currentInput = '';
let currentOperator = '';
let firstOperand = '';
let result = '';
let finalResult = '';
let decimalAdded = true;
let equation = '';
let shouldCalculate = false;
let equal = '=';
let finalEquation = '';
let equationHistory = '';

function appendNumber(number) {
    if (shouldCalculate) {
        equation = result + currentOperator;
        currentInput = '';
        shouldCalculate = false;
    }

    currentInput += number;
    equation += number;
    updateDisplay();
    document.getElementById('equationDisplay').value = equation;
    console.log('Appended Number:', number);
}

function appendDecimal() {
    if (decimalAdded) {
        currentInput += '.';
        equation += '.';
        decimalAdded = false;
        updateDisplay();
        document.getElementById('equationDisplay').value = equation;
        console.log('Appended Decimal');
    }
}

function appendOperator(operator) {
    if (currentInput !== '') {
        if (firstOperand === '') {
            firstOperand = currentInput;
            result = firstOperand;
            currentInput = '';
            currentOperator = operator;
        } else {
            calculate();
            currentOperator = operator;
        }
        decimalAdded = true;
        equation += operator;
        document.getElementById('equationDisplay').value = equation;
        console.log('Appended Operator:', operator);
    }
}

function calculateLoop() {
    shouldCalculate = true;
    calculate();
}

function calculate() {
    equationHistory = equation;
    if (shouldCalculate && currentOperator !== '' && currentInput !== '') {
        finalEquation = equation + equal;
        document.getElementById('equationDisplay').value = finalEquation;

        const operand1 = parseFloat(result);
        const operand2 = parseFloat(currentInput);

        switch (currentOperator) {
            case '+':
                result = (operand1 + operand2).toString();
                break;
            case '-':
                result = (operand1 - operand2).toString();
                break;
            case '*':
                result = (operand1 * operand2).toString();
                break;
            case '/':
                result = (operand1 / operand2).toString();
                break;
        }

        currentInput = '';
        decimalAdded = true;
        finalResult = result;
        updateDisplay();
        console.log('Calculated Result:', finalResult);
        console.log('equationHistory:', equationHistory);
        shouldCalculate = false;
    }
}

function clearDisplay() {
    firstOperand = '';
    currentInput = '';
    currentOperator = '';
    equation = '';
    result = '';
    finalResult = '';
    decimalAdded = true;
    shouldCalculate = false;
    updateDisplay();
    console.log('Cleared display');
}

function updateDisplay() {
    document.getElementById('equationDisplay').value = equationHistory + currentInput;
    document.getElementById('mainDisplay').value = finalResult;
}

document.getElementById('equalsButton').addEventListener('click', calculateLoop);

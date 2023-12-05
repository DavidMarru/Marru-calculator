let currentInput = '';
let currentOperator = '';
let firstOperand = '';
let result = '';
let finalResult = ``;
let decimalAdded = false;
let equation = '';
let shouldCalculate = false;
let equal = `=`;

function appendNumber(number) {
    currentInput += number;
    equation += number;
    updateDisplay();
    console.log(`History:`, equation);
    document.getElementById('equationDisplay').value = equation;
    console.log('Appended Number:', number);
}

function appendDecimal() {
    if (!decimalAdded) {
        currentInput += '.';
        equation += `.`;
        decimalAdded = true; 
        updateDisplay();
        document.getElementById('equationDisplay').value = equation;
        console.log('Appended Decimal');
    }
}

function appendOperator(operator) {
    if (result == `=`){
        shouldCalculate = false;
        equation = 

    }
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
        decimalAdded = false;  
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
    if (shouldCalculate && currentOperator !== '' && currentInput !== '') {
        equation = `${equation} ${equil}`;
        document.getElementById('equationDisplay').value = equation;

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
        decimalAdded = false;  
        finalResult = result;
        updateDisplay();
        console.log('Calculated Result:', finalResult);
        shouldCalculate = false;
    }
}

function clearDisplay() {
    firstOperand = '';
    currentInput = '';
    currentOperator = '';
    equation = '';
    result = ``;
    finalResult = ``;
    decimalAdded = false; 
    shouldCalculate = false;
    updateDisplay();
    console.log('Cleared display');
    document.getElementById('equationDisplay').value = equation;

}

function updateDisplay() {
    document.getElementById('mainDisplay').value = finalResult;
}

document.getElementById('equalsButton').addEventListener('click', calculateLoop);

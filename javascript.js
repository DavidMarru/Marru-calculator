let currentInput = '';
let currentOperator = '';
let firstOperand = '';
let result = '0';
let decimalAdded = false;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
    console.log('Appended Number:', number);
}

function appendDecimal() {
    if (!decimalAdded) {
        currentInput += '.';
        decimalAdded = true; 
        updateDisplay();
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
        decimalAdded = false;  
        console.log('Appended Operator:', operator);
    }
}

function calculate() {
    if (currentInput !== '' && firstOperand !== '') {
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
        updateDisplay();
        console.log('Calculated Result:', result);
    }
}

function ongoingEquation(equation) {

}

function clearDisplay() {
    firstOperand = '';
    currentInput = '';
    currentOperator = '';
    result = '0';
    decimalAdded = false;  
    updateDisplay();
    console.log('Cleared display');
}

function updateDisplay() {
    document.getElementById('mainDisplay').value = result ;
    document.getElementById('equationDisplay').value = `${currentOperator} ${currentInput}`;
}

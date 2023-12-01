let equationDisplay = '';
let resultDisplay = '';
let currentOperator = '';
let firstOperand = '';
let result = '0';
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    equationDisplay += number; 
    resultDisplay = currentInput || result;
    updateDisplays();
    console.log('Appended Number:', number);
}

function appendDecimal() {
    if (!equationDisplay.includes('.')) {
        equationDisplay += '.';
        resultDisplay = currentInput || result;
        updateDisplays();
        console.log('Appended Decimal');
    }
}

function appendOperator(operator) {
    if (equationDisplay !== '') {
        if (firstOperand === '') {
            firstOperand = equationDisplay;
            result = firstOperand;
            equationDisplay = '';
            currentOperator = operator;
        } else {
            calculate();
            currentOperator = operator;
        }
        console.log('Appended Operator:', operator);
    } else if (operator === '-') {
        equationDisplay += '-';
        resultDisplay = currentInput || result;
        updateDisplays();
        console.log('Appended Operator:', operator);
    }
}

function calculate() {
    if (equationDisplay !== '' && firstOperand !== '') {
        const operand1 = parseFloat(result);
        const operand2 = parseFloat(equationDisplay);

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

        equationDisplay = '';
        updateDisplays();
        console.log('Calculated Result:', result);
    }
}

function clearDisplays() {
    firstOperand = '';
    equationDisplay = '';
    resultDisplay = '';
    currentOperator = '';
    currentInput = '';
    result = '0';
    updateDisplays();
    console.log('Cleared displays');
}

function updateDisplays() {
    document.getElementById('equation-display').value = equationDisplay;
    document.getElementById('result-display').value = resultDisplay;
    console.log('Updated Displays:', equationDisplay, resultDisplay);
}

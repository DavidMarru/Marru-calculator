let currentInput = ``;
let currentOperator = ``;
let firstOperand = '';
let result = `0`;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
    console.log('Appended Number:', number);
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
        console.log('Appended Decimal');
    }
}

function appendOperator(opertor) {
    if(currentInput !== ``){
        if(firstOperand === ``){
            firstOperand = currentInput;
            result = firstOperand;
            currentInput = ``;
            currentOperator = opertor;
        }else {
            calculate();
            currentOperator = opertor;
        }
        console.log(`Appended Opertor:` ,opertor)
    }
}

function calculate() {
    if (currentInput !== `` && firstOperand !== ``) {
        const operand1 = parseFloat(result);
        const operand2 = parseFloat(currentInput);

    switch (currentOperator) {
        case `+`:
            result = (operand1 + operand2).toString();
            break;
        case `-`:
            result = (operand1 - operand2).toString();
            break;
        case `*`:
            result = (operand1 * operand2).toString();
            break;
        case `/`:
            result = (operand1 / operand2).toString();
            break;
    }

    currentInput = ``;
    updateDisplay();
    console.log(`calculated result:`, result);
    }
}

function clearDisplay(){
    firstOperand = ``;
    currentInput = ``;
    currentOperator = ``;
    result = '0';
    updateDisplay();
    console.log(`Cleared display`);
}

function updateDisplay() {
    document.getElementById('display').value = currentInput || result;
    console.log('Updated Display:', currentInput || result);
}

document.getElementById('decimalBtn').disabled = false; 

document.getElementById('display').addEventListener('input', function() {
    document.getElementById('decimalBtn').disabled = currentInput.includes('.');
});





let currentInput = '';
let currentOperator = '';
let firstOperand = '';
let previousInput = ``;
let result = '';
let finalResult = '';
let decimalAdded = true;
let equation = '';
let shouldCalculate = false;
let finalEquation = '';
let equationHistory = '';

function appendNumber(number) {
    if (finalEquation !== `` && equation == ``){
        return
    }
    currentInput += number;
    equation += number;
    updateDisplay();
    document.getElementById('equationDisplay').value = equation;
    console.log('Appended Number:', number);
    
}

function appendDecimal() {
    if (equation == ``){
        return
    }
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
        if (result === `GO BACK TO SCHOOL`){
            return;
        }
         if  (currentInput !== `` && firstOperand === '') {
            firstOperand = currentInput;
            previousInput = firstOperand;
            currentInput = '';
            currentOperator = operator;
        } else {
            calculateLoop();
            currentOperator = operator;
            equation = finalResult;
            previousInput = equation;
            currentInput = '';
        } 
        decimalAdded = true;
        equation += operator;
        console.log(`checking updates:` ,equation);
        document.getElementById('equationDisplay').value = equation;
    }


function calculateLoop() {
    shouldCalculate = true;
    calculate();
}

function calculate() {
    if (shouldCalculate && currentOperator !== '' && currentInput !== '') {
        finalEquation = equation + '=';
        document.getElementById('equationDisplay').value = finalEquation;

        const operand1 = parseFloat(previousInput);
        const operand2 = parseFloat(currentInput);
        console.log(`checking previous input:`, previousInput + currentInput);


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
                if (operand1 === 0 || operand2 === 0) {
                    result = `GO BACK TO SCHOOL`;
                    equation = ``
                } else{

                result = (operand1 / operand2).toString()}
                ;
                break;
        }
        previousInput = finalResult;
        equationHistory = equation;
        currentInput = '';
        decimalAdded = true;
        finalResult = result;
        equation = ``;
        console.log('currentOperator:', currentOperator);        
        currentOperator = ``;
        console.log(`shouldCalculate:`,shouldCalculate == true);
        document.getElementById('mainDisplay').value = finalEquation + finalResult;
        document.getElementById('equationDisplay').value = ``;
        console.log('final Result:', finalResult);
        console.log(`previousInput`, previousInput);
        console.log('equationHistory:', equationHistory);
        console.log('finalEquation:', finalEquation);        

    }
}

function deleteDisplay(){
    currentInput = currentInput.slice(0, -1);
    equation = equation.slice(0, -1);  
    updateDisplay();
    document.getElementById('equationDisplay').value = equation;
}

function clearDisplay() {
    firstOperand = '';
    currentInput = '';
    currentOperator = '';
    equationHistory =``;
    equation = '';
    result = '';
    finalResult = '';
    finalEquation = ``;
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

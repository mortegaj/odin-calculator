
let op1 = null;
let op2 = null;
let operator = null;

function add (a,b) {
    return a + b;
}

function substract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    if (b != 0) return a / b;
    else return "div/0";
}

function operate () {
    switch (operator) {
        case "+": return add(Number(op1),Number(op2));
        case "-": return substract(Number(op1),Number(op2));
        case "*": return multiply(Number(op1),Number(op2));
        case "/": return divide(Number(op1),Number(op2));
    }
}

function numberPressed (value) {
    if (operator === null) {
        if (op1 === null) op1 = value;
        else op1 = op1 += value;
    } else {
        if (op2 === null) op2 = value;
        else op2 = op2 += value;
    }
}

function operationPressed (value) {
    if (op2 === null) operator = value;
    else {
        op1 = operate().toString();
        operator = value;
        op2 = null;
    }
}

// Testing
// Cas 1: 10 + 20 - 30 + 50 +
numberPressed("1"); console.log(op1+operator+op2);
numberPressed("0"); console.log(op1+operator+op2);
operationPressed("+"); console.log(op1+operator+op2);
numberPressed("2"); console.log(op1+operator+op2);
numberPressed("0"); console.log(op1+operator+op2);
operationPressed("-"); console.log(op1+operator+op2);
numberPressed("3"); console.log(op1+operator+op2);
numberPressed("0"); console.log(op1+operator+op2);
operationPressed("+"); console.log(op1+operator+op2);
numberPressed("5"); console.log(op1+operator+op2);
numberPressed("0"); console.log(op1+operator+op2);
operationPressed("+"); console.log(op1+operator+op2);



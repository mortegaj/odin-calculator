
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
        case "+": return add(op1,op2);
        case "-": return substract(op1,op2);
        case "*": return multiply(op1,op2);
        case "/": return divide(op1,op2);
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
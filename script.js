
let op1;
let op2;
let operator;

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

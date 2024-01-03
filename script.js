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

// Test 1
op1 = 3;
op2 = 2;
operator = add;
console.log(`${op1} + ${op2} = ${operator(op1,op2)}`);

// Test 2
op1 = 3;
op2 = 2;
operator = substract;
console.log(`${op1} - ${op2} = ${operator(op1,op2)}`);

// Test 3
op1 = 3;
op2 = 2;
operator = multiply;
console.log(`${op1} * ${op2} = ${operator(op1,op2)}`);

// Test 4
op1 = 5;
op2 = 2;
operator = divide;
console.log(`${op1} / ${op2} = ${operator(op1,op2)}`);


// Test 5
op1 = 5;
op2 = 0;
operator = divide;
console.log(`${op1} / ${op2} = ` + operator(op1,op2));



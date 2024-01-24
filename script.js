let first_operand = null;
let second_operand = null;
let operator = null;

function setNewOperand (operand,value) {
    if (operand === null) operand = value;
    else operand += value;
    return operand;
}

function keyPressed (key) {
    if (operator == null) {
        //Entering first operand
        first_operand = setNewOperand(first_operand,key);
    } else {
        //Entering second operand
        second_operand = setNewOperand(second_operand,key);
    }
}

let exit_condition = false;
while (!exit_condition) {
    input = prompt("Press new key");
    if (input == "q") exit_condition = true;
    else {
        keyPressed (input);
        console.log(`first-operand:${first_operand} | operator:${operator} | second-operand:${second_operand}`);
    }
}

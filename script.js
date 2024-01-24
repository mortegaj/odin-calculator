let first_operand = null;
let second_operand = null;

function setNewOperand (operand,value) {
    if (operand === null) operand = value;
    else operand += value;
    return operand;
}

let exit_condition = false;
while (!exit_condition) {
    input = prompt("Press new key");
    if (input == "q") exit_condition = true;
    else {
        first_operand = setNewOperand(first_operand,input);
        console.log(first_operand);
    }
}

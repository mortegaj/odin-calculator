let newOperand = null;

function captureOperand (value) {
    if (newOperand === null) newOperand = value;
    else newOperand += value;
}

let exit_condition = false;
while (!exit_condition) {
    input = prompt("Press new key");
    if (input == "q") exit_condition = true;
    else {
        captureOperand(input);
        console.log(newOperand);
    }
}
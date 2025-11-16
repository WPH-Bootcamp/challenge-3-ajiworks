// code here, goodluck!!
'use-strict';
const prompt = require('prompt-sync')();

// Tugas 1. User Input Handling
function getValidNumberInput(promptMessage) {
    let input = prompt(promptMessage);
    let number = Number(input);

    while (isNaN(number)) {
        console.log("input tidak valid. Harus berupa angka!");
        input = prompt(promptMessage);
        number = Number(input);
    }

    return number;
}





function getValidOperatorInput(promptMessage) {
    const validOperators = ["+", "-", "*", "/", "%", "**"];
    let operator = prompt(promptMessage);

    while (!validOperators.includes(operator)) {
        console.log("Operator tidak valid. Pilih salah satu: + - * / % **")
        operator = prompt(promptMessage);
    }

    return operator;
}






const question = prompt(`Выберите операцию:
+, -, *, /, %, cos, sin, pow`);
let firstNumber;
let secondNumber;
let firstArr = ["+", "-", "*", "/", "%"];
let secondArr = ["cos", "sin"];
let thirdArr = ["pow"];

{
    if (question == firstArr[0] || question == firstArr[1] || question == firstArr[2] || question == firstArr[3] || question == firstArr[4]) {
        firstNumber = prompt('Введите первое число');
        secondNumber = prompt('Введите второе число');
    } else if (question == secondArr[0] || question == secondArr[1]) {
        firstNumber = prompt('Введите число');
    } else if (question == thirdArr[0]) {
        firstNumber = prompt('Введите число');
        secondNumber = prompt('Введите степень');
    }
}

if (question == firstArr[0]) {
    const sumOfNum = +firstNumber + +secondNumber;
    alert(`Sum:  ${firstNumber} + ${secondNumber}  = ${sumOfNum}`);
} else if (question == firstArr[1]) {
    const diffOfNum = firstNumber - secondNumber;
    alert(`Diff: ${firstNumber} - ${secondNumber}  = ${diffOfNum}`);
} else if (question == firstArr[2]) {
    const multOfNum = firstNumber * secondNumber;
    alert(`Multi: ${firstNumber} * ${secondNumber}  = ${multOfNum}`);
} else if (question == firstArr[3]) {
    const diffOfNum = firstNumber / secondNumber;
    alert(`Div: ${firstNumber} / ${secondNumber}  = ${diffOfNum}`);
} else if (question == firstArr[4]) {
    const remNum = firstNumber % secondNumber;
    alert(`Rem: ${firstNumber} % ${secondNumber}  = ${remNum}`);
} else if (question == secondArr[0]) {
    const cosNum = Math.cos(firstNumber);
    alert(`Cos: = ${cosNum}`);
} else if (question == secondArr[1]) {
    const sinNum = Math.sin(firstNumber);
    alert(`Sin: = ${sinNum}`);
} else if (question == thirdArr[0]) {
    const powNum = Math.pow(firstNumber, secondNumber);
    alert(`Pow: = ${powNum}`);
}

console.log(secondArr[0], secondArr[1], thirdArr[0]);
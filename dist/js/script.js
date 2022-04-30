const question = prompt(`Выберите операцию:
+, -, *, /, %, cos, sin, pow`);

if (question == '+') {
    const firstNumber = prompt('Введите первое число');
    const secondNumber = prompt('Введите первое число');
    const sumOfNum = +firstNumber + +secondNumber;
    alert(`Sum:  ${firstNumber} + ${secondNumber}  = ${sumOfNum}`);
} else if (question == '-') {
    const firstNumber = prompt('Введите первое число');
    const secondNumber = prompt('Введите первое число');
    const diffOfNum = firstNumber - secondNumber;
    alert(`Diff: ${firstNumber} - ${secondNumber}  = ${diffOfNum}`);
} else if (question == '*') {
    const firstNumber = prompt('Введите первое число');
    const secondNumber = prompt('Введите первое число');
    const multOfNum = firstNumber * secondNumber;
    alert(`Multi: ${firstNumber} * ${secondNumber}  = ${multOfNum}`);
} else if (question == '/') {
    const firstNumber = prompt('Введите первое число');
    const secondNumber = prompt('Введите первое число');
    const diffOfNum = firstNumber / secondNumber;
    alert(`Div: ${firstNumber} / ${secondNumber}  = ${diffOfNum}`);
} else if (question == '%') {
    const firstNumber = prompt('Введите первое число');
    const secondNumber = prompt('Введите первое число');
    const remNum = firstNumber % secondNumber;
    alert(`Rem: ${firstNumber} % ${secondNumber}  = ${remNum}`);
} else if (question == 'cos') {
    const firstNumber = prompt('Введите число');
    const cosNum = Math.cos(firstNumber);
    alert(`Cos: = ${cosNum}`);
} else if (question == 'sin') {
    const firstNumber = prompt('Введите число');
    const sinNum = Math.cos(firstNumber);
    alert(`Sin: = ${sinNum}`);
} else if (question == 'pow') {
    const firstNumber = prompt('Введите число');
    const secondNumber = prompt('Введите степень');
    const powNum = Math.pow(firstNumber, secondNumber);
    alert(`Pow: = ${powNum}`);
}
  




const history = [];
do {
    const question = prompt(`Выберите операцию:
    +, -, *, /, %, cos, sin, pow, H(history)`);
    let sumOfNum;
    let diffOfNum;
    let firstNumber;
    let secondNumber;
    // let resSum;
    let firstArr = ["+", "-", "*", "/", "%"];
    let secondArr = ["cos", "sin"];
    let thirdArr = ["pow"];


    if (question != question) {
        alert("Try again!");
    } else {
        let result;
        if (question == firstArr[0] || question == firstArr[1] || question == firstArr[2] || question == firstArr[3] || question == firstArr[4]) {
            firstNumber = +prompt('Введите первое число');
            while (isNaN(firstNumber)) {
                firstNumber = +prompt('Введите корректное первое число:');
            }
            secondNumber = +prompt('Введите второе число');
            while (isNaN(secondNumber)) {
                secondNumber = +prompt('Введите корректное второе число:');
            }
            switch (question) {
                case firstArr[0]:
                    result = `Sum:  ${firstNumber} + ${secondNumber}  = ${firstNumber + +secondNumber}`;
                    break;
                case firstArr[1]:
                    result = `Diff: ${firstNumber} - ${secondNumber}  = ${firstNumber - secondNumber}`;
                    break;
                case firstArr[2]:
                    result = `Multi: ${firstNumber} * ${secondNumber}  = ${firstNumber * secondNumber}`;
                    break;
                case firstArr[3]:
                    result = `Div: ${firstNumber} / ${secondNumber}  = ${firstNumber / secondNumber}`;
                    break;
                case firstArr[4]:
                    result = `Rem: ${firstNumber} % ${secondNumber}  = ${firstNumber % secondNumber}`;
                    break;
            }
        } else if (question == secondArr[0] || question == secondArr[1]) {
            firstNumber = +prompt('Введите число');
            while (isNaN(firstNumber)) {
                firstNumber = +prompt('Введите корректное число:');
            }
            switch (question) {
                case secondArr[0]:
                    result = `Cos: = ${Math.cos(firstNumber)}`;
                    break;
                case secondArr[1]:
                    result = `Sin: = ${Math.sin(firstNumber)}`;
                    break;
            }
        } else if (question == thirdArr[0]) {
            firstNumber = +prompt('Введите число');
            while (isNaN(firstNumber)) {
                firstNumber = +prompt('Введите корректное число:');
            }
            secondNumber = +prompt('Введите степень');
            while (isNaN(secondNumber)) {
                secondNumber = +prompt('Введите корректную степень:');
            }
            switch (question) {
                case thirdArr[0]:
                    result = `Pow: = ${Math.pow(firstNumber, secondNumber)}`;
                    break;
            }
        }
        if (question == 'H') {
            console.log(history);
        } else {
            history[history.length] = result;
            alert(`Result of your operation is: ${result}`)
        }
        


        

    }



} while (confirm('Повторить расчёты?'));

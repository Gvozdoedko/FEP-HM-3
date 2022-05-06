do {
    const question = prompt(`Выберите операцию:
    +, -, *, /, %, cos, sin, pow, H(history)`);
    let sumOfNum;
    let diffOfNum;
    let firstNumber;
    let secondNumber;
    let resList = [];
    // let resSum;
    let firstArr = ["+", "-", "*", "/", "%"];
    let secondArr = ["cos", "sin"];
    let thirdArr = ["pow"];


        if (question == firstArr[0] || question == firstArr[1] || question == firstArr[2] || question == firstArr[3] || question == firstArr[4]) {
            firstNumber = +prompt('Введите первое число');
            while (isNaN(firstNumber)) {  
                firstNumber = +prompt('Введите корректное первое число:');
            }
            secondNumber = +prompt('Введите второе число');
            while (isNaN(secondNumber)) {  
                secondNumber = +prompt('Введите корректное второе число:');
            }
        } else if (question == secondArr[0] || question == secondArr[1]) {
            firstNumber = +prompt('Введите число');
            while (isNaN(firstNumber)) {  
                firstNumber = +prompt('Введите корректное число:');
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
        } 


        
        


    switch(question) {
        case firstArr[0]:
            sumOfNum = +firstNumber + +secondNumber;
            resSum = alert(`Sum:  ${firstNumber} + ${secondNumber}  = ${sumOfNum}`);
            // resList.push(resSum, sumOfNum);
            // console.log(resList);
            break;
        case firstArr[1]:
            diffOfNum = firstNumber - secondNumber;
            alert(`Diff: ${firstNumber} - ${secondNumber}  = ${diffOfNum}`);
            break;
        case firstArr[2]:
            const multOfNum = firstNumber * secondNumber;
            alert(`Multi: ${firstNumber} * ${secondNumber}  = ${multOfNum}`);
            resList.push(multOfNum);
            break;
        case firstArr[3]:
            const divOfNum = firstNumber / secondNumber;
            alert(`Div: ${firstNumber} / ${secondNumber}  = ${divOfNum}`);
            break;
        case firstArr[4]:
            const remNum = firstNumber % secondNumber;
            alert(`Rem: ${firstNumber} % ${secondNumber}  = ${remNum}`);
            break;
        case secondArr[0]:
            const cosNum = Math.cos(firstNumber);
            alert(`Cos: = ${cosNum}`);
            break;
        case secondArr[1]:
            const sinNum = Math.sin(firstNumber);
            alert(`Sin: = ${sinNum}`);
            break;
        case thirdArr[0]:
            const powNum = Math.pow(firstNumber, secondNumber);
            alert(`Pow: = ${powNum}`); 
            break;
        default:
            result = 'operation is undefined';
    };


    
        // resList.push(resSum, );
        // console.log(resList);
    
    
        // if (question == "H") {
        //     console.log(resList);
        // }

} while (confirm('Повторить расчёты?'));


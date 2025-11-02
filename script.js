function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}

function operator(operators, x, y) {

    if (operators == '/') {
        if (Number(y) != 0) {
            return Math.round(divide(x,y));
        }
    }
    else if (operators == '*') {
        return multiply(x,y);
    }
    else if (operators == '-') {
        return subtract(x,y);

    }
    else if (operators == '+') {
        return add(x,y);

    }

}
let num = '';
let numOne = '';
let numTwo = '';
let result = 0;
let operators = '';
let values = document.querySelector('.values');
let body = document.querySelector('body');
let seven = document.querySelector('.seven').addEventListener('click',
    () => {
        num += 7;
        console.log(num);
        return num;
    }
);
let eight = document.querySelector('.eight').addEventListener('click', () => {
    num += 8;
    console.log(num);
    return num;
});
let nine = document.querySelector('.nine').addEventListener('click', () => {
    num += 9;
    console.log(num);
    return num;
});
let four = document.querySelector('.four').addEventListener('click', () => {
    num += 4;
    display.textContent=num;
    return num;
});
let five = document.querySelector('.five').addEventListener('click', () => {
    num += 5;
    display.textContent=num;
    return num;
});
let six = document.querySelector('.six').addEventListener('click', () => {
    num += 6;
    display.textContent=num;
    return num;
});
let one = document.querySelector('.one').addEventListener('click', () => {
    num += 1;
    display.textContent=num;
    return num;
});
let two = document.querySelector('.two').addEventListener('click', () => {
    num += 2;
    display.textContent=num;
    return num;
});
let three = document.querySelector('.three').addEventListener('click', () => {
    num += 3;
    display.textContent=num;
    return num;
});
let zero = document.querySelector('.zero').addEventListener('click', () => {
    num += 0;
    display.textContent=num;
    return num;
});
let display = document.querySelector('.output');
let equals = document.querySelector('.equals').addEventListener('click', () => {
    display.textContent =operator(operators,Number(num),Number(numOne));
});
let clear = document.querySelector('.clear').addEventListener('click',()=>{
    num='';
    numOne='';
    numTwo='';
    result=0;
    display.textContent=0;
})
let divid = document.querySelector('.divide').addEventListener('click', () => {
     if (numOne == '') {
        numOne = num;
        num = '';
        operators ='/';
    }
    else {
        numTwo=num;
        if (operators != '') {
            if (numTwo != '') {
                result = operator(operators, Number(numOne), Number(numTwo));
                numOne = result;
                operators = '/';
                num = '';

            }
        }
    }
console.log(result);});
let mult = document.querySelector('.multiply').addEventListener('click', () => {
     if (numOne == '') {
        numOne = num;
        num = '';
        operators ='*';
    }
    else {
        numTwo=num;
        if (operators != '') {
            if (numTwo != '') {
                result = operator(operators, Number(numOne), Number(numTwo));
                numOne = result;
                operators = '*';
                num = '';

            }
        }
    }
console.log(result);})
let sub = document.querySelector('.subtract').addEventListener('click', () => {
      if (numOne == '') {
        numOne = num;
        num = '';
        operators ='-';
    }
    else {
        numTwo=num;
        if (operators != '') {
            if (numTwo != '') {
                result = operator(operators, Number(numOne), Number(numTwo));
                numOne = result;
                operators = '-';
                num = '';

            }
        }
    }
console.log(result);}
);
let sums = document.querySelector('.sum').addEventListener('click', (e) => {
    if (numOne == '') {
        numOne = num;
        num = '';
        operators ='+';
    }
    else {
        numTwo=num;
        if (operators != '') {
            if (numTwo != '') {
                result = operator(operators, Number(numOne), Number(numTwo));
                numOne = result;
                operators = '+';
                num = '';

            }
        }
    }
console.log(result);}
);


const calcFun = require('./calc');

// Global variables
const add = document.getElementById('add');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const answer = document.getElementById('answer');
const process = document.getElementById('process');
const decimal = document.getElementById('decimal');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear-btn');

let firstOperhand;
let secondOperhand;
let operator = '';
let isDecimal = false;

function setFirstOperhand(number) {
  if (!firstOperhand) {
    firstOperhand = number;
    process.innerText = firstOperhand;
  } else {
    firstOperhand += number;
    process.innerText = firstOperhand;
  }
}

function setSecondOperhand(number) {
  if (!secondOperhand) {
    secondOperhand = number;
    process.innerText += secondOperhand;
  } else {
    secondOperhand += number;
    process.innerText += number;
  }
}

function styleOperatorButtons(operatorElement) {
  const operatorList = ['add', 'minus', 'multiply', 'divide'];
  const result = operatorList.filter(
    operator => operator != operatorElement.id
  );
  // Style the clicked operator
  operatorElement.classList.add('operator-clicked');
  // Style rest of operators
  document.getElementById(result[0]).classList.remove('operator-clicked');
  document.getElementById(result[1]).classList.remove('operator-clicked');
  document.getElementById(result[2]).classList.remove('operator-clicked');
}

function errorMessage(operator) {
  alert(`You must enter a number before you enter '${operator}'`);
}

function renderMinimizedRemainder() {
  const text = answer.innerText;
  answer.innerText = text.substring(0, text.indexOf('.') + 3);
}

function performCalculation() {
  calcFun(operator, firstOperhand, secondOperhand);
  // switch (operator) {
  //   case '+':
  //     return Number(firstOperhand) + Number(secondOperhand);
  //   case '-':
  //     return Number(firstOperhand) - Number(secondOperhand);
  //   case 'x':
  //     return Number(firstOperhand) * Number(secondOperhand);
  //   case '÷':
  //     return Number(firstOperhand) / Number(secondOperhand);
  // }
}

function restartOperatorsBtnStyle() {
  add.classList.remove('operator-clicked');
  minus.classList.remove('operator-clicked');
  multiply.classList.remove('operator-clicked');
  divide.classList.remove('operator-clicked');
}

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(btn => {
  btn.addEventListener('click', function (e) {
    const currentOperator = e.target.textContent;
    // Check if operator is pressed before number
    if (!operator && !firstOperhand && !secondOperhand) {
      return errorMessage(currentOperator);
    }
    // Fix if user presses operator when operator is in play
    if (operator && !secondOperhand) {
      process.innerText = process.innerText.slice(
        0,
        process.innerText.length - 1
      );
    }
    // check to see if an operation is ongoing
    if (operator && secondOperhand) {
      const result = performCalculation();
      answer.innerText = result;
      firstOperhand = result;
      secondOperhand = undefined;
    }

    operator = currentOperator;
    process.innerText += operator;
    styleOperatorButtons(e.target);
  });
});

decimal.addEventListener('click', function () {
  const text = process.innerText;
  if (text.charAt(text.length - 1) !== '.' && text) {
    if (firstOperhand && !secondOperhand) {
      firstOperhand += '.';
      process.innerText += '.';
    } else {
      secondOperhand += '.';
      process.innerText += '.';
    }
  } else {
    errorMessage('decimal');
  }
  isDecimal = true;
});

clear.addEventListener('click', function (e) {
  firstOperhand = undefined;
  secondOperhand = undefined;
  operator = '';
  isDecimal = false;

  process.innerText = '';
  answer.innerText = '0';

  restartOperatorsBtnStyle();
});

equal.addEventListener('click', function (e) {
  if (firstOperhand && secondOperhand && operator) {
    const result = performCalculation();
    answer.innerText = result;
    firstOperhand = result;
    secondOperhand = undefined;
    operator = undefined;
  } else {
    errorMessage('=');
  }

  if (isDecimal) {
    renderMinimizedRemainder();
  }
  restartOperatorsBtnStyle();
});

// Click numbers event listener
document.querySelectorAll('.number').forEach(number => {
  number.addEventListener('click', function (e) {
    const newNumber = e.target.getAttribute('data-value');
    if (!operator) {
      setFirstOperhand(newNumber);
    } else {
      setSecondOperhand(newNumber);
    }
    restartOperatorsBtnStyle();
  });
});

// function sum(a, b) {
//   return a + b;
// }

// module.exports = { performCalculation };

// Gloval variables
const divide = document.getElementById('divide')
const multiply = document.getElementById('multiply')
const minus = document.getElementById('minus')
const add = document.getElementById('add')
const equal = document.getElementById('equal')
const decimal = document.getElementById('decimal')
const answer = document.getElementById('answer')
const process = document.getElementById('process')
const clearBtn = document.getElementById('clear-btn')

let firstNumber;
let secondNumber;
let operator = ''
let tempAnswer = 0;
let checkSecondNumber = true;
let isOperatorClicked = false;


document.querySelectorAll('.number').forEach(item => {
  item.addEventListener('click', function (e) {
    let addNumber = e.target.getAttribute('data-value');
    // Checking first number
    if (checkSecondNumber) {
      if (firstNumber === undefined) {
        firstNumber = addNumber
        process.innerText = firstNumber
      } else {
        firstNumber += addNumber
        process.innerText = firstNumber
      }
      // Checking second number
    } else {
      // debugger;
      // Checking first digit
      if (secondNumber === undefined) {
        secondNumber = addNumber
        process.innerText += secondNumber
      } else {
        // checking second digit
        // debugger
        secondNumber += addNumber
        process.innerText += addNumber
      }
    }
    // add.style.cssText = "pointer-events; unset;"
    // add.style.pointerEvents = 'unset'
    add.setAttribute('style', 'pointer-events; auto; background: aliceblue');
    minus.setAttribute('style', 'pointer-events; auto; background: aliceblue')
    multiply.setAttribute('style', 'pointer-events; auto; background: aliceblue')
    divide.setAttribute('style', 'pointer-events; auto; background: aliceblue')

    // debugger;
    // isOperatorClicked = false;

    // add.style.pointerEvents = 'auto';
    // add.style.background = 'aliceblue';

  });
});

// ADD NUMBER EVENT
add.addEventListener('click', function () {
  // debugger;
  if (!secondNumber) {
    // Modify operator on screen
    if (operator) {
      process.innerText = process.innerText.slice(0, process.innerText.length - 1) + '+'
    } else {
      process.innerText += '+'
    }
    operator = '+'
    checkSecondNumber = false;
  } else {
    // debugger;
    process.innerText += '+'

    if (firstNumber) {
      if (operator === '+') {
        tempAnswer = Number(firstNumber) + Number(secondNumber)
      } else if (operator === '-') {
        tempAnswer = Number(firstNumber) - Number(secondNumber)
      } else if (operator === 'x') {
        tempAnswer = Number(firstNumber) * Number(secondNumber)
      } else if (operator === '÷') {
        tempAnswer = Number(firstNumber) / Number(secondNumber)
      }
    } else {
      if (operator === '+') {
        tempAnswer = Number(tempAnswer) + Number(secondNumber)
      } else if (operator === '-') {
        tempAnswer = Number(tempAnswer) - Number(secondNumber)
      } else if (operator === 'x') {
        tempAnswer = Number(tempAnswer) * Number(secondNumber)
      } else if (operator === '÷') {
        tempAnswer = Number(tempAnswer) / Number(secondNumber)
      }
    }
    answer.innerText = tempAnswer

    operator = '+'
    secondNumber = undefined
    firstNumber = undefined

  }



  add.style.pointerEvents = 'none';
  add.style.background = 'blue';

  minus.style.pointerEvents = 'unset';
  minus.style.background = 'aliceblue';
  multiply.style.pointerEvents = 'unset';
  multiply.style.background = 'aliceblue';
  divide.style.pointerEvents = 'unset';
  divide.style.background = 'aliceblue';

});

// SUBTRACT NUMBER EVENT
minus.addEventListener('click', function () {
  // debugger;
  if (!secondNumber) {
    // debugger;
    // Modify operator on screen
    if (operator) {
      process.innerText = process.innerText.slice(0, process.innerText.length - 1) + '-'
    } else {
      process.innerText += '-'
    }


    operator = '-'
    checkSecondNumber = false;
  } else {
    // debugger;
    process.innerText += '-'

    if (firstNumber) {
      if (operator === '+') {
        tempAnswer = Number(firstNumber) + Number(secondNumber)
      } else if (operator === '-') {
        tempAnswer = Number(firstNumber) - Number(secondNumber)
      } else if (operator === 'x') {
        tempAnswer = Number(firstNumber) * Number(secondNumber)
      } else if (operator === '÷') {
        tempAnswer = Number(firstNumber) / Number(secondNumber)
      }
    } else {
      if (operator === '+') {
        tempAnswer = tempAnswer + Number(secondNumber)
      } else if (operator === '-') {
        tempAnswer = tempAnswer - Number(secondNumber)
      } else if (operator === 'x') {
        tempAnswer = tempAnswer * Number(secondNumber)
      } else if (operator === '÷') {
        tempAnswer = tempAnswer / Number(secondNumber)
      }
    }
    answer.innerText = tempAnswer

    operator = '-'
    secondNumber = undefined
    firstNumber = undefined
  }

  // debugger;

  minus.style.pointerEvents = 'none';
  minus.style.background = 'blue';

  add.style.pointerEvents = 'unset';
  add.style.background = 'aliceblue';
  multiply.style.pointerEvents = 'unset';
  multiply.style.background = 'aliceblue';
  divide.style.pointerEvents = 'unset';
  divide.style.background = 'aliceblue';

});

// MULTIPLY NUMBER EVENT
multiply.addEventListener('click', function () {
  // debugger;
  if (!secondNumber) {
    // debugger;
    // Modify operator on screen
    if (operator) {
      process.innerText = process.innerText.slice(0, process.innerText.length - 1) + 'x'
    } else {
      process.innerText += 'x'
    }


    operator = 'x'
    checkSecondNumber = false;

  } else {
    // debugger;
    process.innerText += 'x'

    if (firstNumber) {
      if (operator === '+') {
        tempAnswer = Number(firstNumber) + Number(secondNumber)
      } else if (operator === '-') {
        tempAnswer = Number(firstNumber) - Number(secondNumber)
      } else if (operator === 'x') {
        tempAnswer = Number(firstNumber) * Number(secondNumber)
      } else if (operator === '÷') {
        tempAnswer = Number(firstNumber) / Number(secondNumber)
      }
    } else {
      if (operator === '+') {
        tempAnswer = tempAnswer + Number(secondNumber)
      } else if (operator === '-') {
        tempAnswer = tempAnswer - Number(secondNumber)
      } else if (operator === 'x') {
        tempAnswer = tempAnswer * Number(secondNumber)
      } else if (operator === '÷') {
        tempAnswer = tempAnswer / Number(secondNumber)
      }
    }
    answer.innerText = tempAnswer

    operator = 'x'
    secondNumber = undefined
    firstNumber = undefined
  }

  multiply.style.pointerEvents = 'none';
  multiply.style.background = 'blue';


  add.style.pointerEvents = 'unset';
  add.style.background = 'aliceblue';
  minus.style.pointerEvents = 'unset';
  minus.style.background = 'aliceblue';
  divide.style.pointerEvents = 'unset';
  divide.style.background = 'aliceblue';

});

// DIVIDE NUMBER EVENT
divide.addEventListener('click', function () {
  // debugger;
  if (!secondNumber) {
    // debugger;
    // Modify operator on screen
    if (operator) {
      process.innerText = process.innerText.slice(0, process.innerText.length - 1) + '÷'
    } else {
      process.innerText += '÷'
    }


    operator = '÷'
    checkSecondNumber = false;

  } else {
    // debugger;
    process.innerText += '÷'

    if (firstNumber) {
      if (operator === '+') {
        tempAnswer = Number(firstNumber) + Number(secondNumber)
      } else if (operator === '-') {
        tempAnswer = Number(firstNumber) - Number(secondNumber)
      } else if (operator === 'x') {
        tempAnswer = Number(firstNumber) * Number(secondNumber)
      } else if (operator === '÷') {
        tempAnswer = Number(firstNumber) / Number(secondNumber)
      }
    } else {
      if (operator === '+') {
        tempAnswer = tempAnswer + Number(secondNumber)
      } else if (operator === '-') {
        tempAnswer = tempAnswer - Number(secondNumber)
      } else if (operator === 'x') {
        tempAnswer = tempAnswer * Number(secondNumber)
      } else if (operator === '÷') {
        tempAnswer = tempAnswer / Number(secondNumber)
      }
    }
    answer.innerText = tempAnswer

    operator = '÷'
    secondNumber = undefined
    firstNumber = undefined
  }

  divide.style.pointerEvents = 'none';
  divide.style.background = 'blue';

  add.style.pointerEvents = 'unset';
  add.style.background = 'aliceblue';
  minus.style.pointerEvents = 'unset';
  minus.style.background = 'aliceblue';
  multiply.style.pointerEvents = 'unset';
  multiply.style.background = 'aliceblue';

});

// Add DECIMAL 
decimal.addEventListener('click', function () {
  // debugger;
  if (firstNumber && !secondNumber) {
    firstNumber += '.'
    process.innerText = firstNumber
  } else {
    secondNumber += '.'
    process.innerText += '.'
  }
});

clearBtn.addEventListener('click', function (e) {
  firstNumber = undefined;
  secondNumber = undefined;
  operator = ''
  tempAnswer = 0;
  checkSecondNumber = true;

  process.innerText = '';
  answer.innerText = '0';


  add.style.pointerEvents = 'unset';
  add.style.background = 'aliceblue';
  minus.style.pointerEvents = 'unset';
  minus.style.background = 'aliceblue';
  multiply.style.pointerEvents = 'unset';
  multiply.style.background = 'aliceblue';
  divide.style.pointerEvents = 'unset';
  divide.style.background = 'aliceblue';


})

// ANSWER of equasion
equal.addEventListener('click', function (e) {

  // debugger;

  let newNum1 = Number(firstNumber)
  let newNum2 = Number(secondNumber)

  // add.setAttribute('style', 'pointer-events; auto; background: aliceblue');
  // isOperatorClicked = false;

  if (firstNumber) {
    if (operator === '+') {
      answer.innerText = newNum1 + newNum2
    } else if (operator === '-') {
      answer.innerText = newNum1 - newNum2
    } else if (operator === 'x') {
      answer.innerText = newNum1 * newNum2
    } else if (operator === '÷') {
      answer.innerText = newNum1 / newNum2
    }
  } else {
    if (operator === '+') {
      answer.innerText = tempAnswer + newNum2
    } else if (operator === '-') {
      answer.innerText = tempAnswer - newNum2
    } else if (operator === 'x') {
      answer.innerText = tempAnswer * newNum2
    } else if (operator === '÷') {
      answer.innerText = tempAnswer / newNum2
    }
  }

  add.style.pointerEvents = 'unset';
  add.style.background = 'aliceblue';
  minus.style.pointerEvents = 'unset';
  minus.style.background = 'aliceblue';
  multiply.style.pointerEvents = 'unset';
  multiply.style.background = 'aliceblue';
  divide.style.pointerEvents = 'unset';
  divide.style.background = 'aliceblue';

})



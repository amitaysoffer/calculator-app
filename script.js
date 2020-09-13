// Gloval variables
const divide = document.getElementById('divide')
const multiply = document.getElementById('multiply')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
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
  });
});

// ADD NUMBER EVENT
plus.addEventListener('click', function () {
  // debugger;
  if (!secondNumber) {
    // debugger;
    process.innerText += '+'
    operator = '+'
    return checkSecondNumber = false;
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
});

// SUBTRACT NUMBER EVENT
minus.addEventListener('click', function () {
  // debugger;
  if (!secondNumber) {
    // debugger;
    process.innerText += '-'
    operator = '-'
    return checkSecondNumber = false;
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
});

// MULTIPLY NUMBER EVENT
multiply.addEventListener('click', function () {
  // debugger;
  if (!secondNumber) {
    // debugger;
    process.innerText += 'x'
    operator = 'x'
    return checkSecondNumber = false;
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
});

// DIVIDE NUMBER EVENT
divide.addEventListener('click', function () {
  // debugger;
  if (!secondNumber) {
    // debugger;
    process.innerText += '÷'
    operator = '÷'
    return checkSecondNumber = false;
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
  answer.innerText = '';
})

// ANSWER of equasion
equal.addEventListener('click', function (e) {

  // debugger;

  let newNum1 = Number(firstNumber)
  let newNum2 = Number(secondNumber)

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
})



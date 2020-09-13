// Gloval variables
const divide = document.getElementById('divide')
const multiply = document.getElementById('multiply')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')

const displayDigits = document.getElementById('display-digits')
const answer = document.getElementById('answer')
const process = document.getElementById('process')

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
        tempAnswer = parseInt(firstNumber) + parseInt(secondNumber)
      } else if (operator === '-') {
        tempAnswer = parseInt(firstNumber) - parseInt(secondNumber)
      } else if (operator === 'x') {
        tempAnswer = parseInt(firstNumber) * parseInt(secondNumber)
      } else if (operator === '÷') {
        tempAnswer = parseInt(firstNumber) / parseInt(secondNumber)
      }
    } else {
      if (operator === '+') {
        tempAnswer = parseInt(tempAnswer) + parseInt(secondNumber)
      } else if (operator === '-') {
        tempAnswer = parseInt(tempAnswer) - parseInt(secondNumber)
      } else if (operator === 'x') {
        tempAnswer = parseInt(tempAnswer) * parseInt(secondNumber)
      } else if (operator === '÷') {
        tempAnswer = parseInt(tempAnswer) / parseInt(secondNumber)
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
        tempAnswer = parseInt(firstNumber) + parseInt(secondNumber)
      } else if (operator === '-') {
        tempAnswer = parseInt(firstNumber) - parseInt(secondNumber)
      } else if (operator === 'x') {
        tempAnswer = parseInt(firstNumber) * parseInt(secondNumber)
      } else if (operator === '÷') {
        tempAnswer = parseInt(firstNumber) / parseInt(secondNumber)
      }
    } else {
      if (operator === '+') {
        tempAnswer = tempAnswer + parseInt(secondNumber)
      } else if (operator === '-') {
        tempAnswer = tempAnswer - parseInt(secondNumber)
      } else if (operator === 'x') {
        tempAnswer = tempAnswer * parseInt(secondNumber)
      } else if (operator === '÷') {
        tempAnswer = tempAnswer / parseInt(secondNumber)
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
        tempAnswer = parseInt(firstNumber) + parseInt(secondNumber)
      } else if (operator === '-') {
        tempAnswer = parseInt(firstNumber) - parseInt(secondNumber)
      } else if (operator === 'x') {
        tempAnswer = parseInt(firstNumber) * parseInt(secondNumber)
      } else if (operator === '÷') {
        tempAnswer = parseInt(firstNumber) / parseInt(secondNumber)
      }
    } else {
      if (operator === '+') {
        tempAnswer = tempAnswer + parseInt(secondNumber)
      } else if (operator === '-') {
        tempAnswer = tempAnswer - parseInt(secondNumber)
      } else if (operator === 'x') {
        tempAnswer = tempAnswer * parseInt(secondNumber)
      } else if (operator === '÷') {
        tempAnswer = tempAnswer / parseInt(secondNumber)
      }
    }
    answer.innerText = tempAnswer

    operator = 'x'
    secondNumber = undefined
    firstNumber = undefined
  }
});

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
        tempAnswer = parseInt(firstNumber) + parseInt(secondNumber)
      } else if (operator === '-') {
        tempAnswer = parseInt(firstNumber) - parseInt(secondNumber)
      } else if (operator === 'x') {
        tempAnswer = parseInt(firstNumber) * parseInt(secondNumber)
      } else if (operator === '÷') {
        tempAnswer = parseInt(firstNumber) / parseInt(secondNumber)
      }
    } else {
      if (operator === '+') {
        tempAnswer = tempAnswer + parseInt(secondNumber)
      } else if (operator === '-') {
        tempAnswer = tempAnswer - parseInt(secondNumber)
      } else if (operator === 'x') {
        tempAnswer = tempAnswer * parseInt(secondNumber)
      } else if (operator === '÷') {
        tempAnswer = tempAnswer / parseInt(secondNumber)
      }
    }
    answer.innerText = tempAnswer

    operator = '÷'
    secondNumber = undefined
    firstNumber = undefined
  }
});



// ANSWER of equasion
document.getElementById('equal').addEventListener('click', function (e) {

  // debugger;

  let newNum1 = parseInt(firstNumber)
  let newNum2 = parseInt(secondNumber)

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



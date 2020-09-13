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
        // console.log(`First Number ${firstNumber}`);

        process.innerText = firstNumber
        // console.log(typeof process.innerText)
      } else {
        firstNumber += addNumber
        // console.log(`First Number ${firstNumber}`);

        process.innerText = firstNumber
      }
      // Checking second number
    } else {
      // debugger;
      // Checking first digit
      if (secondNumber === undefined) {
        secondNumber = addNumber
        // console.log(`Second Number ${secondNumber}`);
        process.innerText += secondNumber
        // if (!tempAnswer) {
        //   process.innerText = tempAnswer + parseInt(secondNumber)
        // } else {
        // }
        // tempAnswer = secondNumber
      } else {
        // checking second digit
        // debugger
        secondNumber += addNumber
        // console.log(`Second Number ${secondNumber}`);
        // tempAnswer = secondNumber;
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
      }
    } else {
      if (operator === '+') {
        tempAnswer = parseInt(tempAnswer) + parseInt(secondNumber)
      } else if (operator === '-') {
        tempAnswer = parseInt(tempAnswer) - parseInt(secondNumber)
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
      }
    } else {
      if (operator === '+') {
        tempAnswer = tempAnswer + parseInt(secondNumber)
      } else if (operator === '-') {
        tempAnswer = tempAnswer - parseInt(secondNumber)
      }
    }


    answer.innerText = tempAnswer

    operator = '-'
    secondNumber = undefined
    firstNumber = undefined
  }
});


// ANSWER of equasion
document.getElementById('equal').addEventListener('click', function (e) {

  // debugger;


  let newNum1 = parseInt(firstNumber)
  let newNum2 = parseInt(secondNumber)
  // tempAnswer = parseInt(tempAnswer)

  if (!tempAnswer) {
    if (operator === '+') {
      answer.innerText = newNum1 + newNum2
    } else if (operator === '-') {
      answer.innerText = newNum1 - newNum2
    }
  } else {
    if (operator === '+') {
      answer.innerText = tempAnswer + newNum2
    } else if (operator === '-') {
      answer.innerText = tempAnswer - newNum2
    }
  }
})



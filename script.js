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

    if (checkSecondNumber) {
      if (firstNumber === undefined) {
        firstNumber = addNumber
        console.log(`First Number ${firstNumber}`);
        // append
        process.innerText = firstNumber
        console.log(typeof process.innerText)
      } else {
        firstNumber += addNumber
        console.log(`First Number ${firstNumber}`);
        //  append
        process.innerText = firstNumber
      }
    } else {
      debugger;
      if (secondNumber === undefined) {
        secondNumber = addNumber
        console.log(`Second Number ${secondNumber}`);
        if (tempAnswer) {
          process.innerText = tempAnswer + parseInt(secondNumber)
        } else {
          process.innerText += secondNumber
        }
        // tempAnswer = secondNumber
      } else {
        // debugger
        secondNumber += addNumber
        console.log(`Second Number ${secondNumber}`);
        tempAnswer = secondNumber;
        answer.innerText += addNumber
      }
    }
  });
});


plus.addEventListener('click', function () {
  console.log('PLUS')
  // debugger;
  if (!firstNumber) {
    alert('click number first');
  } else if (!secondNumber) {
    // debugger;
    process.innerText += '+'
    operator = '+'
    return checkSecondNumber = false;
  } else {
    debugger;
    process.innerText += '+'

    tempAnswer = parseInt(firstNumber) + parseInt(secondNumber)

    answer.innerText = tempAnswer
    // let a = parseInt(firstNumber)
    // let b = parseInt(secondNumber)
    secondNumber = undefined
    // firstNumber = Number(firstNumber) + Number(secondNumber);
    // return firstNumber = a + b;
  }
});

// 

// Final answer of equasion
document.getElementById('equal').addEventListener('click', function (e) {

  debugger;
  console.log(process.innerText);

  console.log(firstNumber)
  console.log(secondNumber)
  console.log(tempAnswer)
  console.log(operator)

  let newNum1 = parseInt(firstNumber)
  let newNum2 = parseInt(secondNumber)
  let newTempAnswer = parseInt(tempAnswer)

  // if (!tempAnswer) {
  if (operator === '+') {
    answer.innerText = newNum1 + newNum2
  }
  // } else {
  //   if (operator === '+') {
  //     answer.innerText = newTempAnswer + newNum2
  //   } else if (operator === '-') {
  //     answer.innerText = newTempAnswer - newNum2
  //   }
  // }
})


// ------------------------------- 
minus.addEventListener('click', function () {
  alert('not available at the moment')
  //   console.log('MINUS')
  //   // debugger;
  //   if (!firstNumber) {
  //     alert('click number first');
  //   } else if (!secondNumber) {
  //     // debugger;
  //     process.innerText += '-'
  //     operator = '-'
  //     return checkSecondNumber = false;
  //   } else {
  //     // debugger;
  //     process.innerText += '-'
  
  //     tempAnswer = parseInt(firstNumber) - parseInt(secondNumber)
  
  //     answer.innerText = tempAnswer
  //     // let a = parseInt(firstNumber)
  //     // let b = parseInt(secondNumber)
  //     secondNumber = undefined
  //     // firstNumber = Number(firstNumber) + Number(secondNumber);
  //     // return firstNumber = a + b;
  //   }
  });
// Gloval variables
const add = document.getElementById('add')
const minus = document.getElementById('minus')
const multiply = document.getElementById('multiply')
const divide = document.getElementById('divide')
const answer = document.getElementById('answer')
const process = document.getElementById('process')

let initialNumber;
let lastNumber;
let operator = ''
let currentAnswer = 0;
let isInitialNumberOneDigitOrLess = true;

// Click numbers event listener
document.querySelectorAll('.number').forEach(item => {
  item.addEventListener('click', function (e) {
    // Store new number
    const newNumber = e.target.getAttribute('data-value');
    // Store initial number
    if (initialNumber === undefined && isInitialNumberOneDigitOrLess) {
      initialNumber = newNumber
      process.innerText = initialNumber
    } else if (isInitialNumberOneDigitOrLess) {
      initialNumber += newNumber
      process.innerText = initialNumber
      // Store last number
    } else if (lastNumber === undefined && !isInitialNumberOneDigitOrLess) {
      lastNumber = newNumber
      process.innerText += lastNumber
    } else {
      lastNumber += newNumber
      process.innerText += newNumber
    }

    restartOperatorsBtnStyle();
  });
});

const storeCurrentAnswer = function (selectedNumber, lastOperator, newOperator) {
  if (lastOperator === '+') {
    currentAnswer = Number(selectedNumber) + Number(lastNumber)
  } else if (lastOperator === '-') {
    currentAnswer = Number(selectedNumber) - Number(lastNumber)
  } else if (lastOperator === 'x') {
    currentAnswer = Number(selectedNumber) * Number(lastNumber)
  } else if (lastOperator === '÷') {
    currentAnswer = Number(selectedNumber) / Number(lastNumber)
  }

  operator = newOperator;
  answer.innerText = currentAnswer
  process.innerText += newOperator
  lastNumber = undefined
  initialNumber = undefined
}

const calcAnswer = function (selectedNumber, operator) {
  if (operator === '+') {
    answer.innerText = Number(selectedNumber) + Number(lastNumber)
  } else if (operator === '-') {
    answer.innerText = Number(selectedNumber) - Number(lastNumber)
  } else if (operator === 'x') {
    answer.innerText = Number(selectedNumber) * Number(lastNumber)
  } else if (operator === '÷') {
    answer.innerText = Number(selectedNumber) / Number(lastNumber)
  }
}


const styleOperatorButtons = function (selectedOperator) {
  const operatorList = ['add', 'minus', 'multiply', 'divide'];
  const result = operatorList.filter(operator => operator != selectedOperator.id)

  selectedOperator.style.pointerEvents = 'none';
  selectedOperator.style.background = 'blue';

  document.getElementById(result[0]).style.pointerEvents = 'unset';
  document.getElementById(result[0]).style.background = 'aliceblue';
  document.getElementById(result[1]).style.pointerEvents = 'unset';
  document.getElementById(result[1]).style.background = 'aliceblue';
  document.getElementById(result[2]).style.pointerEvents = 'unset';
  document.getElementById(result[2]).style.background = 'aliceblue';
}

const restartOperatorsBtnStyle = function () {
  add.setAttribute('style', 'pointer-events; auto; background: aliceblue');
  minus.setAttribute('style', 'pointer-events; auto; background: aliceblue')
  multiply.setAttribute('style', 'pointer-events; auto; background: aliceblue');
  divide.setAttribute('style', 'pointer-events; auto; background: aliceblue');
}

const switchBetweenOperatorsFix = function (newOperator) {

  process.innerText = process.innerText.slice(0, process.innerText.length - 1) + newOperator
  return operator = newOperator
}

const errorMessage = function (operator) {
  alert(`You must enter a number before you type '${operator}'`);
}

const addConditionsToInitialNumber = function (newOperator) {
  process.innerText += newOperator
  isInitialNumberOneDigitOrLess = false;
  operator = newOperator
}

// Add event listener
add.addEventListener('click', function () {
  // Adjust display operator if user changes operators
  if (operator && !lastNumber) {
    switchBetweenOperatorsFix('+');
    // User clicks an operator before number
  } else if (!operator && !initialNumber && !lastNumber) {
    return errorMessage('+');
  } else if (!lastNumber) {
    addConditionsToInitialNumber('+');
  }
  // Create current answer of initial number
  if (initialNumber && lastNumber) {
    storeCurrentAnswer(initialNumber, operator, '+');
    // Update current answer
  } else if (lastNumber) {
    storeCurrentAnswer(currentAnswer, operator, '+');
  }

  styleOperatorButtons(this);
});

// Subtract event listener
minus.addEventListener('click', function () {
  // Adjust display operator if user changes operators
  if (operator && !lastNumber) {
    switchBetweenOperatorsFix('-');
    // User clicks an operator before number
  } else if (!operator && !initialNumber && !lastNumber) {
    return errorMessage('-');
  } else if (!lastNumber) {
    addConditionsToInitialNumber('-');
  }
  // Create current answer of initial number
  if (initialNumber && lastNumber) {
    storeCurrentAnswer(initialNumber, operator, '-');
    // Update current answer
  } else if (lastNumber) {
    storeCurrentAnswer(currentAnswer, operator, '-');
  }

  styleOperatorButtons(this);
});

// Multiply event listener
multiply.addEventListener('click', function () {
  // Adjust display operator if user changes operators
  if (operator && !lastNumber) {
    switchBetweenOperatorsFix('x');
    // User clicks an operator before number
  } else if (!operator && !initialNumber && !lastNumber) {
    return errorMessage('x');
  } else if (!lastNumber) {
    addConditionsToInitialNumber('x');
  }
  // Create current answer of initial number
  if (initialNumber && lastNumber) {
    storeCurrentAnswer(initialNumber, operator, 'x');
    // Update current answer
  } else if (lastNumber) {
    storeCurrentAnswer(currentAnswer, operator, 'x');
  }

  styleOperatorButtons(this);
});

// Divide event listener
divide.addEventListener('click', function () {
  // Adjust display operator if user changes operators
  if (operator && !lastNumber) {
    switchBetweenOperatorsFix('÷');
    // User clicks an operator before number
  } else if (!operator && !initialNumber && !lastNumber) {
    return errorMessage('÷');
  } else if (!lastNumber) {
    addConditionsToInitialNumber('÷');
  }
  // Create current answer of initial number
  if (initialNumber && lastNumber) {
    storeCurrentAnswer(initialNumber, operator, '÷');
    // Update current answer
  } else if (lastNumber) {
    storeCurrentAnswer(currentAnswer, operator, '÷');
  }

  styleOperatorButtons(this);
});

let isDecimal = false;
// Decimal event listener
document.getElementById('decimal').addEventListener('click', function () {
  const text = process.innerText;
  if (text.charAt(text.length - 1) !== '.' && text) {
    if (initialNumber && !lastNumber) {
      initialNumber += '.'
      process.innerText += '.'
    } else {
      lastNumber += '.'
      process.innerText += '.'
    }
  }
  isDecimal = true;
});


// Restart to default settings
document.getElementById('clear-btn').addEventListener('click', function (e) {
  initialNumber = undefined;
  lastNumber = undefined;
  operator = ''
  currentAnswer = 0;
  isInitialNumberOneDigitOrLess = true;

  process.innerText = '';
  answer.innerText = '0';

  restartOperatorsBtnStyle();
})

// Answer event listener
document.getElementById('equal').addEventListener('click', function (e) {

  if (initialNumber) {
    calcAnswer(initialNumber, operator);
  } else {
    calcAnswer(currentAnswer, operator);
  }

  // debugger;

  // let a = renderMinimizedAnswer();
  // debugger;
  answer.innerText = renderAnswer()


  restartOperatorsBtnStyle();
})

// 3.1 + 2.2
const renderAnswer = function () {
  // debugger
  if (isDecimal) {
    const text = answer.innerText;
    let minimizedAnswer;
    text.split('').forEach(function (number, index) {
      if (number === '.') {
        let unDesiredPart = text.slice(index + 3, text.length);
        minimizedAnswer = text.replace(unDesiredPart, '');
      }
    })
    return minimizedAnswer
  } else {
    return answer.innerText
  }
}
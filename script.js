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

let initialNumber;
let lastNumber;
let operator = ''
let currentAnswer = 0;
let isInitialNumberOneDigitOrLess = true;
let isDecimal = false;

class UI {
  static styleOperatorButtons(selectedOperator) {
    const operatorList = ['add', 'minus', 'multiply', 'divide'];
    const result = operatorList.filter(operator => operator != selectedOperator.id)
    // Style the clicked operator
    selectedOperator.style.pointerEvents = 'none';
    selectedOperator.style.background = 'blue';
    // Style rest operators
    document.getElementById(result[0]).style.pointerEvents = 'unset';
    document.getElementById(result[0]).style.background = '#5E057F';
    document.getElementById(result[1]).style.pointerEvents = 'unset';
    document.getElementById(result[1]).style.background = '#5E057F';
    document.getElementById(result[2]).style.pointerEvents = 'unset';
    document.getElementById(result[2]).style.background = '#5E057F';
  }
  static errorMessage(operator) {
    alert(`You must enter a number before you enter '${operator}'`);
  }
  static renderMinimizedRemainder() {
    const text = answer.innerText;
    answer.innerText = text.substring(0, text.indexOf('.') + 3);
  }
  static renderAnswer(selectedNumber, lastOperator) {
    if (lastOperator === '+') {
      answer.innerText = Number(selectedNumber) + Number(lastNumber)
    } else if (lastOperator === '-') {
      answer.innerText = Number(selectedNumber) - Number(lastNumber)
    } else if (lastOperator === 'x') {
      answer.innerText = Number(selectedNumber) * Number(lastNumber)
    } else if (lastOperator === '÷') {
      answer.innerText = Number(selectedNumber) / Number(lastNumber)
    }
  }
  static restartOperatorsBtnStyle() {
    add.setAttribute('style', 'pointer-events; auto; background: #5E057F');
    minus.setAttribute('style', 'pointer-events; auto; background: #5E057F')
    multiply.setAttribute('style', 'pointer-events; auto; background: #5E057F');
    divide.setAttribute('style', 'pointer-events; auto; background: #5E057F');
  }
}

class Utilities {
  static switchBetweenOperatorsFix(newOperator) {
    process.innerText = process.innerText.slice(0, process.innerText.length - 1) + newOperator
    return operator = newOperator
  }
  static addConditionsToInitialNumber(newOperator) {
    process.innerText += newOperator
    isInitialNumberOneDigitOrLess = false;
    operator = newOperator
  }
  static updateSettings(newOperator) {
    operator = newOperator;
    currentAnswer = answer.innerText
    process.innerText += newOperator
    lastNumber = undefined
    initialNumber = undefined
  }
}

// Event Handlers
add.addEventListener('click', function () {
  // Adjust display operator if user changes operators
  if (operator && !lastNumber) {
    Utilities.switchBetweenOperatorsFix('+');

    // User clicks an operator before number
  } else if (!operator && !initialNumber && !lastNumber) {
    return UI.errorMessage('+');
  } else if (!lastNumber) {
    Utilities.addConditionsToInitialNumber('+');
  }

  // Create current answer of initial number
  if (initialNumber && lastNumber) {
    UI.renderAnswer(initialNumber, operator, '+');
    Utilities.updateSettings('+');
    // Update current answer
  } else if (lastNumber) {
    UI.renderAnswer(currentAnswer, operator, '+');
    Utilities.updateSettings('+');
  }

  if (isDecimal) {
    UI.renderMinimizedRemainder();
  };

  UI.styleOperatorButtons(this);
});

minus.addEventListener('click', function () {
  // Adjust display operator if user changes operators
  if (operator && !lastNumber) {
    Utilities.switchBetweenOperatorsFix('-');
    // User clicks an operator before number
  } else if (!operator && !initialNumber && !lastNumber) {
    return UI.errorMessage('-');
  } else if (!lastNumber) {
    Utilities.addConditionsToInitialNumber('-');
  }
  // Create current answer of initial number
  if (initialNumber && lastNumber) {
    UI.renderAnswer(initialNumber, operator);
    Utilities.updateSettings('-');
    // Update current answer
  } else if (lastNumber) {
    UI.renderAnswer(currentAnswer, operator);
    Utilities.updateSettings('-');
  }

  if (isDecimal) {
    UI.renderMinimizedRemainder();
  };

  UI.styleOperatorButtons(this);
});

multiply.addEventListener('click', function () {
  // Adjust display operator if user changes operators
  if (operator && !lastNumber) {
    Utilities.switchBetweenOperatorsFix('x');
    // User clicks an operator before number
  } else if (!operator && !initialNumber && !lastNumber) {
    return UI.errorMessage('x');
  } else if (!lastNumber) {
    Utilities.addConditionsToInitialNumber('x');
  }
  // Create current answer of initial number
  if (initialNumber && lastNumber) {
    UI.renderAnswer(initialNumber, operator);
    Utilities.updateSettings('x');
    // Update current answer
  } else if (lastNumber) {
    UI.renderAnswer(currentAnswer, operator);
    Utilities.updateSettings('x');
  }

  if (isDecimal) {
    UI.renderMinimizedRemainder();
  };

  UI.styleOperatorButtons(this);
});

divide.addEventListener('click', function () {
  // Adjust display operator if user changes operators
  if (operator && !lastNumber) {
    Utilities.switchBetweenOperatorsFix('÷');
    // User clicks an operator before number
  } else if (!operator && !initialNumber && !lastNumber) {
    return UI.errorMessage('÷');
  } else if (!lastNumber) {
    Utilities.addConditionsToInitialNumber('÷');
  }
  // Create current answer of initial number
  if (initialNumber && lastNumber) {
    UI.renderAnswer(initialNumber, operator);
    Utilities.updateSettings('÷');
    // Update current answer
  } else if (lastNumber) {
    UI.renderAnswer(currentAnswer, operator);
    Utilities.updateSettings('÷');
  }

  if (isDecimal) {
    UI.renderMinimizedRemainder();
  };

  UI.styleOperatorButtons(this);
});

decimal.addEventListener('click', function () {
  const text = process.innerText;
  if (text.charAt(text.length - 1) !== '.' && text) {
    if (initialNumber && !lastNumber) {
      initialNumber += '.'
      process.innerText += '.'
    } else {
      lastNumber += '.'
      process.innerText += '.'
    }
  } else {
    UI.errorMessage('decimal')
  }
  isDecimal = true;
});

clear.addEventListener('click', function (e) {
  initialNumber = undefined;
  lastNumber = undefined;
  operator = ''
  currentAnswer = 0;
  isInitialNumberOneDigitOrLess = true;
  isDecimal = false;

  process.innerText = '';
  answer.innerText = '0';

  UI.restartOperatorsBtnStyle();
})

equal.addEventListener('click', function (e) {
  if (initialNumber) {
    UI.renderAnswer(initialNumber, operator);
  } else if (lastNumber) {
    UI.renderAnswer(currentAnswer, operator);
  } else {
    UI.errorMessage('=')
  }

  if (isDecimal) {
    UI.renderMinimizedRemainder();
  };

  UI.restartOperatorsBtnStyle();
})

// Click numbers event listener
document.querySelectorAll('.number').forEach(number => {
  number.addEventListener('click', function (e) {
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

    UI.restartOperatorsBtnStyle();
  });
});
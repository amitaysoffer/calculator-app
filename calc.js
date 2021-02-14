const calcFunc = (operator, firstOperhand, secondOperhand) => {
  switch (operator) {
    case '+':
      return Number(firstOperhand) + Number(secondOperhand);
    case '-':
      return Number(firstOperhand) - Number(secondOperhand);
    case 'x':
      return Number(firstOperhand) * Number(secondOperhand);
    case '÷':
      return Number(firstOperhand) / Number(secondOperhand);
  }
};

module.exports = { calcFunc };

let display = document.getElementById('display');

let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

function press(val) {
  if (waitingForSecondValue) {
    display.value = val;
    waitingForSecondValue = false;
  } else {
    if (display.value === '0' || display.value === '') {
      display.value = val;
    } else {
      display.value += val;
    }
  }
}

function chooseOperator(nextOperator) {
  const inputValue = parseFloat(display.value);

  if (firstValue === null) {
    firstValue = inputValue;
  } else if (operator) {
    const result = performCalculation();
    display.value = String(result);
    firstValue = result;
  }

  waitingForSecondValue = true;
  operator = nextOperator;
}

function performCalculation() {
  const secondValue = parseFloat(display.value);

  if (operator === '+') return firstValue + secondValue;
  if (operator === '-') return firstValue - secondValue;
  if (operator === '*') return firstValue * secondValue;
  if (operator === '/') return firstValue / secondValue;

  return secondValue;
}

function calculate() {
  if (operator === null || waitingForSecondValue) return;

  const result = performCalculation();
  display.value = String(result);

  firstValue = null;
  operator = null;
  waitingForSecondValue = false;
}

function clearDisplay() {
  display.value = '';
  firstValue = null;
  operator = null;
  waitingForSecondValue = false;
}

// Global variables
let firstNum = null;
let secondNum = null;
let operator1 = null;
let operator2 = null;
let result = null;
let displayContent = "0";
const operators = ["+", "-", "/", "x", "*"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Function to evaluate the equation
function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "x":
      return a * b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "Oh c'mon!";
      } else {
        return a / b;
      }
  }
}

function updateDisplay() {
  const display = document.querySelector(".display");
  display.innerText = displayContent;
  if (displayContent.length > 12) {
    display.innerText = displayContent.substring(0, 12);
  }
}

updateDisplay();

// Add click event listeners to the button
const buttons = document.querySelectorAll(".buttons > div");
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    let selection = event.target.textContent;
    event.stopPropagation();
    if (selection === ".") {
      decimalInput(selection);
      updateDisplay();
    } else if (numbers.includes(selection)) {
      operandsInput(selection);
      updateDisplay();
    } else if (operators.includes(selection)) {
      operatorsInput(selection);
      updateDisplay();
    } else if (selection === "=") {
      equalsInput();
      updateDisplay();
    } else if (selection === "DEL") {
      delInput();
      updateDisplay();
    } else if (selection === "C") {
      clearInput();
      updateDisplay();
    } else if (selection === "+/-") {
      negativePositive();
      updateDisplay();
    }
  });
});

// Add key press event listeners
document.addEventListener("keypress", function onPress(selection) {
  if (selection.key === ".") {
    decimalInput(selection);
    updateDisplay();
  } else if (numbers.includes(selection.key)) {
    operandsInput(selection.key);
    updateDisplay();
  } else if (operators.includes(selection.key)) {
    operatorsInput(selection.key);
    updateDisplay();
  } else if (selection.key === "=") {
    equalsInput();
    updateDisplay();
  } else if (selection.key === "c" || selection.key === "C") {
    clearInput();
    updateDisplay();
  }
});

function decimalInput(decimal) {
  if (displayContent === firstNum || displayContent === secondNum) {
    displayContent = "0";
    displayContent += decimal;
  } else if (!displayContent.includes(decimal)) {
    displayContent += decimal;
  }
}

function operandsInput(num) {
  if (operator1 === null) {
    if (displayContent === "0" || displayContent === 0) {
      displayContent = num;
    } else if (displayContent === firstNum) {
      displayContent = num;
    } else {
      displayContent += num;
    }
  } else {
    if (displayContent === firstNum) {
      displayContent = num;
    } else {
      displayContent += num;
    }
  }
}

function operatorsInput(operator) {
  // Handles first operator (2nd click)
  if (operator1 === null) {
    operator1 = operator;
    firstNum = displayContent;
  } else {
    // Handles second operator (4th click)
    if (operator1 != null && operator2 === null) {
      secondNum = displayContent;
      result = operate(operator1, Number(firstNum), Number(secondNum));
      displayContent = roundAccurately(result, 15).toString();
      firstNum = displayContent;
      operator2 = operator;
      result = null;
    } else if (operator1 != null && operator2 != null) {
      // Handles third operator and beyond (6th click)
      secondNum = displayContent;
      result = operate(operator2, Number(firstNum), Number(secondNum));
      displayContent = roundAccurately(result, 15).toString();
      firstNum = displayContent;
      operator1 = operator2;
      operator2 = operator;
      result = null;
    }
  }
}

function inputOperator(operator) {
  if (firstOperator != null && secondOperator === null) {
    //4th click - handles input of second operator
    secondOperator = operator;
    secondOperand = displayValue;
    result = operate(
      Number(firstOperand),
      Number(secondOperand),
      firstOperator
    );
    displayValue = roundAccurately(result, 15).toString();
    firstOperand = displayValue;
    result = null;
  } else if (firstOperator != null && secondOperator != null) {
    //6th click - new secondOperator
    secondOperand = displayValue;
    result = operate(
      Number(firstOperand),
      Number(secondOperand),
      secondOperator
    );
    secondOperator = operator;
    displayValue = roundAccurately(result, 15).toString();
    firstOperand = displayValue;
    result = null;
  } else {
    //2nd click - handles first operator input
    firstOperator = operator;
    firstOperand = displayValue;
  }
}

function negativePositive() {
  if (displayContent != "0") {
    let temp = Number(displayContent * -1);
    console.log(temp);
    displayContent = temp.toString();
  }
}

function equalsInput() {
  // Prevent undefined by clicking = too early
  if (operator1) {
    secondNum = displayContent;
    result = operate(operator1, Number(firstNum), Number(secondNum));
    displayContent = roundAccurately(result, 15).toString();
    operator1 = null;
    operator2 = null;
    firstNum = displayContent;
  }
}

function delInput() {
  if (displayContent.length === 1) {
    displayContent = "0";
  } else {
    displayContent = displayContent.slice(0, displayContent.length - 1);
  }
}

function clearInput() {
  firstNum = null;
  secondNum = null;
  operator1 = null;
  operator2 = null;
  displayContent = "0";
}

function roundAccurately(num, places) {
  return parseFloat(Math.round(num + "e" + places) + "e-" + places);
}

// // Add keypress listener to document
// document.addEventListener("keypress", function onPress(event) {
//   if (event.key >= "0" && event.key <= "9") {
//     display.innerHTML = display.innerHTML + event.key;
//   } else if (event.key === ".") {
//     // Prevent decimal from being pressed twice
//     if (decimalCounter) {
//       display.innerHTML = display.innerHTML + event.key;
//       decimalCounter = false;
//     }
//   } else if (
//     event.key === "/" ||
//     event.key === "x" ||
//     event.key === "*" ||
//     event.key === "-" ||
//     event.key === "+" ||
//     event.key === "!" ||
//     event.key === "^"
//   ) {
//     console.log(operatorCounter);
//     if (!operatorCounter) {
//       setValueA(Number(display.textContent), event.key);
//     } else {
//       b = Number(display.textContent); // set "b" value on equals
//       clearDisplay();
//       operate(operator, a, b);
//       a = result;
//     }
//   } else if (event.key === "=") {
//     b = Number(display.textContent); // set "b" value on equals
//     operate(operator, a, b);
//     operatorCounter = 0;
//   }
// });

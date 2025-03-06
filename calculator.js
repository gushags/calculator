// The math functions
const add = function (a, b) {
  result = a + b;
};

const subtract = function (a, b) {
  result = a - b;
};

const multiply = function (a, b) {
  result = a * b;
};

const divide = function (a, b) {
  result = a / b;
};

// Function to sum the equation
function operate(operator, a, b) {
  switch (operator) {
    case "+":
      add(a, b);
      break;
    case "-":
      subtract(a, b);
      break;
    case "x":
      multiply(a, b);
      break;
    case "/":
      divide(a, b);
      break;
  }
}

let firstNum = null;
let secondNum = null;
let operator = "";
let result;
let displayContent = [0];
const operators = ["+", "-", "/", "x"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Display area
const display = document.querySelector(".display");
display.textContent = displayContent;

// Add click event listeners to the button
const buttons = document.querySelectorAll(".buttons > div");
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    let select = event.target.textContent;
    event.stopPropagation();
    if (select === ".") {
      if (!displayContent.includes(".")) {
        display.textContent = displayContent.push(select);
      }
    } else if (numbers.includes(select)) {
      if (displayContent[0] == 0) {
        displayContent = [];
        firstNum = displayContent.push(select);
        display.textContent = displayContent;
      } else {
        displayContent.push(select);
        firstNum = displayContent.join("");
        display.textContent = firstNum;
      }
    } else if (operators.includes(select) && secondNum === null) {
      operator = select;
    } else if (operators.includes(select) && secondNum != null) {
      operate(operator, Number(firstNum), Number(secondNum));
      operator = select;
    } else if (select === "=" && secondNum != null) {
      operate(operator, Number(firstNum), Number(secondNum));
    }
  });
});

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

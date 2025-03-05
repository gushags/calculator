// Global values
let a = "";
let b = "";
let result = 0;
let operator = "";
let operatorCounter = 0;
let decimalCounter = true;

// The math functions
const add = function (a, b) {
  result = a + b;
  displayResult(result);
  operatorCounter++;
};

const subtract = function (a, b) {
  result = a - b;
  displayResult(result);
  operatorCounter++;
};

const multiply = function (a, b) {
  result = a * b;
  displayResult(result);
  operatorCounter++;
};

const divide = function (a, b) {
  result = a / b;
  displayResult(result);
  operatorCounter++;
};

const power = function (a, b) {
  let total = 1;
  for (let i = 0; i < b; i++) {
    total = total * a;
  }
  return total;
};

const factorial = function (num) {
  let total = 1;
  if (Number.isInteger(num) && num < 100) {
    for (let i = 1; i < num + 1; i++) {
      total = total * i;
    }
    return total;
  } else {
    alert("Factorial only works with whole numbers or number less than 100.");
    return "";
  }
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
    case "*":
      multiply(a, b);
      break;
    case "/":
      divide(a, b);
      break;
  }
}

// Display area
const display = document.querySelector(".display");

// Add event listeners to AC, power and factorial
const misc = document.querySelectorAll(".misc > div");
misc.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.stopPropagation();
    if (event.target.textContent === "AC") {
      clearDisplay();
      a = "";
    } else if (event.target.textContent === "^") {
      // run power function
    } else if (event.target.textContent === "!") {
      setValueA(Number(display.textContent), event.target.textContent);
    }
  });
});

// Add click event listeners to the numbers
const numbers = document.querySelectorAll(".numbers > div");
numbers.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.stopPropagation();
    if (event.target.textContent === ".") {
      if (decimalCounter) {
        display.innerHTML = display.innerHTML + event.target.textContent;
        decimalCounter = false;
      }
    } else {
      display.innerHTML = display.innerHTML + event.target.textContent;
    }
  });
});

// Add click event listeners to the operators
const operators = document.querySelectorAll(".operators > div");
operators.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.stopPropagation();
    if (event.target.textContent === "=") {
      b = Number(display.textContent); // set "b" value on equals
      operate(operator, a, b);
      operatorCounter = 0;
    } else if (!operatorCounter) {
      setValueA(Number(display.textContent), event.target.textContent);
    }
  });
});

// Add keypress listener to document
document.addEventListener("keypress", function onPress(event) {
  if (event.key >= "0" && event.key <= "9") {
    display.innerHTML = display.innerHTML + event.key;
  } else if (event.key === ".") {
    // Prevent decimal from being pressed twice
    if (decimalCounter) {
      display.innerHTML = display.innerHTML + event.key;
      decimalCounter = false;
    }
  } else if (
    event.key === "/" ||
    event.key === "x" ||
    event.key === "*" ||
    event.key === "-" ||
    event.key === "+" ||
    event.key === "!" ||
    event.key === "^"
  ) {
    console.log(operatorCounter);
    if (!operatorCounter) {
      setValueA(Number(display.textContent), event.key);
    } else {
      b = Number(display.textContent); // set "b" value on equals
      clearDisplay();
      operate(operator, a, b);
      a = result;
    }
  } else if (event.key === "=") {
    b = Number(display.textContent); // set "b" value on equals
    operate(operator, a, b);
    operatorCounter = 0;
  }
});

function setValueA(num, operation) {
  switch (operation) {
    case "!":
      a = num;
      displayResult(factorial(num));
      break;
    case "^":
      //something
      break;
  }
  if (!operatorCounter) {
    a = num;
    operator = operation;
    operatorCounter++;
    clearDisplay();
  } else if (operatorCounter) {
    operate(operation, a, num);
  }
}

function displayResult(result) {
  clearDisplay();
  display.innerHTML = result;
  decimalCounter = true;
}

function clearDisplay() {
  display.innerHTML = "";
  decimalCounter = true;
}

// Global values
let a = "";
let b = "";
let result = 0;
let operator = "";
let decimalCounter = true;

// The math functions
const add = function (a, b) {
  result = a + b;
  displayResult(result);
};

const subtract = function (a, b) {
  result = a - b;
  displayResult(result);
};

const multiply = function (a, b) {
  result = a * b;
  displayResult(result);
};

const divide = function (a, b) {
  result = a / b;
  displayResult(result);
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
  // something here
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
        console.log("You pressed " + event.target.textContent);
        decimalCounter = false;
      }
    } else {
      display.innerHTML = display.innerHTML + event.target.textContent;
      console.log(event.target.textContent);
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
    } else {
      a = Number(display.textContent); // set "a" value
    }
    operator = event.key;
    console.log(event.target.textContent);
  });
});

// Add keypress listener to document
document.addEventListener("keypress", function onPress(event) {
  if (event.key >= "0" && event.key <= "9") {
    display.innerHTML = display.innerHTML + event.key;
    console.log("You pressed " + event.key);
  } else if (event.key === ".") {
    // Prevent decimal from being pressed twice
    if (decimalCounter) {
      display.innerHTML = display.innerHTML + event.key;
      console.log("You pressed " + event.key);
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
    setValueA(Number(display.textContent), event.key);
    console.log("You pressed an operator " + event.key);
  } else if (event.key === "=") {
    b = Number(display.textContent); // set "b" value on equals
    console.log(a + " " + operator + " " + b);
    operate(operator, a, b);
    console.log("You pressed an operator " + event.key);
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
  a = num;
  operator = operation;
  clearDisplay();
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

// The math functions
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const power = function (a, b) {
  let total = 1;
  for (let i = 0; i < b; i++) {
    total = total * a;
  }
  return total;
};

const factorial = function (a) {
  let total = 1;
  for (let i = 1; i < a + 1; i++) {
    total = total * i;
  }
  return total;
};

// Function to sum the equation
function operate(operator, a, b) {
  // something here
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

// Display area
const display = document.querySelector(".display");

// Power the number buttons
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const decimal = document.querySelector("#decimal");
const del = document.querySelector("#delete");

// Add event listeners
const numbers = document.querySelectorAll(".numbers > div");
numbers.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log(event.target.textContent);
  });
});

// Power the operators
const clearOperator = document.querySelector("#ac");
const powerOperator = document.querySelector("#pow");
const factorialOperator = document.querySelector("#factorial");
const divideOperator = document.querySelector("#divide");
const multiplyOperator = document.querySelector("#multiply");
const subtractOperator = document.querySelector("#subtract");
const additionOperator = document.querySelector("#addition");
const equalsOperator = document.querySelector("#equals");

// Add event listeners
const operators = document.querySelectorAll(".operators > div");
operators.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log(event.target.textContent);
  });
});

// Add keydown listener to display div

document.addEventListener("keypress", function onPress(event) {
  if (event.key >= "0" && event.key <= "9") {
    console.log("You pressed " + event.key);
  } else if (
    event.key === "/" ||
    event.key === "x" ||
    event.key === "+" ||
    event.key === "=" ||
    event.key === "!" ||
    event.key === "^"
  ) {
    // store operator
    console.log("You pressed an operator " + event.key);
  }
});

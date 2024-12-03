const display = document.getElementById("display");
const historyList = document.getElementById("history-list");
const historySection = document.getElementById("history-section");
let history = [];

// Append numbers and operators
function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  const lastChar = display.value.slice(-1);
  if (!["+", "-", "*", "/"].includes(lastChar)) {
    display.value += operator;
  }
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Calculate results
function calculateResult() {
  try {
    const sanitizedInput = display.value.replace(/×/g, "*").replace(/÷/g, "/");
    const result = eval(sanitizedInput);
    history.push(`${display.value} = ${result}`);
    updateHistory();
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

// Trigonometric functions
function calculateTrig(func) {
  try {
    const value = parseFloat(display.value);
    let result = 0;
    if (func === "sin") result = Math.sin((value * Math.PI) / 180);
    if (func === "cos") result = Math.cos((value * Math.PI) / 180);
    if (func === "tan") result = Math.tan((value * Math.PI) / 180);
    history.push(`${func}(${value}) = ${result}`);
    updateHistory();
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

// Logarithmic function
function calculateLog() {
  try {
    const value = parseFloat(display.value);
    const result = Math.log10(value);
    history.push(`log(${value}) = ${result}`);
    updateHistory();
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

// History functions
function updateHistory() {
  historyList.innerHTML = "";
  history.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    historyList.appendChild(listItem);
  });
}

function showHistory() {
  historySection.classList.toggle("visible");
}

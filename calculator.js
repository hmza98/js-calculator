const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;
const mod = (x, y) => x % y;

const solveExp = (x, y, operation) => {
  switch (operation) {
    case "+":
      return add(x, y);
    case "-":
      return sub(x, y);
    case "*":
      return mul(x, y);
    case "/":
      return div(x, y).toFixed(2);
    case "%":
      return mod(x, y).toFixed(2);
    case "^":
      const tmp = Math.pow(x, y);
      return tmp.toFixed(2);
    default:
      return "Wrong Expression or Functionality NA";
  }
};

const calculator = () => {
  const op1String = document.getElementById("op1").value;
  const op2String = document.getElementById("op2").value;

  // To check if non-integer is entered
  if (isNaN(op1String) === true || isNaN(op2String) === true) {
    document.getElementById("res").innerHTML = "Invalid operand entered";
  } else if (op1String.length === 0 || op2String.length === 0) {
    document.getElementById("res").innerHTML = "Please enter both operands";
  } else {
    const op1 = parseInt(op1String);
    const op2 = parseInt(op2String);
    const operation = document.getElementById("operation").value;
    const result = solveExp(op1, op2, operation);
    document.getElementById("res").innerHTML = `The Result is ${result}`;
  }
};

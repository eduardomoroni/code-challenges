function calc(expression) {
  const stack = [];

  if (!expression) {
    return 0;
  }

  expression.split(" ").forEach(digit => {
    if (isOperator(digit)) {
      const secondOperand = stack.pop();
      const firstOperand = stack.pop();
      stack.push(calculate(firstOperand, secondOperand, digit));
    } else {
      stack.push(Number(digit));
    }
  });

  return Number(stack.pop());
}

const isOperator = digit => isNaN(digit);
const calculate = (a, b, operator) => operators[operator](a, b);
const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b
};

// TESTS
Test.assertEquals(calc(""), 0, "Should work with empty string");
Test.assertEquals(calc("1 2 3"), 3, "Should parse numbers");
Test.assertEquals(calc("1 2 3.5"), 3.5, "Should parse float numbers");
Test.assertEquals(calc("1 3 +"), 4, "Should support addition");
Test.assertEquals(calc("1 3 *"), 3, "Should support multiplication");
Test.assertEquals(calc("1 3 -"), -2, "Should support subtraction");
Test.assertEquals(calc("4 2 /"), 2, "Should support division");
Test.assertEquals(
  calc("5 1 2 + 4 * + 3 -"),
  14,
  "Should support complex calculation"
);

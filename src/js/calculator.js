import { add, subtract, multiply, divide } from "./math-operations";

const output = document.querySelector(".calculator__result");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const outputs = document.querySelectorAll(".calculator__output");

outputs.forEach((output) =>
  output.addEventListener(
    "input",
    (event) => (output.textContent = event.target.value)
  )
);

operators.forEach((operator) =>
  operator.addEventListener("click", (event) => {
    outputs[1].textContent = event.target.textContent;
  })
);

numbers.forEach((number) =>
  number.addEventListener("click", (event) => {
    if (outputs[1].textContent === "") {
      outputs[0].textContent += event.target.textContent;
    } else {
      outputs[2].textContent += event.target.textContent;
    }
  })
);

clear.addEventListener("click", (event) => {
  outputs.forEach((output) => {
    output.textContent = "";
    output.value = "";
  });
  output.textContent = "";
});

equals.addEventListener("click", (event) => {
  if (
    outputs[0].textContent !== "" &&
    outputs[1].textContent !== "" &&
    outputs[2].textContent !== ""
  ) {
    const first = Number(outputs[0].textContent);
    const action = outputs[1].textContent;
    const second = Number(outputs[2].textContent);

    if (action === "+") {
      output.textContent = add(first, second);
    } else if (action === "-") {
      output.textContent = subtract(first, second);
    } else if (action === "×") {
      output.textContent = multiply(first, second);
    } else {
      output.textContent = divide(first, second);
    }
  }
});

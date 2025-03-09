function add(
  num1: number,
  num2: number,
  printResult: boolean,
  someText: string
) {
  if (printResult) {
    console.log(`${someText} ${num1 + num2}`);
  } else {
    return num1 + num2;
  }
}

console.log(add(10, 10, false, "result is "));

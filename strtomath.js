function basicOp(operation, value1, value2){
  switch(operation){
  case ("*"):
    return value1*value2
    break;
  case ("/"):
    return value1/value2
    break;
  case ("+"):
    return value1+value2
    break;
  case ("-"):
    return value1-value2
    break;

  }
}
console.log(basicOp("*",5,10))

// const basicOperations = {
//   '+': (a,b) => a + b,
//   '-': (a,b) => a - b,
//   '*': (a,b) => a * b,
//   '/': (a,b) => a / b,
// }

// const basicOp = (op, x, y) => basicOperations[op](x, y)
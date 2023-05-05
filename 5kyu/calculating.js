// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...: update
function zero(operation) {
  if (typeof operation === 'function') {
    return operation(0);
  } else {
    return 0;
  }
}

function one(operation) {
  if (typeof operation === 'function') {
    return operation(1);
  } else {
    return 1;
  }
}

function two(operation) {
  if (typeof operation === 'function') {
    return operation(2);
  } else {
    return 2;
  }
}

function three(operation) {
  if (typeof operation === 'function') {
    return operation(3);
  } else {
    return 3;
  }
}

function four(operation) {
  if (typeof operation === 'function') {
    return operation(4);
  } else {
    return 4;
  }
}

function five(operation) {
  if (typeof operation === 'function') {
    return operation(5);
  } else {
    return 5;
  }
}

function six(operation) {
  if (typeof operation === 'function') {
    return operation(6);
  } else {
    return 6;
  }
}

function seven(operation) {
  if (typeof operation === 'function') {
    return operation(7);
  } else {
    return 7;
  }
}

function eight(operation) {
  if (typeof operation === 'function') {
    return operation(8);
  } else {
    return 8;
  }
}

function nine(operation) {
  if (typeof operation === 'function') {
    return operation(9);
  } else {
    return 9;
  }
}

function plus(rightOperand) {
  return function (leftOperand) {
    return leftOperand + rightOperand;
  };
}

function minus(rightOperand) {
  return function (leftOperand) {
    return leftOperand - rightOperand;
  };
}

function times(rightOperand) {
  return function (leftOperand) {
    return leftOperand * rightOperand;
  };
}

function dividedBy(rightOperand) {
  return function (leftOperand) {
    return Math.floor(leftOperand / rightOperand);
  };
}
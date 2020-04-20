function adder(x, y) {
  return x + y;
}

function subtractor(x, y) {
  return x - y;
}

function multiplier(x, y) {
  return x * y;
}

function divider(x, y) {
  return x / y;
}

function calculate({ mathFxn, x, y }) {
  return mathFxn(x, y);
}

console.log(calculate({ mathFxn: adder, x: 1, y: 2 }));

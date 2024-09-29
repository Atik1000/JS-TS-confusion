function exampleFunction() {
  let message = "Hello";
  if (true) {
    let name = "John";
  }
  console.log(message); // Works fine, since 'message' is in the same function scope
  console.log(name); // Error: 'name' is not defined, because it's scoped to the if-block
}

exampleFunction();


function exampleFunction() {
  let message = "Hello";
  let name; // Declare 'name' in the function scope
  if (true) {
    name = "John";
  }
  console.log(message); // "Hello"
  console.log(name); // "John"
}

exampleFunction();


let name = "John"; // Declared globally

function exampleFunction() {
  console.log(name); // Accessible globally
}

exampleFunction();

function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // Outputs 10, 'var' is function-scoped, not block-scoped
}

testVar();


function testLet() {
  if (true) {
    let x = 10;
  }
  console.log(x); // Error: 'x' is not defined because 'let' respects block scope
}

testLet();



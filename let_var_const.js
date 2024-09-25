function exampleFunction() {
  let message = "Hello";
  if (true) {
    let name = "John";
  }
  console.log(message); // Works fine, since 'message' is in the same function scope
  console.log(name); // Error: 'name' is not defined, because it's scoped to the if-block
}

exampleFunction();

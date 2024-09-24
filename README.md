
# JavaScript Scope Examples

This repository contains examples demonstrating common scope issues in JavaScript and their solutions. The examples cover block scope, function scope, and global scope with explanations on how to fix scope-related errors.

## Examples

### 1. Scope Error Example
Trying to access a block-scoped variable outside its block will result in a **ReferenceError**.

#### Code:
```js
function exampleFunction() {
  let message = "Hello";
  if (true) {
    let name = "John";
  }
  console.log(message);  // Works fine, since 'message' is in the same function scope
  console.log(name);     // Error: 'name' is not defined, because it's scoped to the if-block
}

exampleFunction();
```

#### Error:
```
ReferenceError: name is not defined
```

### 2. Solution 1: Declare Variables in Appropriate Scope
To fix the issue, move the variable declaration to the correct scope.

#### Code:
```js
function exampleFunction() {
  let message = "Hello";
  let name;  // Declare 'name' in the function scope
  if (true) {
    name = "John";
  }
  console.log(message);  // "Hello"
  console.log(name);     // "John"
}

exampleFunction();
```

### 3. Global Scope Example
Variables declared outside any function are globally accessible.

#### Code:
```js
let name = "John";  // Declared globally

function exampleFunction() {
  console.log(name);  // Accessible globally
}

exampleFunction();
```

### 4. Function vs Block Scope with `var`
Before ES6, `var` was the only way to declare variables, and it had function-level scope.

#### Code:
```js
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x);  // Outputs 10, 'var' is function-scoped, not block-scoped
}

testVar();
```

### 5. Solution: Use `let` or `const` for Block Scoping
Use `let` or `const` to enforce block-level scope.

#### Code:
```js
function testLet() {
  if (true) {
    let x = 10;
  }
  console.log(x);  // Error: 'x' is not defined because 'let' respects block scope
}

testLet();
```

## Conclusion
- Always use `let` and `const` for block scoping.
- Be cautious about global variables to avoid unexpected side effects.
- Ensure variables are declared in the correct scope for proper access.

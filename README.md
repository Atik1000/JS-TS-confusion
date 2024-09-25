
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




# JavaScript Variable Declarations: `var`, `let`, and `const`

This repository demonstrates the differences between `var`, `let`, and `const` in JavaScript. These keywords are used to declare variables but behave differently in terms of scope, hoisting, and mutability. Below are examples to help you understand these differences.

## Table of Contents
- [var](#var)
- [let](#let)
- [const](#const)
- [Summary](#summary)

## `var`
- **Scope**: `var` is function-scoped. If declared inside a function, it is accessible throughout the entire function. If declared outside any function, it is globally scoped.
- **Hoisting**: `var` is hoisted, which means its declaration is moved to the top of its scope and initialized as `undefined`.
- **Re-declaration**: Variables declared with `var` can be re-declared in the same scope.

#### Code Example:
```js
function varExample() {
  var x = 10;
  if (true) {
    var x = 20;  // Re-declared within the same function scope
    console.log(x);  // Outputs 20
  }
  console.log(x);  // Outputs 20 (same variable is accessible outside the block)
}

varExample();

20
20


function letExample() {
  let x = 10;
  if (true) {
    let x = 20;  // Block-scoped variable
    console.log(x);  // Outputs 20 (inside block)
  }
  console.log(x);  // Outputs 10 (outer variable remains unchanged)
}

letExample();

20
10


function constExample() {
  const x = 10;
  // x = 20;  // Error: Assignment to constant variable

  const obj = { value: 10 };
  obj.value = 20;  // Allowed because we are changing the object's property, not reassigning the variable
  console.log(obj.value);  // Outputs 20
}

constExample();
20

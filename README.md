
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




# JavaScript Closures

## What is a Closure?

A closure is a feature in JavaScript  whre an inner function has access to the outer function's variables. This means that the inner function can "remember" the environment in which it was created, even after the outer function has finished executing. Closures are often used to create private variables or to maintain state in asynchronous programming.

## How Closures Work

When a function is created in JavaScript, it forms a closure that includes the function's scope and the scope of its parent functions. This allows the inner function to access variables from the outer function even after the outer function has returned.

## Example Code

Here are some examples to illustrate how closures work:

### Example 1: Basic Closure

```javascript
function outerFunction() {
    let outerVariable = 'I am from outer function';

     funcion innerFunction() {
        console.log(outerVariable); // Accessing outerVariable
    }

    return innerFunction; // Returning the inner function
}

const myClosure = outerFunction(); // outerFunction is executed
myClosure(); // Output: I am from outer function
```

### Example 2: Closure with Parameters

```javascript
function makeCounter() {
    let count = 0; // Private variable

    return function() {
        count += 1; // Increment the count
        return count; // Return the current count
    };
}

const counter = makeCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
```

### Example 3: Using Closures for Data Privacy

```javascript
function createPerson(name) {
    let age = 0; // Private variable

    return {
        getName: function() {
            return name; // Accessing name
        },
        getAge: function() {
            return age; // Accessing age
        },
        setAge: function(newAge) {
             age = newAge; // Modifying age
        }
    };
}

const person = createPerson('Alice');
console.log(person.getName()); // Output: Alice
console.log(person.getAge()); // Output: 0
person.setAge(25);
console.log(person.getAge()); // Output: 25
```

## Conclusion

Closures are a powerful feature in JavaScript that allow for data encapsulation and the creation of private variables. Understanding closures is essential for mastering JavaScript, especially when dealing with asynchronous code and callbacks.



Here’s how you can document **hoisting** in a `README.md` file using Markdown:




### Example `README.md` for JavaScript Hoisting

```markdown
# JavaScript Hoisting

## Introduction

Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compile phase. However, **only declarations** are hoisted, not initializations. This can lead to unexpected results if not understood properly.

## Variable Hoisting Example

```javascript
console.log(myVar); // Output: undefined
var myVar = 10;
console.log(myVar); // Output: 10
```

### Explanation:
In this example:
- The `var` declaration is hoisted to the top of the scope, but the **initialization** (`myVar = 10`) stays in place.
- Before the variable is assigned a value, it is `undefined`.

JavaScript internally treats the code like this:

```javascript
var myVar;          // Declaration hoisted
console.log(myVar); // undefined, because it's not initialized yet
myVar = 10;         // Initialization happens here
console.log(myVar); // 10
```

## Function Hoisting Example

```javascript
hoistedFunction(); // Output: "Hello, I'm hoisted!"

function hoistedFunction() {
  console.log("Hello, I'm hoisted!");
}
```

### Explanation:
- Function declarations are fully hoisted, meaning you can call the function before its declaration in the code.

JavaScript interprets this code as:

```javascript
function hoistedFunction() {
  console.log("Hello, I'm hoisted!");
}

hoistedFunction(); // This works because the entire function is hoisted
```

## Hoisting with `let` and `const`

Variables declared with `let` and `const` are hoisted, but they are not initialized. Attempting to use them before their declaration results in a `ReferenceError`.

```javascript
console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = 5;
```

### Explanation:
- Although `myLetVar` is hoisted, it is in a **temporal dead zone** (TDZ) until its initialization. You cannot access it before the line where it is declared.

## Key Points:
1. **`var`**: Variable declarations are hoisted and initialized with `undefined` until assigned a value.
2. **`function`**: Both the function declaration and definition are hoisted, so the function can be called before it is defined in the code.
3. **`let` and `const`**: Declarations are hoisted but not initialized. Accessing them before their declaration causes a `ReferenceError` due to the temporal dead zone.
```

### Explanation:
- The `README.md` file includes well-structured sections such as **Variable Hoisting Example**, **Function Hoisting Example**, and **Hoisting with `let` and `const`**.
- It explains the hoisting behavior with examples and detailed explanations for each case.
- JavaScript code snippets are wrapped inside triple backticks (` ```javascript `) for proper syntax highlighting in Markdown.




```markdown
# JavaScript Prototypes

In JavaScript, **prototypes** are a fundamental concept used to implement inheritance and to allow objects to share properties and methods. Every JavaScript object has a prototype, which is also an object, and it serves as a template from which the object inherits properties and methods.

## Key Concepts of JavaScript Prototypes

### 1. Prototype Property
Every function in JavaScript has a property called `prototype`. This property is an object that is used to attach properties and methods that should be inherited by instances of that function when it is used as a constructor.

```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}.`);
};

const john = new Person('John');
john.greet(); // Output: Hello, my name is John.
```

### 2. Prototype Chain
When you try to access a property of an object, JavaScript will first look at the object itself. If the property is not found, it will look up the prototype chain until it finds the property or reaches the end of the chain (null).

```javascript
const animal = {
    speak: function() {
        console.log('Animal speaks');
    }
};

const dog = Object.create(animal);
dog.bark = function() {
    console.log('Dog barks');
};

dog.bark(); // Output: Dog barks
dog.speak(); // Output: Animal speaks (inherited from animal prototype)
```

### 3. Constructor Functions
Constructor functions are used to create objects. When you use the `new` keyword with a constructor function, the new object created inherits from the constructor's `prototype`.

```javascript
function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.getDetails = function() {
    return `${this.make} ${this.model}`;
};

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.getDetails()); // Output: Toyota Corolla
```

### 4. Overriding Prototype Properties
You can override prototype properties for specific instances.

```javascript
const animal = {
    sound: 'generic sound',
    speak: function() {
        console.log(this.sound);
    }
};

const cat = Object.create(animal);
cat.sound = 'meow';
cat.speak(); // Output: meow
```

### 5. Checking Prototypes
You can check if an object inherits from a certain prototype using the `instanceof` operator or the `isPrototypeOf()` method.

```javascript
console.log(myCar instanceof Car); // Output: true
console.log(animal.isPrototypeOf(cat)); // Output: true
```

### 6. Prototype vs. Object Properties
Properties defined on the prototype are shared across all instances. In contrast, properties defined directly on an object instance are unique to that instance.

```javascript
const obj1 = new Person('Alice');
const obj2 = new Person('Bob');

console.log(obj1.greet === obj2.greet); // Output: true (shared method)
```

## Summary
- **Prototypes** allow objects to share methods and properties, enabling inheritance and reducing memory usage.
- They create a chain that allows properties and methods to be accessed through a series of objects.
- Understanding prototypes is essential for mastering JavaScript's object-oriented programming capabilities.
```
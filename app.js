// es6 fat arrow function

// function num() {
//   return 10;
// }

// console.log(num());

// let num = () => {
//   return 10;
// };

// let num = (a) => 10;

// Actual use case  this function

var javascript = {
  name: "JavaScript",
  year: 1995,
  description:
    "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.",

  libraries: ["react", "vue", "angular"],
  printDetails: function () {
    console.log(this);

    this.libraries.forEach(function (a) {

      console.log(
        self.name + " was created in " + this.year + " and supports " + a
      );
    });
  },
};

// javascript.printDetails();
// undefined was created in undefined and supports react
// undefined was created in undefined and supports vue
// undefined was created in undefined and supports angular

/* why undefine it is  */


// var javascript = {
//   name: "JavaScript",
//   year: 1995,
//   description:
//     "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.",

//   libraries: ["react", "vue", "angular"],
//   printDetails: function () {
//     console.log(this);
// // use 
//     this.libraries.forEach((a) => {
//       console.log(
//         this.name + " was created in " + this.year + " and supports " + a
//       );
//     });
//   },
// };

// javascript.printDetails();


// Arrow function does not care this keyword . 
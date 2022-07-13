/**
  VARIABLES:
  0. Variables are named identifiers or containers that hold reassignable values. Variables can hold different types of values, such as strings, numbers, booleans, arrays, and objects. Variables are hoisted to their function or global scope.
  1. There are two different phases of variables: declaration and assignment.
*/

// 1. Declaration //
// The keyword, var, is used followed by an identifier in order to create and declare a variable. Variables will hold the value of undefined, until assigned a value. //

var firstName;
console.log(firstName);
// Prints undefined
// Variables can also be declared with the keywords let and const, but these keywords act different from var.

// 2. Assignment //
// Variables can be assigned and reassigned values by using the = operator. //
// An undefined variable given a value assignment //

firstName = 'Jack';
console.log(firstName);
// Prints Jack

// The same variable reassigned a new value. //
firstName = 'Wang';
console.log(firstName);
// Prints Wang

// 3. var, let, const
// Variables can also be declared using the keywords let and const, but act different from var. The let keyword can be reassigned, but is considered block scoped. The const keyword cannot be reassigned and will give an error message. Constant variables also cannot be left unassigned or undefined. //

let num = 1;
num = 2;
console.log(num);
// Prints 2
const age = 5;
age = 10;
console.log(age);
// Prints TypeError: Assignment to constant variable

let a = 1;
if(a === 1) {
  let a = 3;
  console.log(a);
  //Prints 3
}
console.log(a);
//Prints 1

function a() {
  const letter = "C";
};
console.log(letter);
//Prints ball is not defined because it is only available inside the blocked scope.

// 4. Hoisting
// Hoisting is when var and function declarations are dragged up to the top of the code line. Scope is the area in the code where variables can be declared. Constants are block scoped, which means they are confined to the code block where they are assigned. Constants are not hoisted to the top of their block of code. Variables used with the let keyword are also not hoisted and are block scoped. //

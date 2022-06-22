/**
  FUNCTIONS
0. Type of data that allows us to execute a block of code. Functions let us reuse existing code and can be used multiple times throughout the data. There are two phases of using functions: declaration, which is creating the function, and invocation or calling which uses the function.
*/

// 1. Parameters and Arguments //
/* Parameters are required inputs for the function. These inputs should be named appropriately to make what needs to be provided for the function clear. Arguments are the inputs or values that are passed to the function during the call phase.
*/

// 2. Syntax //
/* Functions are declared using the keyword function. The parameters of the function are put in parenthesis followed by the body of the function and usually a return statement. When calling a function, the arguments are also put in parenthesis.

function(parameter1, parameter2) {
  body: enter code
  return something
}
*/

// 3. Function Types //
/* Functions can be named and can also be anonymous or considered expressions. An anonymous function is not named, and are usually being passed to another function. A function expression is assigned to a variable.
*/

var add = function(num1, num2) {
    return num1 + num2;
  }
  console.log(add(1, 2)); // prints 3
  
  function sub(num1, num2) {
    return num1 - num2;
  }
  console.log(sub(5, 3)); // prints 2
  
  // 4. Scope and Closures //
  /* Variables declared inside a function are not accessible from outside that function. Functions are able to modify values from parent or global scopes. Closures give the function outside access to a variable from an inner function.
  */
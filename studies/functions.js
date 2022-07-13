/**
  FUNCTIONS
0. Type of data that allows us to execute a block of code. Functions let us reuse existing code and can be used multiple times throughout the data. There are two phases of using functions: declaration, which is creating the function, and invocation or calling which uses the function.
*/

// 1. Parameters and Arguments //
//Parameters are required inputs for the function. These inputs should be named appropriately to make what needs to be provided for the function clear. Arguments are the inputs or values that are passed to the function during the call phase.

function sub(num1, num2) { // num1 & num 2 are the parameter inputs for the function
  return num1 - num2;
}
sub(3, 2); // 3 & 2 are the arguments passed to the function, which will return 3 - 2 = 1


// 2. Syntax //
/* Functions are declared using the keyword function. The parameters of the function are put in parenthesis followed by the body of the function and usually a return statement. When calling a function, the arguments are also put in parenthesis.
   A function usually has a return statement which will return some sort of value. In order for the value to be returned
   the function must be invoked.

function(parameter1, parameter2) {
  body: enter code
  return something
}
*/

// 3. Function Types //
/* Functions can be named and can also be anonymous or considered expressions. An anonymous function is not named, and are usually being passed to another function. A function expression is assigned to a variable.
*/

// Function expression
var add = function(num1, num2) {
    return num1 + num2;
  }
  console.log(add(1, 2)); // prints 3
  
  // Function declaration
  function sub(num1, num2) {
    return num1 - num2;
  }
  console.log(sub(5, 3)); // prints 2
  
  // 4. Scope and Closures //
  /* Variables declared inside a function are not accessible from outside that function. Functions are able to modify values from parent or global scopes. Closures give the function outside access to a variable from an inner function.
  */
 
  var total = 1;      // global scoped variable

  function addToTotal(num) {
    return console.log(total + num); // function has access to the total variable and can modify it
    
  }

console.log(total); // prints the global scoped variable 1

addToTotal(5); // once the function is invoked, it modifies the variable but can only be accessed inside the function

function example() {
  const name = "Ace";
  function showName() {
    console.log(name);
  }
  return showName;
}
const myExample = example();
myExample();
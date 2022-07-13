/**

* DATA-TYPES:
0. Data-type refers to the type of a certain value. All values are categorized into two data-types: simple and complex data-types. //

// 1. Simple Data-types //
// Data-types that do not hold or collect other values, and can hold only one vaue at a time. Operations on simple values will return new simple values, and will not alter the original values. Simple data-types are copies by value, meaning when assigned, they are copied from one variable to the next. Simple data-types consist of the following: numbers, strings, booleans, NaN, undefined, and null. //
      // 1. Numbers: Numerical data (examples: 1, -20) //
      // 2. Strings: Can be a single or series of characters which is always kept in parenthesis (ex: 'a', "Good Day") //
      // 3. Booleans: True or False values
      // 4. NaN: refers to not a number, when a value represented is not a number //
      // 5. Undefined: refers to not having a value or the value being undefined //
      // 6. Null: Represents the intentional absence of any value and is treated as falsy for boolean operations //
*/

let greeting = "Hello there";
console.log(greeting); //prints Hello there

let total = 40
function add() {
      total + 1;
}
console.log(add()); // prints 41

10 === 10; // true
var canVote = true;
var isGreater = 5 > 10; // false

let test;
console.log(test); // undefined

let x = -7;
if(x > 0) {
      console.log("valid number")
}
return null;

// 2. Complex Data-types //
// Data-types can hold a collection of data and more complex entities. These data-types are copied by reference, meaning when assigned they are passed by reference and not by value. Complex data-types can also be of any size. Objects, Arrays, and Functions are all complex data-types. //
      // 1. Arrays: Zero indexed object that can contain a mix of different data-types. Arrays are used to collect a multitude of elements under a single variable name and are written inside of brackets. (ex:[1,'a', true])
      // 2. Objects: can store multiple collections of keyed items. The values of objects are written in key/value pairs separated by a colon and written inside of curly braces. (ex: {name: Ted, age: 10})
      // 3. Functions: A block of code designed to perform a specific task. Functions are executed when something invokes or calls on the function. Functions have parameters and arguments, which are values that are received by the function when the function is called upon. 
/*(ex:function addNum(x, y) {
        return (x + y);
})
      addNum(1, 2);
    console.log(addNum(1, 2)) Prints 3 to the console
*/

let names = ['Frank', 'Jean', 'Kelly']
console.log(names[1]); //prints Jean

let object = {
      name: "Ted",
      age: 50,
      email: "tedis50@aol.com"
}
console.log(object.name); // prints Ted

// 3. Infinity and Negative Infinity //
// Infinity is a numeric value that represents positive infinity. Any positive value multiplied by infinity will equal infinity. Any positive number divided by infinity will equal zero and will also hold a true value. Negative infinity represents the negative infinity value. Any positive value multiplied by negative infinity (including infinity) will equal negative infinity. Negative infinity divided by negative value (except negative infinity) will equal positive infinity. //
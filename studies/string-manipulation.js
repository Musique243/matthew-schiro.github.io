/**
* STRING MANIPULATION:
*
* 0. Strings can be manipulated with both operators and string method.

// 1. Manipulated using operators
*/

//Combine two strings using the add operator
let a = "Good";
let b = "Morning";
let c = a + ' ' + b;
console.log(c); // prints Good Morning

let d = "Happy";
d += "Birthday";
console.log(d); // prints Happy Birthday

//Combine two strings using concat
let e = "Hey";
let f = "there";
let g = e.concat(" ", f);
console.log(g);// print Hey there

// 2. Manipulation using methods

//Access strings with .length
var name = "Luigi";
console.log(name.length);// prints 5
console.log(name[name.length - 1]); // print i

//Modify string with .slice
var string = "dog, cat, hamster";
var part = string.slice(5, 8);
console.log(part); // prints cat

//Modify string with .replace
var text = "Hello, good morning";
var newText = text.replace("morning", "evening");
console.log(newText);// prints hello, good evening

//Change string to all caps with toUpperCase()
var text = "john aaron"
var caps = text.toUpperCase();
console.log(caps);// prints JOHN AARON

//Access a certain character of string with charAt()
var greeting = "Hello Customer";
var char = greeting.charAt(0);
console.log(char);// prints H

//Split a string into an array with .split
var name = "Paul, Jones, Smith";
var names = name.split(",");
console.log(names);// prints ['Paul', 'Jones', 'Smith']



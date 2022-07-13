/**
* STRING MANIPULATION:
*
* 0. Strings can be manipulated with both operators and string method.

// 1. Manipulated using operators
*/

let a = "Good";
let b = "Morning";
let c = a + ' ' + b;
console.log(c); // prints Good Morning

let d = "Happy";
d += "Birthday";
console.log(d); // prints Happy Birthday

let e = "Hey";
let f = "there";
let g = e.concat(" ", f);
console.log(g);// print Hey there

// 2. Manipulation using methods

var name = "Luigi";
console.log(name.length);// prints 5
console.log(name[name.length - 1]); // print i

var string = "dog, cat, hamster";
var part = string.slice(5, 8);
console.log(part); // prints cat

var text = "Hello, good morning";
var newText = text.replace("morning", "evening");
console.log(newText);// prints hello, good evening

var text = "john aaron"
var caps = text.toUpperCase();
console.log(caps);// prints JOHN AARON

var greeting = "Hello Customer";
var char = greeting.charAt(0);
console.log(char);// prints H

var name = "Paul, Jones, Smith";
var names = name.split(",");
console.log(names);// prints ['Paul', 'Jones', 'Smith']



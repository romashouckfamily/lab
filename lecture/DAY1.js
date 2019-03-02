// Topic 1: Declaring variables
// ES5
// declaring a variable;
var age;
var height;
var weight;

// ES6
// let age;
// let height;
// let weight; 

// Topic 2: Data types (6 primitives + object)
// 1. number
var age1 = 16;
var age2 = 40;
var age3 = -5;

// console.log(age1);

// console.log(age3);
// console.log(1 / 0);

// console.log(Infinity * 3);
// The number type represents both integer and floating point numbers.

// There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.

// Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.
// Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number. We can get it as a result of division by zero:

// 2. boolean

// The boolean type has only two values: true and false.
// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

// Booleans can also be the output of a comparison.
// console.log(12 > 10);
// console.log(12 < 8);

var isLessThan12 = false;
// console.log(isLessThan12);
// 3. string 

// In JavaScript, there are 3 types of quotes.

// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.
// Double and single quotes are “simple” quotes. There’s no difference between them in JavaScript.

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}
var name1 = "Maria";
var name2 = 'Zain';
// var name3 = 'Melanie";

// console.log(name1);
// console.log(name2);
// console.log(`Hello, ${name1}!`);

// 4. undefined
// The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is undefined
// GOOD:
var age4;
//BAD:
var age5 = undefined;
//console.log(age5);
var sensor;
// 5. null
// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

var empty = null;
// console.log(empty);
// 6. symbol

// 7. object
// The object type is special.

// All other types are called “primitive” because their values can contain only a single thing 
// (be it a string or a number, etc). 
// In contrast, objects are used to store collections of data and more complex entities. 

var isGreaterThan70 = true;
var nadeen = {
	"skills": "flight",
	"strength": 99,
	"hobbies": "reading novels",
	"isReading": false,
	"age": isGreaterThan70,
	//5: "five"
};
// console.log(nadeen);
var skill = nadeen["skills"]; // flight
var strength = nadeen.strength; // 99
var num = nadeen["five"];
//console.log(num);

// console.log(skill);
// console.log(strength);
// Source: https://javascript.info/types

var classList = [
	"Natalie", "Maria A.", "Ellen", "Maria M.", "Hala", 
	"Salar", "Lubov", "Shrouq", "Diana", "Dania", "Nadeen", 
	"Amjad", "Christo", "Fawzi", "Judeh", "Moh", "Miray", "Ibrahim", "Anton"
	];

// var classList2 = {
// 	"19": 'anton'
// }
var ellen1 = classList[2]; // ELlen
var classNum = classList.length; // 19
// bracket notation
var anton1 = classList[19];
// dot notation - need string keys
var anton2 = classList[19];

var moh1 = classList[15];

console.log(moh1);
console.log(classNum);

// Function declaration

function identity (name1, name2) {
	return `Hello ${name2}`;
}

function sayHi (name1, name2) {
	return "Hello " + name1 + " and " + name2;
}

console.log(identity("Judeh", "Lubov"));
console.log(sayHi("Judeh", "Lubov"));



function subDec (num1, num2) {
	return num1 - num2;
}

// Function expression
var subEx = function (num1, num2) {
	return num1 - num2;
}

//console.log(subDec(5,10));

// Write addition function using declaration

// Write multiplication function using expression

// For more info: https://gomakethings.com/function-expressions-vs-function-declarations/

// Collaborative function writing for randomizing seating
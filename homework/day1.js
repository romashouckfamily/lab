// You are invited to work on this challenge in pairs. Complete at least 5 of the functions below. 
// You will be presenting the function you are assigned to the class next week, so please get something working! 
//If you work in pairs, please make sure both of you have the code written on your laptops. 
// There are 19 of you; one of you will not have a pair. This week, that person is Lubov. 

// Find your name below:

// Natalie and Maria A. | isEven
// Hala and Salar | isDivisibleBy3
// Maria M. and Ellen | getFirstTwoLettersOfEachWord
// Fawzi and Ibrahim | reverseString
// Christo and Amjad | isUndefined
// Shrouq and Diana | isSquareNumber
// Moh and Judeh | contains
// Dania and Nadeen | pluck
// Miray and Anton | indexOf
// Lubov and Ramiz | last

//////////////////////////////////
// input: 4 
// output: true

// input: 7
// output: false

// Returns true if number is even and false if number is odd.


function isEven(n) {
  n = Number(2);
  return n === 0 || !!(n && !(n%2));
}

function isOdd(n) {
  return isEven(Number(n) + 1);
}

isEven('2');

//////////////////////////////////
// input: 8
// output: false

// input 15
// output: true

// Returns true if number is divisible by 3 and false if not.
function isDivisibleBy3(num) {

}

//////////////////////////////////
// input: ['hello', 'goodbye', 'excellent']
// output: ['he', 'go', 'ex']

// gets the first two letters of each word in the list.
function getFirstTwoLettersOfEachWord(list) {

}

//////////////////////////////////
// input: "Hello Fawzi"
// output: "izwaF olleH"

// reverses a string input
function reverseString(str) {

}

//////////////////////////////////
// input: undefined
// output: true

// input: i, where i = 4
// output: false

// returns true if value is undefined and false if not.
function isUndefined(value) {

}

//////////////////////////////////
// input: 16
// output: true

// input: 23
// output: false

// returns true if input number is square and false if not.
function isSquareNumber(num) {

}

//////////////////////////////////
// input: [1, 2, 3], 3
// output: true

// input: [1, 2, 3], 8
// output: false

//Returns true if the value is present in the list. 
function contains(list, value) {

}

//////////////////////////////////
// input: [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}], 'name'
// output: ["moe", "larry", "curly"]

// A tool for extracting a list of property values.
function pluck(list, propertyName) {

}
//////////////////////////////////
// input: [1, 2, 3], 3
// output: 2

// input: ['a', 'b', 'c'], 'a'
// output: 0

// input: ['a', 'b', 'c'], 'e'
// output: -1

//Returns the index at which value can be found in the array, or -1 if value is not present in the array.
function indexOf(list, value) {

}

//////////////////////////////////
// input: [5, 4, 3, 2, 1], 2
// output: [2, 1]

// input: [5, 4, 3, 2, 1], 1
// output: 1

// input: ['a', 'b', 'c'], 2
// output: ['b', 'c']

//Returns the last element of an array. Passing n will return the last n elements of the array.
// function last(list, count) {


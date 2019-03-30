/* Day 3 review worksheet
	Please complete this worksheet to practice what we've learned so far. 
	If you have questions or get stuck, please utilize the steps we've learned in the problem-solving lecture: 
	Calm self by taking a break (if needed), identify the error, make a hypothesis, and try simple solutions first.
*/

// 0. Print "Hello, world" to the console.
console.log("Hello World"); 

//Write an if statement to check if a value is greater than or equal to 10.
var myName = "Sad";
if (myName>=10){
	console.log("It is greater than 10 or equal")
} else if (myName<10){
	console.log("It is not greater than or equal to 10")
} else{
	console.log("You didnt put the right thing")
}

<<<<<<< HEAD
=======
// 1. Write an if statement to check if a value is greater than or equal to 10.
>>>>>>> upstream/master


// 2. Write an if statement to check if a string begins with Z
let myStr = "Zebra";
if(myStr[0] = "Z"){
	console.log("true")
}else{
	console.log('False')
	} 


// 3. Print the third item in this array using bracket notation.
var list = ["a", "q", "f", "g", "p"];
<<<<<<< HEAD
console.log(list[2])
=======
>>>>>>> upstream/master

// 4. Objects
var person = {
	name: "Fawzi",
	age: 19, 
	school: "JSB",
	grade: 12
}
	// a. Print the value for key "name" in the above object using dot notation.
<<<<<<< HEAD
console.log(person.name)

	// b. Print the value for key "school" in the above object using bracket notation.
console.log(person.school)
=======

 

	// b. Print the value for key "school" in the above object using bracket notation.
>>>>>>> upstream/master

// 5. Add a value to this array using the push function.
var fruits = ["pomegranate", "peach", "pear", "pomelo", "rice"];
fruits.push("watermelon")
console.log(fruits)
// 6. Remove the value "rice" from the fruits array. Try the splice function. 
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
<<<<<<< HEAD
fruits.splice("4");
console.log(fruits);

=======
var fruits = ["pomegranate", "peach", "pear", "pomelo", "rice"];
fruits.splice(4);
console.log(fruits);
//expected output:array['pomegranate','peach','pear','pomelo']

//expected output:['pomegranate','peach','pear','pomelo']
>>>>>>> upstream/master
// 7. Add a key-value to the person object above with key = "hasComputer" and value = true.
person.hasComputer = true
console.log(person)
// 8. Write a for loop that prints the numbers 1-10 to the console.
for(var i=1; i<=10; i++){ //How to do a for loop (every time it loops i increses by one)
	
	console.log(i); //How to access elements in a list
}

//9. Write a while loop that prints the numbers 1-10 to the console.
var i =1;
while (i<= 9){
	i++;
	console.log(i);
}

 
// 10. Take an array of numbers and makes a new list of only the first and last elements of the given list.
// Write this code inside a function.

// input: [5, 10, 15, 20, 25]
function firstAndLast(list) {
var num1 = "5";
var num2 = "10";
var num3 = "15";
var num3 = "20";
var num3 = "25";
}
console.log(list)


ghty// 11. Take an array and return all elements less than 5. 
// Write this code inside a function.
// input: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
{

}


// 12. Write a function to check if the input is an array
// Hint: What does Array.isArray(Value); do?

// input 1: 5
// input 2: [1,2]

function isArrayInput(input) {

}

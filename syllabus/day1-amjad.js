// Debugging Activity!
// instructions: Make these functions work properly!

// one issue
function isDivisibleBy5 (num) {
	if (num % 5 == 0){

	
		return true;
		

	} else {
		return false;
	}
}

console.log(isDivisibleBy5(15));

// two issues
function reverseString (str) {
	let reversedString = "";    
	for (var i = str.length - 1; i >= 0; i-1 ){        
		reversedString += str[i];
	}
	   
	return reversedString;
}
console.log(reverseString("good afternoon"));
// two issues
function sayHello (name1, name2) {
	return "Hello {name1}, says ${name 2}";
	}
console.log(sayHello("Mahd" , "Amjad"));
// two issues
function sayGoodbye(name1){
	console.log('Goodbye!');
}
SayGoodbye();
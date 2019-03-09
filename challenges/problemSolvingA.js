// (1) Return all elements beginning with the letter "Q" from input array.
// inputs: 
var myList = ["Quit", "Quarreling", "Angry", "Joyful", "Sleepy"] 
// input type: list of strings
// outputs: ["Quit", "Quarreling"]
// output type: list of strings

function getElementsBeginningWithQ(list) {
	// create a new list to store all elements beginning with Q
	var qList = [];
	// iterate through the list 
	// i = i+1 is the same as i++
	for (var i = 0; i < list.length; i++) {
		// for each item, check if element begins with Q using an IF statement
			if (list[i][0] == "Q") {
				// if item begins with Q, store the element in new list
				qList.push(list[i])	
			}
	}
	// return new list		
	//console.log("qList" + qList);
	return qList;
}

var q = getElementsBeginningWithQ(myList);
//console.log("q: " + q);

function example() {
  y = 1;   // Throws a ReferenceError in strict mode
  var z = 2;
}

example();

console.log(y); // logs "1" 
console.log(y + 2);

console.log(z); // Throws a ReferenceError: z is not defined outside x
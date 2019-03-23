// Syntax Cheat sheet
var x = 3; // How to declare a variable
var myList = ['Mahd', 'Blanket' , 'Laptop']; //List (each item seperated by comma)

function functionName(input1, input2){ //Notice how we seperate inputs with a comma
	return input1 + input2; // What we want the function to do in the body
}
functionName(x ,3); //Calling the function to use it

// If statement
if(x===3){ // Inside the parenthesis is where we give the argument
	console.log(true); //If it is equal then do whatever
}else{ //If it is not equal then do this
	console.log(false);
}
//This will log true due to x being equal three

for(var i=0; i<myList.length; i++){ //How to do a for loop (every time it loops i increses by one)
	
	console.log(myList[i]); //How to access elements in a list
}
